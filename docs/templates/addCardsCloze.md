# Adding cards with Cloze++

Command to add cards using the `Cloze++` template (fill in the blanks).

**Correct usage example:**

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "2.Cloze++",
        "fields": {
          "Text": "The capital of France is {{c1::Paris}}",
          "Imagen": "",
          "Back Extra": "Paris is located in the north-central part of France",
          "Keywords": "geography, capitals, Europe"
        },
        "tags": ["Geography::Europe::France"]
      }
    }
  }'
```

## Fields of the `Cloze++` Template

The `Cloze++` template has 4 fields:

| Field          | Type  | Description                                                        |
| -------------- | ----- | ------------------------------------------------------------------ |
| **Text**       | Text  | Text with blanks marked as `{{c1::answer}}`, `{{c2::answer}}`, etc |
| **Imagen**     | Image | Field to add images (optional)                                     |
| **Back Extra** | Text  | Additional information displayed on the back                       |
| **Keywords**   | Text  | Keywords or tags for categorization                                |

## Cloze Syntax

Use `{{cN::text}}` to mark blanks, where N is the blank number:

- `{{c1::answer}}` - First blank
- `{{c2::answer}}` - Second blank
- `{{c3::answer}}` - Third blank

Each blank generates a separate card.

## Important Points

1. **Multiple blanks** - A card with multiple blanks generates multiple cards (one for each blank)
2. **Subtags use `::`** - Use `::` to separate hierarchical levels
3. **Imagen field is optional** - Leave empty if you don't want to add an image

## Additional Examples

### Example with Multiple Blanks

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "2.Cloze++",
        "fields": {
          "Text": "The {{c1::Eiffel Tower}} is located in {{c2::Paris}}, {{c3::France}}",
          "Imagen": "",
          "Back Extra": "The Eiffel Tower is an iconic iron lattice tower built in 1889",
          "Keywords": "landmarks, architecture, France"
        },
        "tags": ["Geography::Landmarks"]
      }
    }
  }'
```

### Example with Image

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "2.Cloze++",
        "fields": {
          "Text": "This animal is a {{c1::lion}}",
          "Imagen": "<img src=\"lion.jpg\">",
          "Back Extra": "Lions are large feline predators found in Africa",
          "Keywords": "animals, wildlife"
        },
        "tags": ["Biology::Animals::Mammals"]
      }
    }
  }'
```

### Simple Example

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "2.Cloze++",
        "fields": {
          "Text": "The chemical formula for water is {{c1::H2O}}",
          "Imagen": "",
          "Back Extra": "Water is essential for all known forms of life",
          "Keywords": "chemistry, molecules"
        },
        "tags": ["Science::Chemistry"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the Cloze++ template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "2.Cloze++"
    }
  }'
```

**Response:**

```json
{
  "result": ["Text", "Imagen", "Back Extra", "Keywords"],
  "error": null
}
```
