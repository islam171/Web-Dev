const todo__list = document.querySelector('.todo__list')
const btn = document.querySelector('.todo__btn')
const input = document.querySelector('.todo__in')

class Todo{
  #value = ""
  #isDone = false
  #id = 0

  constructor(value, id , isDone = false) {
    this.#id = id
    this.#value = value
    this.#isDone = isDone;
  }

  setValue(name){
    this.#value = name
  }

  toggle(){
    this.#isDone = !this.#isDone
  }

  getId(){
    return this.#id
  }

  getValue(){
    return this.#value
  }

  getIsDone(){
    return this.#isDone
  }

  getInfo(){
    return {
      id: this.#id,
      isDone: this.#isDone,
      value: this.#value
    }
  }

  static formJSON(obj){
    return new Todo(obj.value, obj.id, obj.isDone, obj.id);
  }

}


const getTasks = () => {
  const raw = JSON.parse(localStorage.getItem('todoList')) || []
  return raw.map(item => Todo.formJSON(item))
}


const render = () => {
  let todoList = getTasks()

  todo__list.innerHTML = todoList.map((todo, i) => {
    return createTask(todo)
  }).join("")

}


const createTask = (todo) => {

   return `
    <li class="todo__item ${todo.getIsDone() ? "done" : "" }">
        <div onclick="toggleTask(${todo.getId()})" class="todo__check"></div>
        <div class="todo__title">${todo.getValue()}</div>
        <div class="todo__delete" onclick="removeTask(${todo.getId()})" ><img src="./img/delete_11042405.png" alt=""></div>
    </li>
  `
}

const addTask = (e) => {
  let tasks = getTasks()
  const todo = new Todo(input.value)
  tasks.push(todo)
  localStorage.setItem('todoList', JSON.stringify(tasks.map(item => item.getInfo())))
  render()
}

const toggleTask = (id) => {
  let tasks = getTasks()

  let newTasks = tasks.map((task, i) => {
    if(task.getId() === id) {
      task.toggle();
    }
    return task
  })
  localStorage.setItem('todoList', JSON.stringify(newTasks.map(item => item.getInfo())))
  render()
}

const removeTask = (id) => {
  let todos = getTasks()
  if(todos){
    // console.log(todos)
    let newTodos = todos.filter(todo => todo.getId() !== id)
    // console.log(newTodos)
    localStorage.setItem('todoList', JSON.stringify(newTodos.map(item => item.getInfo())))
  }
  render()
}

render()

btn.addEventListener('click', addTask)
