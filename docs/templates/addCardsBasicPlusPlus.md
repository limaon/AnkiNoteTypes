# Adding cards with Basic++

Command to add cards using the `Basic++` template.

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
        "modelName": "1.Basic++",
        "fields": {
          "Front": "What is the capital of France?",
          "Imagen": "",
          "Back": "Paris",
          "Keywords": "geography, capitals, Europe"
        },
        "tags": ["Geography::Europe::France"]
      }
    }
  }'
```

## Fields of the `Basic++` Template

The `Basic++` template has 4 fields:

| Field        | Type  | Description                                           |
| ------------ | ----- | ----------------------------------------------------- |
| **Front**    | Text  | Question or prompt displayed on the front of the card |
| **Imagen**   | Image | Field to add images (optional)                        |
| **Back**     | Text  | Answer displayed on the back of the card              |
| **Keywords** | Text  | Keywords or tags for categorization                   |

## Important Points

1. **Subtags use `::`** - Use `::` to separate hierarchical levels
2. **Array of tags** - The `tags` field is an array, so you can add multiple tags
3. **Imagen field is optional** - Leave empty if you don't want to add an image

## Additional Examples

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
        "modelName": "1.Basic++",
        "fields": {
          "Front": "What is this animal?",
          "Imagen": "<img src=\"lion.jpg\">",
          "Back": "A lion is a large feline predator",
          "Keywords": "animals, wildlife, Africa"
        },
        "tags": ["Biology::Animals::Mammals"]
      }
    }
  }'
```

### Example with Multiple Tags

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
          "Front": "Define photosynthesis",
          "Imagen": "",
          "Back": "Process by which plants convert light into chemical energy",
          "Keywords": "biology, plants, energy"
        },
        "tags": [
          "Biology::Botany",
          "Science::Chemistry",
          "College::Biology101"
        ]
      }
    }
  }'
```

### Simple Example (without image and keywords)

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
          "Front": "2 + 2 = ?",
          "Imagen": "",
          "Back": "4",
          "Keywords": "math, arithmetic"
        },
        "tags": ["Math::Basic"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of any template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "1.Basic++"
    }
  }'
```

**Response:**

```json
{
  "result": ["Front", "Imagen", "Back", "Keywords"],
  "error": null
}
```
