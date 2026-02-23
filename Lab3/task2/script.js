const todo__list = document.querySelector('.todo__list')
const btn = document.querySelector('.todo__btn')
const input = document.querySelector('.todo__in')
const filter = document.querySelectorAll('.filter__btn')

let status = 'all'


const getTasks = () => {
  return JSON.parse(localStorage.getItem('todoList')) || [];
}


const render = () => {

  console.log(status)

  let todoList = getTasks()

  todo__list.innerHTML = todoList.map((todo, i) => {
    return createTask(todo)
  }).join("")

}


const createTask = (todo) => {
  console.log(status)
   return `
    <li class="todo__item ${todo.isDone ? "done" : "" } ${status === 'All' ? '' : (status == 'active' && todo.isDone ? 'is-hidden' : (status == 'completed' && !todo.isDone ? 'is-hidden' : ''))}">
        <div onclick="toggleTask(${todo.id})" class="todo__check"></div>
        <div class="todo__title">${todo.value}</div>
        <div class="todo__delete" onclick="removeTask(${todo.id})" ><img src="./img/delete_11042405.png" alt=""></div>
    </li>
  `
}

const addTask = (e) => {
  let tasks = getTasks()
  const todo = { id: tasks.length, value: input.value, isDone: false, isHidden: false }
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

const all = document.getElementById('all')
const active = document.getElementById('active')
const completed = document.getElementById('completed')

filter.forEach((item) => {
  item.addEventListener('click', (e) => {


    if(e.target.id === "all"){

      status = 'all'
      all.classList.add('active')
      completed.classList.remove('active')
      active.classList.remove('active')
    }else if(e.target.id == 'active'){
      status = 'active'
      active.classList.add('active')
      all.classList.remove('active')
      completed.classList.remove('active')
    }else{
      status = 'completed'
      completed.classList.add('active')
      active.classList.remove('active')
      all.classList.remove('active')
    }
    render()
  })
})

render()

btn.addEventListener('click', addTask)
input.addEventListener('keydown', (e) => {
  if(e.key === "Enter") {
    addTask()
  }
})