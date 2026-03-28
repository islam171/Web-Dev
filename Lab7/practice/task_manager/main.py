from Lab7.practice.task_manager.models import TaskManager
from Lab7.practice.task_manager.storage import load_tasks, save_tasks

data = load_tasks("data.json")
manager = TaskManager(data)


while True:
    print("""=== Task Manager ===
1. Show tasks
2. Add task
3. Complete task
4. Delete task
5. Exit
Choose an option: """, end='')
    command = 0
    try:
        command = int(input())
    except ValueError:
        print("Error: please enter a number")
        continue

    if command == 1:
        task_list = manager.list_tasks()
        if len(task_list) == 0:
            print("No tasks found!")
        else:
            print("Your tasks: ")
            for task in task_list:
                print(task)

    elif command == 2:
        print("Enter task title: ", end='')
        title = input()
        task = manager.add_task(title)
        print("Task added: ", task)

        task_list = manager.list_tasks()
        save_tasks("data.json", task_list)

    elif command == 3:
        print("Enter task ID to complete: ", end='')
        try:
            task_id = int(input())
        except ValueError:
            print("Error: please enter a number")

        if(manager.complete_task(task_id)):
            task_list = manager.list_tasks()
            save_tasks("data.json", task_list)
            print("Task completed!")
        else:
            print("Error: please enter a valid task ID")

    elif command == 4:
        print("Enter task ID to delete: ", end='')
        try:
            task_id = int(input())
        except ValueError:
            print("Error: please enter a number")

        if (manager.delete_task(task_id)):
            task_list = manager.list_tasks()
            save_tasks("data.json", task_list)
            print("Task deleted!")
        else:
            print("Error: please enter a valid task ID")

    elif command == 5:
        print("Goodbye!")
        break
    else:
        print("Error: please enter a valid command")

    print()