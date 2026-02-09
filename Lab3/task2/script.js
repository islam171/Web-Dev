const todo__list = document.querySelector('.todo__list')
const btn = document.querySelector('.todo__btn')
const input = document.querySelector('.todo__in')



const getTasks = () => {
  return JSON.parse(localStorage.getItem('todoList')) || [];
}


const render = () => {
  let todoList = getTasks()

  todo__list.innerHTML = todoList.map((todo, i) => {
    return createTask(todo)
  }).join("")

}


const createTask = (todo) => {

   return `
    <li class="todo__item ${todo.isDone ? "done" : "" }">
        <div onclick="toggleTask(${todo.id})" class="todo__check"></div>
        <div class="todo__title">${todo.value}</div>
        <div class="todo__delete" onclick="removeTask(${todo.id})" ><img src="./img/delete_11042405.png" alt=""></div>
    </li>
  `
}

const addTask = (e) => {
  let tasks = getTasks()
  const todo = { id: tasks.length, value: input.value, isDone: false }
  tasks.push(todo)
  localStorage.setItem('todoList', JSON.stringify(tasks))
  render()
}

const toggleTask = (id) => {
  let tasks = getTasks()

  let newTasks = tasks.map((task, i) => {
    if(task.id === id) {
      task.isDone = !task.isDone
    }
    return task
  })
  localStorage.setItem('todoList', JSON.stringify(newTasks))
  render()
}

const removeTask = (id) => {
  let todos = getTasks()
  if(todos){
    let newTodos = todos.filter(todo => todo.id !== id)
    localStorage.setItem('todoList', JSON.stringify(newTodos))
  }
  render()
}

render()

btn.addEventListener('click', addTask)
input.addEventListener('keydown', (e) => {
  if(e.key === "Enter") {
    addTask()
  }
})