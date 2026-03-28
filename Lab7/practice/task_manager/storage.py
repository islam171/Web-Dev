import json

from Lab7.practice.task_manager.models import Task


def load_tasks(filename: str) -> list:
    with open(filename, 'r') as file:
        data = json.load(file)
        if(len(data) == 0):
            return []
        return [Task.from_dict(item) for item in data]
    return []

def save_tasks(filename: str, tasks: list) -> None:
    with open(filename, 'w') as file:
        json.dump([task.to_dict() for task in tasks], file, indent=4)