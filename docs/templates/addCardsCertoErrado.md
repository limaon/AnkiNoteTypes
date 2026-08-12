# Adding cards with CertoErradoQuestao

Command to add cards using the `CertoErradoQuestao` template (true/false).

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
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "Paris is the capital of France",
          "Imagem": "",
          "Gabarito": "Certo",
          "Anotacoes": "Paris is indeed the capital and largest city of France"
        },
        "tags": ["Geography::Europe::France"]
      }
    }
  }'
```

## Fields of the `CertoErradoQuestao` Template

The `CertoErradoQuestao` template has 4 fields:

| Field                | Type  | Description                                |
| -------------------- | ----- | ------------------------------------------ |
| **EnunciadoQuestao** | Text  | Statement to be evaluated as true or false |
| **Imagem**           | Image | Field to add images (optional)             |
| **Gabarito**         | Text  | Correct answer (Certo or Errado)           |
| **Anotacoes**        | Text  | Notes or additional explanations           |

## Important Points

1. **Gabarito** - Use only "Certo" or "Errado"
2. **Imagem is optional** - Leave empty if you don't want to add an image
3. **Anotacoes** - Use to explain why the statement is true or false
4. **Simplicity** - This template is ideal for questions that require only a binary answer

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
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "This animal is a lion",
          "Imagem": "<img src=\"lion.jpg\">",
          "Gabarito": "Certo",
          "Anotacoes": "The lion is a large feline found in Africa"
        },
        "tags": ["Biology::Animals::Mammals"]
      }
    }
  }'
```

### Example of Scientific Question - True

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "Water boils at 100 degrees Celsius at sea level",
          "Imagem": "",
          "Gabarito": "Certo",
          "Anotacoes": "Water boils at 100 degrees C (212 degrees F) at sea level under normal atmospheric pressure conditions"
        },
        "tags": ["Science::Physics::Temperature"]
      }
    }
  }'
```

### Example of Historical Question - False

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "Christopher Columbus discovered America in 1492",
          "Imagem": "",
          "Gabarito": "Errado",
          "Anotacoes": "Columbus arrived in the Americas in 1492, but he was not the first European to arrive there. Indigenous peoples had inhabited the continent for thousands of years"
        },
        "tags": ["History::Exploration"]
      }
    }
  }'
```

### Example of Mathematical Question - True

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "The square root of 144 is 12",
          "Imagem": "",
          "Gabarito": "Certo",
          "Anotacoes": "12 x 12 = 144, therefore sqrt(144) = 12"
        },
        "tags": ["Math::Algebra::SquareRoots"]
      }
    }
  }'
```

### Example of Biological Question - False

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "5.CertoErradoQuestao",
        "fields": {
          "EnunciadoQuestao": "Fish breathe through lungs",
          "Imagem": "",
          "Gabarito": "Errado",
          "Anotacoes": "Fish breathe through gills, not lungs. Gills extract oxygen from water"
        },
        "tags": ["Biology::Aquatic::Fish"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the CertoErradoQuestao template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "5.CertoErradoQuestao"
    }
  }'
```

**Response:**

```json
{
  "result": ["EnunciadoQuestao", "Imagem", "Gabarito", "Anotacoes"],
  "error": null
}
```
