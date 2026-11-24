# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small REST API with FastAPI to manage tasks, practicing HTTP methods, request and response models, input validation, and error handling. The API stores data in memory, so tasks reset when the server restarts.

## 📝 Tasks

### 🛠️ Create the API and a Health Check

#### Descrição
Set up the FastAPI application and implement a health-check endpoint to confirm that the server is running.

#### Requisitos
The completed program must:

- Install FastAPI and Uvicorn with `python -m pip install fastapi uvicorn`
- Start the development server with `python -m uvicorn starter-code:app --reload`
- Respond to `GET /health` with the JSON object `{"status": "ok"}`
- Make the interactive API documentation available at `/docs`

### 🛠️ Create and List Tasks

#### Descrição
Define a request model for tasks, then implement endpoints to create a task and list all tasks.

#### Requisitos
The completed program must:

- Represent each task with an integer ID, a title, a description, and a completion status
- Accept a title and optional description and completion status when creating a task
- Assign each new task a unique integer ID
- Respond to `POST /tasks` with the created task and HTTP status `201`
- Respond to `GET /tasks` with a JSON list of all tasks, including an empty list when there are none

### 🛠️ Retrieve, Update, and Delete Tasks

#### Descrição
Complete the API with endpoints for retrieving, replacing, and deleting a task by its ID, including a clear response when an ID does not exist.

#### Requisitos
The completed program must:

- Respond to `GET /tasks/{task_id}` with the matching task
- Respond to `PUT /tasks/{task_id}` with the updated task
- Respond to `DELETE /tasks/{task_id}` with a confirmation message
- Return HTTP status `404` and a helpful error message when a requested task ID does not exist
- Verify the endpoints using `/docs` or an HTTP client