# Adding cards with ImageOcclusion++

Command to add cards using the `ImageOcclusion++` template (image occlusion).

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
        "modelName": "3.ImageOcclusion++",
        "fields": {
          "Occlusion": "<img src=\"anatomy.jpg\"><br>[[[1]]]",
          "Image": "<img src=\"anatomy.jpg\">",
          "Header": "Human Anatomy",
          "Back Extra": "The heart is the organ responsible for pumping blood",
          "Comments": "Study the location of the heart in the body"
        },
        "tags": ["Biology::Anatomy::Heart"]
      }
    }
  }'
```

## Fields of the `ImageOcclusion++` Template

The `ImageOcclusion++` template has 5 fields:

| Field          | Type  | Description                                     |
| -------------- | ----- | ----------------------------------------------- |
| **Occlusion**  | Image | Image with occluded areas marked with `[[[N]]]` |
| **Image**      | Image | Original image without occlusions               |
| **Header**     | Text  | Title or header of the card                     |
| **Back Extra** | Text  | Additional information displayed on the back    |
| **Comments**   | Text  | Comments or additional notes                    |

## Occlusion Syntax

Use `[[[N]]]` to mark occluded areas in the image, where N is the occlusion number:

- `[[[1]]]` - First occluded area
- `[[[2]]]` - Second occluded area
- `[[[3]]]` - Third occluded area

## Important Points

1. **Multiple occlusions** - A card with multiple occlusions generates multiple cards
2. **Original image** - The `Image` field should contain the image without occlusions
3. **Occlusion** - Should contain the image with areas marked for occlusion
4. **Header is optional** - Leave empty if you don't want to add a title

## Additional Examples

### Example with Multiple Occlusions

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "3.ImageOcclusion++",
        "fields": {
          "Occlusion": "<img src=\"map.jpg\"><br>[[[1]]] [[[2]]] [[[3]]]",
          "Image": "<img src=\"map.jpg\">",
          "Header": "Capitals of South America",
          "Back Extra": "Identify the capitals of South American countries",
          "Comments": "Use the map to locate the cities"
        },
        "tags": ["Geography::SouthAmerica::Capitals"]
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
        "modelName": "3.ImageOcclusion++",
        "fields": {
          "Occlusion": "<img src=\"skeleton.jpg\"><br>[[[1]]]",
          "Image": "<img src=\"skeleton.jpg\">",
          "Header": "Bones of the Human Body",
          "Back Extra": "The femur is the longest bone in the human body",
          "Comments": ""
        },
        "tags": ["Biology::Anatomy::Skeleton"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the ImageOcclusion++ template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "3.ImageOcclusion++"
    }
  }'
```

**Response:**

```json
{
  "result": ["Occlusion", "Image", "Header", "Back Extra", "Comments"],
  "error": null
}
```
