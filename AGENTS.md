# AGENTS.md - Anki Note Types Collection

## Project Overview

Collection of enhanced Anki note types with modern CSS styling, dark/light mode support, and interactive features. Templates use HTML, CSS, and vanilla JavaScript for Anki compatibility.

## Project Structure

```
AnkiNoteTypes/
├── templates/           # Anki note type templates
│   └── {TemplateName}/
│       ├── template.json    # Model config (fields, card names)
│       ├── Style.css        # Shared styles for all cards
│       ├── README.md        # Template documentation
│       └── Card_N/          # Card templates (N = 1, 2, ...)
│           ├── Front.html
│           └── Back.html
├── media/               # Shared assets (_prefix for Anki)
└── preview/             # Local preview environment (if exists)
```

### Validation

```bash
# Check JSON syntax
cat templates/*/template.json | jq .

# Validate HTML (optional)
npx html-validate templates/*/Card_*/*.html
```

## Code Style Guidelines

### HTML Templates

**Structure pattern** - All templates follow this wrapper:
```html
<div class="prettify-flashcard">
  {{#Tags}}<div class="prettify-tags">{{clickable:Tags}}</div>{{/Tags}}
  <div class="prettify-field prettify-field--front">{{edit:Front}}</div>
  <!-- content -->
</div>
```

**Anki syntax reference:**
| Syntax | Usage |
|--------|-------|
| `{{Field}}` | Simple field |
| `{{#Field}}...{{/Field}}` | Conditional (field not empty) |
| `{{^Field}}...{{/Field}}` | Inverse conditional (field empty) |
| `{{edit:Field}}` | Editable field |
| `{{type:Field}}` | Typing input |
| `{{cloze:Field}}` | Cloze deletion |
| `{{hint:Field}}` | Clickable hint |
| `{{clickable:Field}}` | Clickable element |

**Script placement:** Always at end of HTML file, after markup.

### CSS Guidelines

**File naming:** `Style.css` (exactly, case-sensitive)

**CSS variables pattern** - Define in `:root`, override for dark mode:
```css
:root {
  --text-fg: #333333e6;
  --card-bg: #ffffff;
  --font-size-regular: 20px;
  --font-family: "Inter", -apple-system, system-ui, sans-serif;
}

/* Dark mode - multiple selectors for cross-platform */
:root.night-mode,
:root.night_mode,
.night_mode,
.nightMode {
  --text-fg: #ffffffe6;
  --card-bg: #2e2f31;
}
```

**Naming conventions:**
- BEM-like: `.prettify-field`, `.prettify-field--front`, `.prettify-field--back`
- Utility prefix: `.prettify-*` for template components
- Section comments: `/* ----- SECTION NAME */`

**Required responsive breakpoints:**
```css
@media (max-width: 600px) { /* Mobile */ }
@media (min-width: 601px) and (max-width: 768px) { /* Tablet */ }
@media (min-width: 769px) { /* Desktop */ }
```

**Mobile class:** Anki adds `.mobile` class - use for mobile-specific styles:
```css
.mobile .prettify-field { margin: 0.2em 0.5em; }
```

### JavaScript Guidelines

**Pattern:** IIFE to avoid global pollution:
```javascript
(function() {
  'use strict';
  // code here
})();
```

**Global state check** - Prevent duplicate handlers:
```javascript
if (!window.myHandler) {
  window.myHandler = function(e) { /* ... */ };
  document.addEventListener('click', window.myHandler, true);
}
```

**DOM queries:**
- Use `document.querySelector()` / `document.querySelectorAll()`
- Always null-check before accessing: `if (element) { ... }`

**No external dependencies** except:
- Ace Editor (CDN) for code templates
- Google Fonts (preconnect pattern)

### template.json Format

```json
{
  "modelName": "TemplateName",
  "inOrderFields": ["Field1", "Field2", "Field3"],
  "cardTemplates": ["Card 1", "Card 2"]
}
```

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Template folder | PascalCase or PascalCase++ | `Basic++`, `CodeTypingPractice` |
| Card folders | `Card_N` or `Card_N_SUFFIX` | `Card_1`, `Card_2_TYPE` |
| HTML files | `Front.html`, `Back.html` | Exact names required |
| CSS file | `Style.css` | Exact name required |
| Media files | `_prefix` for Anki collection | `_JetBrains.ttf` |

## Common Patterns

### Tag Splitting (hierarchical tags)
```javascript
var parts = tag.split('::');
var displayName = parts[parts.length - 1]; // Last segment only
```

### Image Zoom Toggle
```javascript
if (e.target.tagName === 'IMG' && e.target.closest('.prettify-flashcard')) {
  e.target.classList.toggle('zoomed');
}
```

### Random Accent Color
```javascript
var randomIndex = Math.floor(Math.random() * 9 + 1);
document.documentElement.style.setProperty('--random-color', 'var(--color-' + randomIndex + ')');
```

## Error Handling

- Always wrap editor initialization in try/catch with fallback
- Null-check DOM elements before manipulation
- Use `console.error()` for debugging (removed in production)

## Requirements

- Anki 2.1+ (some features require 2.1.50+)
- Modern browser for AnkiWeb
- Node.js 14+ for local preview only

## Do NOT

- Use ES6+ syntax not supported by Anki's Qt WebEngine (avoid `let`/`const` in older templates)
- Add npm dependencies to templates (must be self-contained)
- Modify `template.json` field order without updating HTML references
- Use external resources without CDN fallback consideration

---

## Creating Flashcards via CSV

### CSV Format Rules

- **Delimiter:** Tab (`\t`) - recommended for compatibility
- **Encoding:** UTF-8 (with BOM for Excel compatibility)
- **Field order:** Must match `inOrderFields` in `template.json`
- **HTML in fields:** Allowed (use `<br>` for line breaks)
- **Escape quotes:** Double quotes (`""`) inside quoted fields

### Template Field Reference

| Template | Fields (in order) |
|----------|-------------------|
| **Basic++** | Front `\t` Imagen `\t` Back `\t` Keywords |
| **Cloze++** | Text `\t` Imagen `\t` Back Extra `\t` Keywords |
| **CodeTypingPractice** | Description `\t` Hint `\t` Code `\t` Language `\t` Further Description `\t` Source |
| **OneLineTypeAnswer** | Question `\t` Answer `\t` TypeHint `\t` Keywords |
| **ImageOcclusion++** | Image `\t` Occlusion `\t` Header `\t` Comments `\t` Back Extra |
| **MultiplaEscolhaQuestao** | EnunciadoQuestao `\t` Imagem `\t` Alternativa-A `\t` Alternativa-B `\t` Alternativa-C `\t` Alternativa-D `\t` Alternativa-E `\t` Gabarito `\t` Anotacoes |
| **CertoErradoQuestao** | EnunciadoQuestao `\t` Imagem `\t` Anotacoes `\t` Gabarito |

### Special Field Notes

- **Imagen/Imagem:** Use `<img src="filename.jpg">` - file must be in Anki media folder
- **Cloze Text:** Use `{{c1::answer}}` syntax, increment number for multiple clozes
- **Code field:** Use `<br>` for line breaks, escape HTML entities
- **Gabarito (MultiplaEscolha):** Single letter A-E
- **Gabarito (CertoErrado):** "Certo" or "Errado"

### LaTeX Math Formatting

Use MathJax delimiters for mathematical expressions in CSV fields:

- **Inline math:** `\(...\)` - e.g., `\(x^2 + y^2 = r^2\)`
- **Display math (block):** `\[...\]` - e.g., `\[\int_0^1 x^2 dx = \frac{1}{3}\]`

**Examples in CSV:**
```tsv
What is the quadratic formula?		\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\)	math algebra
Calculate the integral	\[\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}\]	Use Gaussian integral	calculus
```

**DO NOT use:**
- `$...$` or `$$...$$` (not supported by MathJax in Anki by default)
- Unescaped backslashes in non-math contexts

### Multiple Choice Answer Distribution Rules

When generating multiple choice questions (MultiplaEscolhaQuestao), follow these rules:

1. **Equal distribution:** Divide total questions by number of alternatives (5). For 10 questions: 2 each for A, B, C, D, E
2. **No consecutive repeats:** Never have 3+ questions in a row with the same answer
3. **Shuffle answers:** Randomize answer positions so correct answer isn't always in the same slot
4. **Avoid patterns:** Don't create predictable sequences (e.g., A-B-C-D-E-A-B-C-D-E)

**Example distribution for 10 questions:**
```
Q1: C | Q2: A | Q3: D | Q4: B | Q5: E
Q6: A | Q7: C | Q8: E | Q9: B | Q10: D
```

**Bad patterns to avoid:**
- `A, A, A, B, B, B, C, C, D, E` (clustering)
- `A, B, C, D, E, A, B, C, D, E` (predictable cycle)
- `C, C, C, C, C, A, B, D, E, E` (heavy repetition)


---

### Working with Typst documents

Check if the `docs_typst` folder is present in the project root; if not, create it.

Use the .typ extension with Typst + CeTZ for the "<THEME>" theme, include a short explanation, a didactic graph with axes/legends/highlights, and compile to PDF in `docs_typst`.

Also in Typst + CeTZ use a centered didactic graph (#align(center)), with a gray grid (help-lines), axes with stealth arrows at both ends, small markings and labels (7pt), function in blue (segmented line), root in labeled red point, domain highlighted in orange on the x-axis and image highlighted in green on the y-axis, maintaining a clean and consistent layout.
