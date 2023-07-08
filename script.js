// Get DOM elements
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskActions);

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
    }
}

// Function to create a task item
function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    return taskItem;
}

// Function to handle task actions (delete and mark as complete)
function handleTaskActions(event) {
    const target = event.target;
    if (target.matches(".delete-btn")) {
        const taskItem = target.closest(".task-item");
        taskList.removeChild(taskItem);
    } else if (target.matches("input[type='checkbox']")) {
        const taskText = target.nextElementSibling;
        taskText.classList.toggle("completed");
    }
}
