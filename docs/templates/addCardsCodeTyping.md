# Adding cards with CodeTypingPractice

Command to add cards using the `CodeTypingPractice` template (code typing practice).

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
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Print Hello World in Python",
          "Hint": "Use the print() function",
          "Code": "print(\"Hello, World!\")",
          "Language": "python",
          "Further Description": "This is the most basic program in any programming language",
          "Source": "Python Basics"
        },
        "tags": ["Programming::Python::Basics"]
      }
    }
  }'
```

## Fields of the `CodeTypingPractice` Template

The `CodeTypingPractice` template has 6 fields:

| Field                   | Type | Description                                          |
| ----------------------- | ---- | ---------------------------------------------------- |
| **Description**         | Text | Description of what the code should do               |
| **Hint**                | Text | Hint to help with the solution                       |
| **Code**                | Text | Correct code (answer)                                |
| **Language**            | Text | Programming language (python, javascript, java, etc) |
| **Further Description** | Text | Additional explanation or context                    |
| **Source**              | Text | Source or reference of the code                      |

## Important Points

1. **Language** - Specify the language for syntax highlighting
2. **Hint** - Provide a useful hint but not the complete answer
3. **Code** - Should contain the correct and complete code
4. **Further Description** - Use to explain important concepts

## Additional Examples

### Example in JavaScript

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Create a function that returns the sum of two numbers",
          "Hint": "Use function keyword and return statement",
          "Code": "function sum(a, b) {\n  return a + b;\n}",
          "Language": "javascript",
          "Further Description": "Functions are reusable blocks of code that perform specific tasks",
          "Source": "JavaScript Fundamentals"
        },
        "tags": ["Programming::JavaScript::Functions"]
      }
    }
  }'
```

### Example in Java

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Create a class that represents a Person with name and age",
          "Hint": "Use class keyword and constructor",
          "Code": "public class Person {\n  private String name;\n  private int age;\n  \n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}",
          "Language": "java",
          "Further Description": "Classes are blueprints for creating objects in object-oriented programming",
          "Source": "Java OOP Basics"
        },
        "tags": ["Programming::Java::OOP"]
      }
    }
  }'
```

### Example in SQL

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Write a query to select all users from the users table",
          "Hint": "Use SELECT and FROM keywords",
          "Code": "SELECT * FROM users;",
          "Language": "sql",
          "Further Description": "The SELECT statement is used to retrieve data from a database",
          "Source": "SQL Basics"
        },
        "tags": ["Programming::SQL::Queries"]
      }
    }
  }'
```

### Example in Python with Loops

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Write a loop that prints numbers from 1 to 5",
          "Hint": "Use a for loop with range()",
          "Code": "for i in range(1, 6):\n    print(i)",
          "Language": "python",
          "Further Description": "Loops allow you to execute a block of code multiple times",
          "Source": "Python Control Flow"
        },
        "tags": ["Programming::Python::Loops"]
      }
    }
  }'
```

### Example in C++

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "addNote",
    "version": 6,
    "params": {
      "note": {
        "deckName": "My Deck",
        "modelName": "6.CodeTypingPractice",
        "fields": {
          "Description": "Create a simple C++ program that prints Hello World",
          "Hint": "Use #include <iostream> and std::cout",
          "Code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\" << endl;\n    return 0;\n}",
          "Language": "cpp",
          "Further Description": "This is the entry point for any C++ program",
          "Source": "C++ Basics"
        },
        "tags": ["Programming::CPP::Basics"]
      }
    }
  }'
```

## Querying Fields via API

To query the fields of the CodeTypingPractice template:

```bash
curl -X POST http://localhost:8765 \
  -H "Content-Type: application/json" \
  -d '{
    "action": "modelFieldNames",
    "version": 6,
    "params": {
      "modelName": "6.CodeTypingPractice"
    }
  }'
```

**Response:**

```json
{
  "result": [
    "Description",
    "Hint",
    "Code",
    "Language",
    "Further Description",
    "Source"
  ],
  "error": null
}
```
