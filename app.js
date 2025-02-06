"use strict";

// DOM-Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task-input");
const allTasksContainer = document.getElementById("all-tasks");

// Function for adding a task
function addTask(taskContent) {
    const li = document.createElement("li");
    li.textContent = taskContent;
}

// Button for marking the task as completed
const completeBtn = document.createElement("button");
completeBtn.textContent = "Complete";
completeBtn.addEventListener("click", () => {
    markTaskAsCompleted(li);
})