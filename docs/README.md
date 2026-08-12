# Documentation - AnkiNoteTypes

Complete documentation of the AnkiNoteTypes project with usage guides, examples and API references.

## Index

### Templates

- **[Templates Documentation](./templates/README.md)** - Complete guide to all 7 available templates
  - 1. Basic++ - Question/Answer
  - 2. Cloze++ - Fill in the Blanks
  - 3. ImageOcclusion++ - Image Occlusion
  - 4. MultiplaEscolhaQuestao - Multiple Choice
  - 5. CertoErradoQuestao - True/False
  - 6. CodeTypingPractice - Code Typing
  - 7. OneLineTypeAnswer - Typed Answer

## Folder Structure

```
AnkiNoteTypes/
+-- docs/
|   +-- README.md (this file)
|   +-- templates/
|       +-- README.md
|       +-- addCardsBasicPlusPlus.md
|       +-- addCardsCloze.md
|       +-- addCardsImageOcclusion.md
|       +-- addCardsMultiplaEscolha.md
|       +-- addCardsCertoErrado.md
|       +-- addCardsCodeTyping.md
|       +-- addCardsOneLineTypeAnswer.md
+-- templates/
+-- media/
+-- preview/
```

## AnkiConnect API

### Endpoint

```
POST http://localhost:8765
```

### Main Actions

- `modelNames` - List all available templates
- `modelFieldNames` - List the fields of a template
- `addNote` - Add a new card
- `deckNames` - List all decks
- `createDeck` - Create a new deck
- `findCards` - Search cards by query
- `cardsInfo` - Get card information
- `updateNoteFields` - Modify card fields
- `deleteNotes` - Delete cards
- `sync` - Sync with AnkiWeb
- `multi` - Execute multiple actions

### Basic Request Structure

```json
{
  "action": "actionName",
  "version": 6,
  "params": {
    /* specific parameters */
  }
}
```

## Adding Cards with Script

A template script is provided to help you add multiple cards at once:

- **[add-cards-template.sh](./add-cards-template.sh)** - Bash script template for adding cards

This script uses the `multi` action to add multiple cards in a single request. You can modify it to add your own cards by editing the fields and tags.

### You need

- Anki must be running with AnkiConnect plugin installed
- curl must be installed
- jq must be installed (for JSON processing)

### Usage

```bash
chmod +x add-cards-template.sh
./add-cards-template.sh
```

## Quick Examples

### List Available Templates

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{"action": "modelNames", "version": 6}'
```

### List Template Fields

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {"modelName": "1.Basic++"}
  }'
```

### Add a Card

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "1.Basic++",
        "fields": {
          "Front": "Question?",
          "Imagen": "",
          "Back": "Answer",
          "Keywords": "tag"
        },
        "tags": ["Category"]
      }
    }
  }'
```

## Important Tips

### Hierarchical Tags

Use `::` to create hierarchies:

```json
"tags": ["Category::Subcategory::Topic"]
```

### Multiple Tags

```json
"tags": ["Tag1", "Category::SubTag", "Other"]
```

### Optional Fields

Leave empty if not using:

```json
"Imagen": ""
```

### Special Syntax

**Cloze (Template 2):**

```
{{c1::answer1}} {{c2::answer2}}
```

**Image Occlusion (Template 3):**

```
<img src="image.jpg"><br>[[[1]]] [[[2]]]
```

