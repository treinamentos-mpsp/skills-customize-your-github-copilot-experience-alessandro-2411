from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Task API")


class TaskCreate(BaseModel):
    title: str
    description: str = ""
    completed: bool = False


class Task(TaskCreate):
    id: int


tasks: dict[int, Task] = {}


@app.get("/health")
def health_check():
    pass


@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task_data: TaskCreate):
    pass


@app.get("/tasks", response_model=list[Task])
def list_tasks():
    pass


@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    pass


@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task_data: TaskCreate):
    pass


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    pass