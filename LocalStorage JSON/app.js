

let randomNumber = Math.floor(Math.random() * 100)

const FillDetails = () => {
    let taskTitle = prompt("Enter Task Title: ")
    let taskBody = prompt("Enter Actual Task")
    let taskDetails = {
        taskTitle: taskTitle,
        taskBody: taskBody
    }
    localStorage.setItem(randomNumber, JSON.stringify(taskDetails))
    location.reload()
}

const GetDetails = () => {
    const taskBox = document.getElementById("task-box")
    let verify = Number(prompt("Enter Task ID: "))
    let data = localStorage.getItem(verify)
    let taskDetail = JSON.parse(data)
    let task = document.createElement("div")
    let Title = document.createElement("h3")
    Title.textContent = taskDetail.taskTitle
    task.appendChild(Title)
    let Body = document.createElement("p")
    Body.textContent = taskDetail.taskBody
    task.appendChild(Body)
    taskBox.append(task)
}

window.addEventListener("load", () => {
    const taskBox = document.getElementById("task-box")
    let dataArray = []
    for (let data = 0; data < localStorage.length; data++) {
        let key = localStorage.key(data)
        let value = localStorage.getItem(key)
        let obj = {
            key: key,
            val: value
        }
        dataArray.push(obj)
    }

    dataArray.map((k, v) => {
        document.write(k, "<hr>")
        document.write(v)
    })
})