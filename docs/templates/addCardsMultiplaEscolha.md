# Adding cards with MultiplaEscolhaQuestao

Command to add cards using the `MultiplaEscolhaQuestao` template (multiple choice).

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
        "modelName": "4.MultiplaEscolhaQuestao",
        "fields": {
          "EnunciadoQuestao": "What is the capital of France?",
          "Imagem": "",
          "Alternativa-A": "London",
          "Alternativa-B": "Berlin",
          "Alternativa-C": "Paris",
          "Alternativa-D": "Madrid",
          "Alternativa-E": "Rome",
          "Gabarito": "C",
          "Anotacoes": "Paris is the capital and largest city of France"
        },
        "tags": ["Geography::Europe::France"]
      }
    }
  }'
```

## Fields of the `MultiplaEscolhaQuestao` Template

The `MultiplaEscolhaQuestao` template has 9 fields:

| Field                | Type  | Description                           |
| -------------------- | ----- | ------------------------------------- |
| **EnunciadoQuestao** | Text  | Question or statement of the question |
| **Imagem**           | Image | Field to add images (optional)        |
| **Alternativa-A**    | Text  | Option A                              |
| **Alternativa-B**    | Text  | Option B                              |
| **Alternativa-C**    | Text  | Option C                              |
| **Alternativa-D**    | Text  | Option D                              |
| **Alternativa-E**    | Text  | Option E                              |
| **Gabarito**         | Text  | Correct answer (A, B, C, D or E)      |
| **Anotacoes**        | Text  | Notes or additional explanations      |

## Important Points

1. **Gabarito** - Use only one letter (A, B, C, D or E)
2. **Imagem is optional** - Leave empty if you don't want to add an image
3. **All alternatives** - Fill in all 5 alternatives
4. **Anotacoes** - Use to explain the correct answer

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
        "modelName": "4.MultiplaEscolhaQuestao",
        "fields": {
          "EnunciadoQuestao": "Which animal is in the image?",
          "Imagem": "<img src=\"lion.jpg\">",
          "Alternativa-A": "Tiger",
          "Alternativa-B": "Lion",
          "Alternativa-C": "Leopard",
          "Alternativa-D": "Jaguar",
          "Alternativa-E": "Puma",
          "Gabarito": "B",
          "Anotacoes": "The lion is a large feline found in Africa"
        },
        "tags": ["Biology::Animals::Mammals"]
      }
    }
  }'
```

### Example of Scientific Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "4.MultiplaEscolhaQuestao",
        "fields": {
          "EnunciadoQuestao": "What is the chemical formula for water?",
          "Imagem": "",
          "Alternativa-A": "CO2",
          "Alternativa-B": "O2",
          "Alternativa-C": "H2O",
          "Alternativa-D": "NaCl",
          "Alternativa-E": "CH4",
          "Gabarito": "C",
          "Anotacoes": "Water is composed of two hydrogen atoms and one oxygen atom"
        },
        "tags": ["Science::Chemistry::Molecules"]
      }
    }
  }'
```

### Example of Historical Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "4.MultiplaEscolhaQuestao",
        "fields": {
          "EnunciadoQuestao": "In what year did World War II end?",
          "Imagem": "",
          "Alternativa-A": "1943",
          "Alternativa-B": "1944",
          "Alternativa-C": "1945",
          "Alternativa-D": "1946",
          "Alternativa-E": "1947",
          "Gabarito": "C",
          "Anotacoes": "World War II ended in 1945 with the surrender of Japan"
        },
        "tags": ["History::WorldWar2"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the MultiplaEscolhaQuestao template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "4.MultiplaEscolhaQuestao"
    }
  }'
```

**Response:**

```json
{
  "result": [
    "EnunciadoQuestao",
    "Imagem",
    "Alternativa-A",
    "Alternativa-B",
    "Alternativa-C",
    "Alternativa-D",
    "Alternativa-E",
    "Gabarito",
    "Anotacoes"
  ],
  "error": null
}
```
