class AnkiRenderer {
    constructor() {
        this.currentView = 'front';
        this.isDarkMode = false;
    }

    render(frontTemplate, backTemplate, styleCSS, fieldData, view = 'front', cardInfo = {}) {
        let html = this.buildBaseHTML(styleCSS, cardInfo);

        let frontHTML = this.processTemplate(frontTemplate, fieldData, cardInfo);

        let backHTML = '';
        if (view === 'back' || view === 'both') {
            let backTemplateProcessed = backTemplate.replace(/\{\{FrontSide\}\}/g, frontHTML);
            backHTML = this.processTemplate(backTemplateProcessed, fieldData, cardInfo);
        }

        let content = '';
        if (view === 'front') {
            content = frontHTML;
        } else if (view === 'back') {
            content = backHTML;
        } else {
            content = `
                <div style="margin-bottom: 2rem;">
                    <h3 style="text-align: center; color: #666; margin-bottom: 1rem;">FRONT</h3>
                    ${frontHTML}
                </div>
                <div>
                    <h3 style="text-align: center; color: #666; margin-bottom: 1rem;">BACK</h3>
                    ${backHTML}
                </div>
            `;
        }

        html += `<div id="qa" style="opacity: 1;">${content}</div>`;
        html += this.getScripts();
        html += '</body></html>';

        return html;
    }

    processHTMLPaths(html) {
        const fileMapping = {
            '_prism-vsc-dark-plus.css': 'prism-vsc-dark-plus.min.css'
        };

        html = html.replace(/src=["'](_[^"']+)["']/g, (match, filename) => {
            if (filename.startsWith('http://') || filename.startsWith('https://')) {
                return match;
            }
            const mappedFile = fileMapping[filename] || filename;
            return `src="/media/${mappedFile}"`;
        });

        html = html.replace(/href=["'](_[^"']+)["']/g, (match, filename) => {
            if (filename.startsWith('http://') || filename.startsWith('https://')) {
                return match;
            }
            const mappedFile = fileMapping[filename] || filename;
            return `href="/media/${mappedFile}"`;
        });

        return html;
    }

    processTemplate(template, fieldData, cardInfo = {}) {
        let processed = template;

        processed = this.removeInlineScripts(processed);

        processed = this.processConditionals(processed, fieldData);

        processed = this.processCloze(processed, fieldData);

        processed = this.processSpecialFields(processed, fieldData);

        processed = this.processSimpleFields(processed, fieldData);

        processed = this.addMetadataFields(processed, fieldData, cardInfo);

        processed = this.processHTMLPaths(processed);

        return processed;
    }

    removeInlineScripts(template) {
        let processed = template.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        processed = processed.replace(/<link[^>]*highlight\.js[^>]*>/gi, '');
        processed = processed.replace(/<tts[^>]*>/gi, '');
        processed = processed.replace(/<\/tts>/gi, '');
        processed = processed.replace(/<!--[\s\S]*?-->/g, '');
        return processed;
    }

    processConditionals(template, fieldData) {
        let result = template;

        result = this.processConditionalType(result, fieldData, '#', true);

        result = this.processConditionalType(result, fieldData, '^', false);

        return result;
    }

    processConditionalType(template, fieldData, prefix, isPositive) {
        let result = template;
        let changed = true;
        let maxIterations = 100;

        while (changed && maxIterations > 0) {
            changed = false;
            maxIterations--;

            const openRegex = new RegExp(`\\{\\{${prefix === '^' ? '\\^' : prefix}([^}]+)\\}\\}`, 'g');
            let match;

            while ((match = openRegex.exec(result)) !== null) {
                const fieldName = match[1].trim();
                const openTag = match[0];
                const openIndex = match.index;
                const closeTag = `{{/${fieldName}}}`;

                const closeIndex = this.findMatchingClose(result, openIndex + openTag.length, fieldName, prefix);

                if (closeIndex !== -1) {
                    const content = result.substring(openIndex + openTag.length, closeIndex);
                    const fieldValue = fieldData[fieldName];
                    const hasValue = fieldValue && fieldValue.trim() !== '';

                    let replacement;
                    if (isPositive) {
                        replacement = hasValue ? content : '';
                    } else {
                        replacement = hasValue ? '' : content;
                    }

                    result = result.substring(0, openIndex) +
                             replacement +
                             result.substring(closeIndex + closeTag.length);

                    changed = true;
                    break;
                }
            }
        }

        return result;
    }

    findMatchingClose(template, startIndex, fieldName, prefix) {
        const openTag = `{{${prefix}${fieldName}}}`;
        const closeTag = `{{/${fieldName}}}`;
        let depth = 1;
        let pos = startIndex;

        while (pos < template.length && depth > 0) {
            const nextOpen = template.indexOf(openTag, pos);
            const nextClose = template.indexOf(closeTag, pos);

            if (nextClose === -1) {
                return -1;
            }

            if (nextOpen !== -1 && nextOpen < nextClose) {
                depth++;
                pos = nextOpen + openTag.length;
            } else {
                depth--;
                if (depth === 0) {
                    return nextClose;
                }
                pos = nextClose + closeTag.length;
            }
        }

        return -1;
    }

    processCloze(template, fieldData) {
        const clozeFieldRegex = /\{\{cloze:([^}]+)\}\}/g;

        template = template.replace(clozeFieldRegex, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            let text = fieldData[trimmedFieldName] || '';

            text = text.replace(/\{\{c(\d+)::([^}:]+)(?:::([^}]+))?\}\}/g,
                (m, num, content, hint) => {
                    const hintText = hint ? ` <span class="cloze-hint">[${hint}]</span>` : '';
                    return `<span class="cloze" data-cloze="${num}">[${content}]</span>${hintText}`;
                }
            );

            return text;
        });

        template = template.replace(/\{\{c(\d+)::([^}:]+)(?:::([^}]+))?\}\}/g,
            (m, num, content, hint) => {
                const hintText = hint ? ` <span class="cloze-hint">[${hint}]</span>` : '';
                return `<span class="cloze" data-cloze="${num}">[${content}]</span>${hintText}`;
            }
        );

        return template;
    }

    processSimpleFields(template, fieldData) {
        return template.replace(/\{\{([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            return fieldData[trimmedFieldName] || '';
        });
    }

    processSpecialFields(template, fieldData) {
        let processed = template;

        processed = processed.replace(/\{\{edit:cloze:([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            let text = fieldData[trimmedFieldName] || '';

            text = text.replace(/\{\{c(\d+)::([^}:]+)(?:::([^}]+))?\}\}/g,
                (m, num, content, hint) => {
                    const hintText = hint ? ` <span class="cloze-hint">[${hint}]</span>` : '';
                    return `<span class="cloze" data-cloze="${num}">[${content}]</span>${hintText}`;
                }
            );

            return text;
        });

        processed = processed.replace(/\{\{edit:(?!cloze:)([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            return fieldData[trimmedFieldName] || '';
        });

        processed = processed.replace(/\{\{type:([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            const answer = fieldData[trimmedFieldName] || '';
            return `<input type="text" id="typeans" value=""
                           data-answer="${this.escapeHtml(answer)}"
                           placeholder="Digite sua resposta...">`;
        });

        processed = processed.replace(/\{\{hint::([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            const hintText = fieldData[trimmedFieldName] || '';
            const hintId = 'hint' + Math.random().toString(36).substring(7);
            return `
                <a class="hint" href="#"
                   onclick="this.style.display='none';
                           document.getElementById('${hintId}').style.display='block';
                           return false;" draggable="false">
                    TypeHint</a>
                <div id="${hintId}" class="hint" style="display: none">${hintText}</div>
            `;
        });

        processed = processed.replace(/\{\{clickable:([^}]+)\}\}/g, (match, fieldName) => {
            const trimmedFieldName = fieldName.trim();
            return fieldData[trimmedFieldName] || '';
        });

        return processed;
    }

    addMetadataFields(template, fieldData, cardInfo) {
        const cardName = cardInfo.cardTypeName || 'Card 1';
        template = template.replace(/\{\{Card\}\}/g, cardName);

        const deck = fieldData.Deck || fieldData.Subdeck || '';
        template = template.replace(/\{\{Deck\}\}/g, deck);

        const subdeck = deck.split('::').pop() || '';
        template = template.replace(/\{\{Subdeck\}\}/g, subdeck);

        const flagIndex = fieldData._flag || 0;
        template = template.replace(/\{\{CardFlag\}\}/g, flagIndex);

        return template;
    }

    processCSSPaths(css) {
        css = css.replace(/url\(["']?(_[^"')]+)["']?\)/g, (match, filename) => {
            if (filename.startsWith('http://') || filename.startsWith('https://')) {
                return match;
            }
            return `url("/media${filename}")`;
        });

        return css;
    }

    buildBaseHTML(styleCSS, cardInfo = {}) {
        const theme = this.isDarkMode ? 'night-mode' : '';
        const themeAttr = this.isDarkMode ? 'data-bs-theme="dark"' : '';
        const randomColor = Math.floor(Math.random() * 9 + 1);
        const cardOrd = cardInfo.cardOrd || 1;

        let processedCSS = this.processCSSPaths(styleCSS);

        return `
<!DOCTYPE html>
<html class="${theme} linux chrome" dir="ltr" ${themeAttr} style="--random-color: var(--color-${randomColor});">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <style>
        body {
            zoom: 1;
            background-color: var(--canvas);
            margin: 0;
            padding: 0;
        }
        html {
            font-family: "Ubuntu", sans-serif;
        }
        :root {
            --canvas: ${this.isDarkMode ? '#2c2c2c' : '#f5f5f5'};
            --random-color: var(--color-${randomColor});

            --flag-0: transparent;
            --flag-1: #e74c3c;    /* Red */
            --flag-2: #e67e22;    /* Orange */
            --flag-3: #2ecc71;    /* Green */
            --flag-4: #3498db;    /* Blue */
            --flag-5: #e91e63;    /* Pink */
            --flag-6: #1abc9c;    /* Turquoise */
            --flag-7: #9b59b6;    /* Purple */
        }
        :root[class*=night-mode] { --canvas: #2c2c2c }
    </style>
    <style>
${processedCSS}
    </style>
</head>
<body class="card card${cardOrd} isLin ${this.isDarkMode ? 'nightMode night_mode' : ''}">
`;
    }

    getScripts() {
        return `
<script>
    var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
    if (tagsContainerEl.length > 0) {
        var tags = []
        tagsContainerEl.forEach((tagEl) => {
            tagEl.classList.add('prettify-tag')
            tags.push(tagEl.innerHTML)
            tags.forEach((tag) => {
                var childTag = tag.split('::').filter(Boolean)
                tagEl.innerHTML = childTag[childTag.length - 1].trim()
            })
        })
    } else {
        var tagsContainerEl2 = document.querySelector('.prettify-tags')
        if (tagsContainerEl2) {
            var tags = tagsContainerEl2.innerHTML.split(' ').filter(Boolean)
            var html = ''
            tags.forEach((tag) => {
                var childTag = tag.split('::').filter(Boolean)
                html += "<span class='prettify-tag'>" + childTag[childTag.length - 1] + '</span>'
            })
            tagsContainerEl2.innerHTML = html
        }
    }
</script>

<script>
    var deckEl = document.querySelector('.prettify-deck')
    if (deckEl) {
        var subDecks = deckEl.innerHTML.split('::').filter(Boolean)
        var html = []
        subDecks.forEach((subDeck) => {
            html.push("<span class='prettify-subdeck'>" + subDeck + '</span>')
        })
        deckEl.innerHTML = html.join('&nbsp;/&nbsp;')
    }
</script>

<script>
    var inputEl = document.getElementById('typeans');
    if (inputEl) {
        inputEl.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.classList.add('centered');
            }
        });
    }
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
<script>
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
</script>
`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

