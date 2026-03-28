class Task:
    def __init__(self, task_id: int, title: str, completed: bool = False):
        self.id = task_id
        self.title = title
        self.completed = completed


    def mark_completed(self) -> None:
        self.completed = True

    def __str__(self) -> str:
        return f"[{self.id}] {self.title} {"✅" if not self.completed else "❌"}"

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "title": self.title,
            "completed": self.completed
        }

    @classmethod
    def from_dict(cls, data: dict):
        task = cls(data['id'], data['title'], data['completed'])
        return task


class TaskManager:

    tasks = []

    def __init__(self, tasks=None):
        self.tasks = tasks

    def _get_next_id(self) -> int:
        if(len(self.tasks) == 0):
            return 1
        return max(task.id for task in self.tasks) + 1

    def add_task(self, title: str):
        task = Task(task_id=self._get_next_id(), title=title)
        self.tasks.append(task)
        return task

    def list_tasks(self):
        return self.tasks

    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.id == task_id:
                task.mark_completed()
                return True
        return False

    def delete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.id == task_id:
                self.tasks.remove(task)
                return True
        return False