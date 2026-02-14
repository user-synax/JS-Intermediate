const taskTitle = document.getElementById("task-title")
const taskBody = document.getElementById("task-body")
const addTaskButton = document.getElementById("task-add-btn")
const deleteBtn = document.getElementById("task-delete-btn")

const loadTask = () => {
    let taskBox = document.getElementById("task-box")

    for (let i = 0; i < localStorage.length; i++) {
        let FetchTaskTitle = localStorage.key(i)
        let FetchTaskBody = localStorage.getItem(FetchTaskTitle)

        let task = document.createElement("div")
        task.classList.add("task")
        task.id = "task"
        taskBox.appendChild(task)

        let TaskTitle = document.createElement("h1")
        TaskTitle.textContent = FetchTaskTitle
        task.appendChild(TaskTitle)

        let TaskBody = document.createElement("h3")
        TaskBody.textContent = FetchTaskBody
        task.appendChild(TaskBody)
    }
}

let randomID = Math.floor(Math.random() * 1000)

let userTask = {
    taskTitle: taskTitle,
    taskBody: taskBody
}

let JSONUser = JSON.stringify(userTask)

const doSomething = () => {
    localStorage.setItem(randomID, JSONUser)
}

const addTask = () => {
    if (taskTitle.value.trim() == "" || taskBody.value.trim() == "") {
        alert("Please Enter Task Tittle And Actual Task Firsts")
    } else {
        localStorage.setItem(taskTitle.value.trim(), taskBody.value.trim())
        alert("Task Added")
        location.reload()
    }
}

const deleteTask = () => {
    let taskTitle = []
    for (let i = 0; i < localStorage.length; i++) {
        let taskId = localStorage.key(i)
        taskTitle.push(taskId.toLowerCase())
    }
    console.log(taskTitle);
    let verify = prompt("Enter Exect Task Title you want to Delete: ")
    if (taskTitle.includes(verify.toLowerCase().trim())) {
        alert("Deleted")
        localStorage.removeItem(verify)
        location.reload()
    } else {
        alert("Task not Found")
    }
}

deleteBtn.addEventListener("click", deleteTask)
addTaskButton.addEventListener("click", addTask)
window.addEventListener("load", loadTask)
