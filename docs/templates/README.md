# Anki Templates - Documentation

Complete documentation of all available templates in Anki with usage examples via AnkiConnect API.

## Available Templates

### 1. Basic++ (Question/Answer)

- **File:** [addCardsBasicPlusPlus.md](./addCardsBasicPlusPlus.md)
- **Fields:** Front, Imagen, Back, Keywords
- **Usage:** Simple question and answer cards
- **Example:** "What is the capital of France?" -> "Paris"

### 2. Cloze++ (Fill in the Blanks)

- **File:** [addCardsCloze.md](./addCardsCloze.md)
- **Fields:** Text, Imagen, Back Extra, Keywords
- **Usage:** Fill in blanks in texts with `{{c1::answer}}`
- **Example:** "The capital of France is {{c1::Paris}}"

### 3. ImageOcclusion++ (Image Occlusion)

- **File:** [addCardsImageOcclusion.md](./addCardsImageOcclusion.md)
- **Fields:** Occlusion, Image, Header, Back Extra, Comments
- **Usage:** Hide parts of images with `[[[N]]]`
- **Example:** Anatomy, maps, diagrams

### 4. MultiplaEscolhaQuestao (Multiple Choice)

- **File:** [addCardsMultiplaEscolha.md](./addCardsMultiplaEscolha.md)
- **Fields:** EnunciadoQuestao, Imagem, Alternativa-A to E, Gabarito, Anotacoes
- **Usage:** Questions with 5 alternatives (A, B, C, D, E)
- **Example:** Exams, tests, assessments

### 5. CertoErradoQuestao (True/False)

- **File:** [addCardsCertoErrado.md](./addCardsCertoErrado.md)
- **Fields:** EnunciadoQuestao, Imagem, Gabarito, Anotacoes
- **Usage:** True or false statements
- **Example:** "Paris is the capital of France" -> True

### 6. CodeTypingPractice (Code Typing)

- **File:** [addCardsCodeTyping.md](./addCardsCodeTyping.md)
- **Fields:** Description, Hint, Code, Language, Further Description, Source
- **Usage:** Practice typing code in various languages
- **Example:** Write functions, loops, classes

### 7. OneLineTypeAnswer (Typed Answer)

- **File:** [addCardsOneLineTypeAnswer.md](./addCardsOneLineTypeAnswer.md)
- **Fields:** Question, TypeHint, Answer, Keywords
- **Usage:** Answers typed on one line
- **Example:** "What is the capital of Brazil?" -> "Brasilia"

## Request Structure

All requests must be JSON with the following structure:

```json
{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "Deck Name",
      "modelName": "Template Name",
      "fields": {
        "Field1": "value1",
        "Field2": "value2"
      },
      "tags": ["tag1", "tag2"]
    }
  }
}
```

## API Endpoint

```
POST http://localhost:8765
```

## Querying Available Templates

To list all available templates:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelNames",
    "version": 6
  }'
```

## Querying Template Fields

To query the fields of a specific template:

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

## General Tips

### Hierarchical Tags

Use `::` to separate hierarchical levels:

```json
"tags": ["Category::Subcategory::Topic"]
```

### Multiple Tags

The `tags` field is an array, allowing multiple tags:

```json
"tags": ["Tag1", "Category::SubTag", "Other"]
```

### Optional Fields

Some fields are optional (like Imagen). Leave them empty if not using:

```json
"Imagen": ""
```

### Special Syntax

#### Cloze (Template 2)

```
{{c1::answer1}} {{c2::answer2}} {{c3::answer3}}
```

#### Image Occlusion (Template 3)

```
<img src="image.jpg"><br>[[[1]]] [[[2]]] [[[3]]]
```

## Quick Examples

### Add Basic++ card

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
          "Keywords": "tag1, tag2"
        },
        "tags": ["Category"]
      }
    }
  }'
```

### Add Cloze++ card

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
          "Text": "The answer is {{c1::value}}",
          "Imagen": "",
          "Back Extra": "Additional explanation",
          "Keywords": "tag1"
        },
        "tags": ["Category"]
      }
    }
  }'
```

### Add MultiplaEscolha card

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
          "EnunciadoQuestao": "Question?",
          "Imagem": "",
          "Alternativa-A": "Option A",
          "Alternativa-B": "Option B",
          "Alternativa-C": "Option C",
          "Alternativa-D": "Option D",
          "Alternativa-E": "Option E",
          "Gabarito": "C",
          "Anotacoes": "Explanation"
        },
        "tags": ["Category"]
      }
    }
  }'
```

## Additional Resources

- Each template file contains detailed examples
- Consult the specific documentation of each template for more information
- Use the examples as a basis for creating your own cards

## Folder Structure

```
docs/
+-- templates/
    +-- README.md (this file)
    +-- addCardsBasicPlusPlus.md
    +-- addCardsCloze.md
    +-- addCardsImageOcclusion.md
    +-- addCardsMultiplaEscolha.md
    +-- addCardsCertoErrado.md
    +-- addCardsCodeTyping.md
    +-- addCardsOneLineTypeAnswer.md
```
