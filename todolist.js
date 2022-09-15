//função para adicionar tarefa
const addTask = () => {
    const taskTitle = document.querySelector("#task-title").value
    if(taskTitle) {
        
        const taskBox = document.querySelector(".task-box")

        const newTask = taskBox.cloneNode(true)

        newTask.querySelector(".task-title").textContent = taskTitle

        const list = document.querySelector("#task-list")

        list.appendChild(newTask)
        
        const closeButton = newTask.querySelector("#close-button").addEventListener("click", function() {
            removeTask(this)
        })

        const checkButton = newTask.querySelector("#check-button").addEventListener("click", function() {
            completeTask(this)
        })
    }
}

//função para remover tarefa
const removeTask = (task) => {
    task.parentNode.remove(true)
}

//função para completar a tarefa
const completeTask = (task) => {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle("check")
}

//evento que adiciona tarefa
const addButton = document.querySelector("#add-button")

addButton.addEventListener("click", function(e) {
    e.preventDefault()
    addTask()
})


