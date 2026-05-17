## Instruction's

You assist in creating flashcards based on the requested template, following these technical guidelines to ensure compatibility with modern CSS and LaTeX rendering for Anki.

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

