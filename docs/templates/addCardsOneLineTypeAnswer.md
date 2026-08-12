# Adding cards with OneLineTypeAnswer

Command to add cards using the `OneLineTypeAnswer` template (typed answer on one line).

**Correct usage example:**

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What does the 'grep' command do?",
          "TypeHint": "search for patterns",
          "Answer": "grep searches for lines matching a pattern in files",
          "Keywords": "search, pattern, text"
        },
        "tags": ["AllMyITKnowledge::GNU/Linux::GREP"]
      }
    }
  }'
```

## Fields of the `OneLineTypeAnswer` Template

The `OneLineTypeAnswer` template has 4 fields:

| Field        | Type | Description                            |
| ------------ | ---- | -------------------------------------- |
| **Question** | Text | Question or prompt                     |
| **TypeHint** | Text | Hint about the type of answer expected |
| **Answer**   | Text | Expected answer (typed by the user)    |
| **Keywords** | Text | Keywords or tags for categorization    |

## Important Points

1. **Subtags use `::`** - Use `::` to separate hierarchical levels
2. **Array of tags** - The `tags` field is an array, so you can add multiple tags
3. **TypeHint** - Provide a hint about the type of answer expected
4. **Answer** - Should be a concise answer on one line

## Additional Examples

### Example with Multiple Tags

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What is Docker?",
          "TypeHint": "containerization platform",
          "Answer": "Docker is a containerization platform that packages applications and dependencies",
          "Keywords": "containers, virtualization, deployment"
        },
        "tags": [
          "AllMyITKnowledge::Docker",
          "College::IBD",
          "leech"
        ]
      }
    }
  }'
```

### Example of Technical Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What is the default port for SSH?",
          "TypeHint": "port number",
          "Answer": "22",
          "Keywords": "SSH, networking, ports"
        },
        "tags": ["AllMyITKnowledge::Networking::SSH"]
      }
    }
  }'
```

### Example of Concept Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What is the capital of Brazil?",
          "TypeHint": "city name",
          "Answer": "Brasilia",
          "Keywords": "geography, capitals, Brazil"
        },
        "tags": ["Geography::SouthAmerica::Brazil"]
      }
    }
  }'
```

### Example of Formula Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What is the formula for calculating velocity?",
          "TypeHint": "distance/time",
          "Answer": "velocity = distance / time",
          "Keywords": "physics, velocity, kinematics"
        },
        "tags": ["Science::Physics::Kinematics"]
      }
    }
  }'
```

### Example of Definition Question

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "5.AllKnolegdeDatabase",
        "modelName": "7.OneLineTypeAnswer",
        "fields": {
          "Question": "What is photosynthesis?",
          "TypeHint": "biological process",
          "Answer": "Process by which plants convert light energy into chemical energy",
          "Keywords": "biology, plants, energy"
        },
        "tags": ["Science::Biology::Botany"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the OneLineTypeAnswer template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "7.OneLineTypeAnswer"
    }
  }'
```

**Response:**

```json
{
  "result": ["Question", "TypeHint", "Answer", "Keywords"],
  "error": null
}
```
