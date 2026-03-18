# Anki Note Types Collection

A curated collection of enhanced Anki note types with modern styling, interactive features, and specialized templates for various learning scenarios.

## Overview

This repository contains a set of professionally designed Anki note types that extend the functionality of standard Anki templates. Each template includes modern CSS styling, dark/light mode support, and features tailored to specific learning needs.

## Features

All templates include:
- Modern, clean design with customizable CSS variables
- Light and dark mode support
- Hierarchical tags display
- Smart footer links for quick searches
- Mobile-responsive design
- Consistent styling across all templates

## Local Preview (Development Environment)

This project includes a local preview environment that allows you to view and test templates directly in your browser, similar to Anki's preview functionality.

### Preview Features

- **Dynamic template listing** - Automatically detects all available templates
- **Real-time rendering** - Update fields and see changes instantly
- **Dark/light mode** - Toggle between themes to test appearance
- **Field editor** - Fill in fields dynamically
- **Card Type selection** - Choose between different card types (Front, Back, Both)
- **Sample data** - Load sample data with one click

### Supported Anki Syntax

The preview supports the following Anki template syntax:

| Syntax | Description |
|--------|-------------|
| `{{Field}}` | Simple field |
| `{{#Field}}...{{/Field}}` | Positive conditional |
| `{{^Field}}...{{/Field}}` | Inverse conditional (empty field) |
| `{{edit:Field}}` | Editable field |
| `{{type:Field}}` | Typing field |
| `{{cloze:Field}}` | Cloze deletion |
| `{{edit:cloze:Field}}` | Combination of edit and cloze |
| `{{hint::Field}}` | Clickable hint |
| `{{clickable:Field}}` | Clickable field |
| `{{Card}}` | Card type name |
| `{{Deck}}` | Deck name |
| `{{Subdeck}}` | Subdeck name |

> **Note:** Fields with spaces in their names (e.g., `{{Further Description}}`) are fully supported.

## Project Structure

```
AnkiNoteTypes/
├── README.md                 # This file
├── media/                    # Shared media files
│   ├── _JetBrains.ttf       # JetBrains Mono font
│   ├── _prism-vsc-dark-plus.min.css
│   └── _theme-vscode.js
├── preview/                  # Local preview environment
│   ├── index.html           # Template listing page
│   ├── viewer.html          # Template viewer
│   ├── js/
│   │   ├── anki-renderer.js # Anki rendering engine
│   │   └── template-loader.js
│   └── README.md            # Preview documentation
└── templates/                # Anki templates
    ├── Basic++/
    ├── Cloze++/
    ├── CodeTypingPractice/
    ├── MultiplaEscolhaQuestao/
    ├── OneLineTypeAnswer/
    └── ...
```

## Available Templates

| Template | Description |
|----------|-------------|
| **Basic++** | Enhanced basic template with inline editing |
| **Cloze++** | Cloze template with support for multiple deletions |
| **CodeTypingPractice** | Practice code typing with syntax highlighting |
| **MultiplaEscolhaQuestao** | Multiple choice questions (exam style) |
| **OneLineTypeAnswer** | Single-line typed answer with terminal-style |

## Usage

Each template folder contains:
- `template.json` - Template configuration file
- `Card_1/` - Card template files (Front.html, Back.html)
- `Style.css` - Styling file
- `README.md` - Detailed documentation for that template

Refer to each template's README.md for specific usage instructions and field descriptions.

## License

This collection is provided as-is for educational and personal use.

## Contributing

Contributions, suggestions, and improvements are welcome! Please feel free to open issues or submit pull requests.
