class TemplateLoader {
    constructor() {
        this.renderer = new AnkiRenderer();
        this.currentTemplate = null;
        this.currentView = 'front';
        this.currentCardType = null;
        this.availableCardTypes = [];
    }

    async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const templateName = urlParams.get('template');

        if (!templateName) {
            this.showError('Template não especificado na URL');
            return;
        }

        document.getElementById('template-name').textContent = templateName;

        try {
            await this.loadTemplateConfig(templateName);

            this.currentCardType = this.availableCardTypes[0];

            this.createCardTypeSelector();

            await this.loadTemplateFiles();

            this.createFieldEditors();

            this.loadSampleData();

            this.updatePreview();

        } catch (error) {
            console.error('Erro ao inicializar:', error);
            this.showError(`Erro ao carregar template: ${error.message}`);
        }
    }

    async loadTemplateConfig(templateName) {
        const basePath = `../templates/${templateName}`;

        try {
            const response = await fetch(`${basePath}/template.json`);
            if (!response.ok) throw new Error('template.json não encontrado');

            const config = await response.json();

            this.currentTemplate = {
                name: config.modelName || templateName,
                path: basePath,
                fields: config.inOrderFields || [],
                cardTemplates: config.cardTemplates || ['Card 1']
            };

            this.availableCardTypes = this.currentTemplate.cardTemplates.map(ct => {
                return ct.replace(/\s+/g, '_');
            });

            this.currentTemplate.sampleData = this.generateSampleData(this.currentTemplate.fields);

        } catch (error) {
            throw new Error(`Falha ao carregar configuração: ${error.message}`);
        }
    }

    generateSampleData(fields) {
        const samples = {
            'Question': 'Qual é a capital do Brasil?',
            'Answer': 'Brasília',
            'Front': 'O que é JavaScript?',
            'Back': 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
            'Text': 'A capital do Brasil é {{c1::Brasília}}.',
            'Extra': 'Informação adicional sobre a capital.',
            'TypeHint': 'Começa com "Bra" e é a sede do governo federal',
            'Keywords': 'brasil capital geografia',
            'Hint': 'Lembre-se: o caso base da recursão é quando n <= 1. Para n = 5, a função chama fatorial(4), que chama fatorial(3), e assim por diante até fatorial(1), que retorna 1. Depois, cada chamada multiplica seu valor pelo resultado da chamada anterior.',

            'Description': 'Como criar uma função que calcula o fatorial de um número usando recursão?',
            'Language': 'Python',
            'Code': `def fatorial(n):
    """Calcula o fatorial de n usando recursão."""
    if n <= 1:
        return 1
    return n * fatorial(n - 1)

# Exemplo de uso
resultado = fatorial(5)
print(f"5! = {resultado}")  # Saída: 5! = 120`,
            'Further Description': 'A função fatorial calcula o produto de todos os números inteiros positivos até n. A recursão é uma técnica onde a função chama a si mesma com um valor menor até atingir o caso base (n <= 1).',
            'Subdeck': '5.AllMyITKnowledge::Python::Funções',
            'Source': 'Documentação Python - Recursão',
            'Explanation': 'A função usa recursão: se n <= 1, retorna 1 (caso base). Caso contrário, retorna n multiplicado pelo fatorial de (n-1). A pilha de chamadas cresce até o caso base e depois resolve todas as multiplicações.',

            'EnunciadoQuestao': 'Qual é a capital da França?',
            'Alternativa-A': 'Londres',
            'Alternativa-B': 'Paris',
            'Alternativa-C': 'Berlim',
            'Alternativa-D': 'Madrid',
            'Alternativa-E': 'Roma',
            'Gabarito': 'B',
            'Anotacoes': 'Paris é a capital e a cidade mais populosa da França, situada na margem do rio Sena.',

            'Imagem': '',
            'Imagen': '',
            'Image': '',
            'Header': 'Anatomia do Coração',
            'Footer': 'Estude as principais estruturas cardíacas',

            'Tags': 'estudo programação python',
            'Deck': 'Estudos::Programação::Python::Básico',
            'Subdeck': 'Básico',

            '_flag': 0,

            'ClozeText': 'A capital do Brasil é {{c1::Brasília}} e fica na região {{c2::Centro-Oeste}}.',
            'Text': 'Python é uma linguagem de {{c1::programação}} de {{c2::alto nível}} criada por {{c3::Guido van Rossum}}.',
            'Texto': 'O {{c1::coração}} bombeia {{c2::sangue}} para todo o corpo através das {{c3::artérias}}.'
        };

        const data = {};
        fields.forEach(field => {
            data[field] = samples[field] || `Exemplo para ${field}`;
        });

        return data;
    }


    createCardTypeSelector() {
        const controlsDiv = document.querySelector('.controls');

        const existingSelector = document.getElementById('card-type-selector-container');
        if (existingSelector) {
            existingSelector.remove();
        }

        const hasMultipleTypes = this.availableCardTypes.length > 1;
        const badgeHTML = hasMultipleTypes ? '' : '<span style="font-size: 0.75rem; color: #999; font-weight: normal; margin-left: 0.5rem;">(único)</span>';

        const selectorHTML = `
            <div id="card-type-selector-container">
                <label>
                    📋 Card Type ${badgeHTML}
                </label>
                <select id="card-type-selector" ${!hasMultipleTypes ? 'disabled' : ''}>
                    ${this.availableCardTypes.map((cardType, index) => `
                        <option value="${cardType}">${this.currentTemplate.cardTemplates[index]}</option>
                    `).join('')}
                </select>
                ${!hasMultipleTypes ? '<div class="card-type-info">Este template possui apenas um tipo de card</div>' : ''}
            </div>
        `;

        controlsDiv.insertAdjacentHTML('afterbegin', selectorHTML);

        const selectElement = document.getElementById('card-type-selector');


        if (!hasMultipleTypes) {
            selectElement.disabled = true;
        } else {

            selectElement.addEventListener('change', async (e) => {
                this.currentCardType = e.target.value;


                const previewContainer = document.getElementById('preview-content');
                previewContainer.innerHTML = '<div class="loading">Carregando Card Type...</div>';

                try {
                    await this.loadTemplateFiles();
                    this.updatePreview();
                } catch (error) {
                    this.showError(`Erro ao carregar Card Type: ${error.message}`);
                }
            });

            selectElement.addEventListener('focus', () => {
                selectElement.style.borderColor = '#667eea';
            });
            selectElement.addEventListener('blur', () => {
                selectElement.style.borderColor = '#e0e0e0';
            });
        }
    }

    /**
     * Carrega os arquivos do Card Type atual
     */
    async loadTemplateFiles() {
        try {
            const basePath = this.currentTemplate.path;
            const cardTypePath = `${basePath}/${this.currentCardType}`;

            console.log(`Carregando Card Type: ${this.currentCardType} de ${cardTypePath}`);

            // Carrega Front.html
            const frontResponse = await fetch(`${cardTypePath}/Front.html`);
            if (!frontResponse.ok) throw new Error(`Front.html não encontrado em ${cardTypePath}`);
            this.currentTemplate.frontHTML = await frontResponse.text();

            // Carrega Back.html
            const backResponse = await fetch(`${cardTypePath}/Back.html`);
            if (!backResponse.ok) throw new Error(`Back.html não encontrado em ${cardTypePath}`);
            this.currentTemplate.backHTML = await backResponse.text();

            // Carrega Style.css (compartilhado entre todos os Card Types)
            const styleResponse = await fetch(`${basePath}/Style.css`);
            if (!styleResponse.ok) throw new Error('Style.css não encontrado');
            this.currentTemplate.styleCSS = await styleResponse.text();

            console.log('✓ Arquivos carregados com sucesso');

        } catch (error) {
            console.error('Erro ao carregar arquivos do template:', error);
            throw error;
        }
    }

    /**
     * Cria os editores de campo dinamicamente
     */
    createFieldEditors() {
        const container = document.getElementById('fields-editor');
        const fields = this.currentTemplate.fields;

        if (!fields || fields.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center; padding: 2rem;">Nenhum campo definido no template.json</p>';
            return;
        }

        container.innerHTML = fields.map(field => {
            // Campos que devem ser textarea
            const longFields = ['Back', 'Explanation', 'Code', 'Extra', 'Text', 'Hint',
                              'Further Description', 'Anotacoes', 'EnunciadoQuestao',
                              'Description', 'Source'];
            const isLongField = longFields.some(lf => field.includes(lf));

            return `
                <div class="field-group">
                    <label for="field-${field}">${field}</label>
                    ${isLongField ?
                        `<textarea id="field-${field}" data-field="${field}"></textarea>` :
                        `<input type="text" id="field-${field}" data-field="${field}">`
                    }
                </div>
            `;
        }).join('');

        // Adiciona listeners para atualização automática
        container.querySelectorAll('input, textarea').forEach(el => {
            el.addEventListener('input', () => {
                clearTimeout(this.updateTimeout);
                this.updateTimeout = setTimeout(() => this.updatePreview(), 500);
            });
        });
    }

    /**
     * Carrega dados de exemplo
     */
    loadSampleData() {
        const sampleData = this.currentTemplate.sampleData;

        Object.keys(sampleData).forEach(field => {
            const input = document.getElementById(`field-${field}`);
            if (input) {
                input.value = sampleData[field];
            }
        });
    }

    /**
     * Coleta os dados dos campos
     */
    getFieldData() {
        const data = {};
        this.currentTemplate.fields.forEach(field => {
            const input = document.getElementById(`field-${field}`);
            data[field] = input ? input.value : '';
        });
        return data;
    }

    /**
     * Atualiza o preview
     */
    updatePreview() {
        try {
            const fieldData = this.getFieldData();

            // Prepara informações do card
            const cardInfo = {
                cardTypeName: this.currentTemplate.cardTemplates[
                    this.availableCardTypes.indexOf(this.currentCardType)
                ] || 'Card 1',
                cardOrd: this.availableCardTypes.indexOf(this.currentCardType) + 1
            };

            const html = this.renderer.render(
                this.currentTemplate.frontHTML,
                this.currentTemplate.backHTML,
                this.currentTemplate.styleCSS,
                fieldData,
                this.currentView,
                cardInfo
            );

            const previewContainer = document.getElementById('preview-content');

            // Remove iframe antigo
            const oldIframe = previewContainer.querySelector('iframe');
            if (oldIframe) {
                oldIframe.remove();
            }

            // Cria novo iframe
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.minHeight = '600px';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '8px';
            iframe.style.backgroundColor = this.renderer.isDarkMode ? '#242426' : '#cfd6d8';

            previewContainer.innerHTML = '';
            previewContainer.appendChild(iframe);

            // Escreve o HTML no iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();

            // Ajusta altura do iframe
            iframe.onload = () => {
                try {
                    const iframeBody = iframe.contentDocument.body;
                    const iframeHtml = iframe.contentDocument.documentElement;
                    const height = Math.max(
                        iframeBody.scrollHeight,
                        iframeBody.offsetHeight,
                        iframeHtml.clientHeight,
                        iframeHtml.scrollHeight,
                        iframeHtml.offsetHeight
                    );
                    iframe.style.height = (height + 50) + 'px';
                } catch (e) {
                    iframe.style.height = '600px';
                }
            };

        } catch (error) {
            console.error('Erro ao atualizar preview:', error);
            this.showError(`Erro ao renderizar: ${error.message}`);
        }
    }

    /**
     * Alterna a visualização
     */
    showView(view) {
        this.currentView = view;

        // Atualiza botões ativos
        document.querySelectorAll('.view-toggle button').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        this.updatePreview();
    }

    /**
     * Alterna tema claro/escuro
     */
    toggleTheme() {
        const isChecked = document.getElementById('theme-toggle').checked;
        this.renderer.isDarkMode = isChecked;

        const container = document.getElementById('preview-container');
        const body = document.body;

        if (isChecked) {
            container.classList.add('night-mode');
            body.classList.add('dark-mode');
        } else {
            container.classList.remove('night-mode');
            body.classList.remove('dark-mode');
        }

        this.updatePreview();
    }

    /**
     * Mostra mensagem de erro
     */
    showError(message) {
        const previewContainer = document.getElementById('preview-content');
        previewContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #e74c3c; background: var(--card-bg); border: 2px solid var(--card-border); border-radius: 12px; max-width: 500px; margin: 2rem auto; box-shadow: var(--shadow-md);">
                <h2>❌ Erro</h2>
                <p style="margin: 1rem 0; color: var(--text-secondary);">${message}</p>
                <a href="index.html" style="color: var(--accent-1); text-decoration: underline; font-weight: 600;">← Voltar para lista de templates</a>
                <br><br>
                <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.7rem 1.5rem; background: var(--accent-1); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;">
                    🔄 Tentar Novamente
                </button>
            </div>
        `;
    }
}

// Funções globais para os botões
let templateLoader;

window.onload = () => {
    templateLoader = new TemplateLoader();
    templateLoader.init().catch(error => {
        console.error('Erro ao inicializar:', error);
    });
};

function updatePreview() {
    if (templateLoader) {
        templateLoader.updatePreview();
    }
}

function loadSampleData() {
    if (templateLoader) {
        templateLoader.loadSampleData();
        templateLoader.updatePreview();
    }
}

function showView(view) {
    if (templateLoader) {
        templateLoader.showView(view);
    }
}

function toggleTheme() {
    if (templateLoader) {
        templateLoader.toggleTheme();
    }
}
