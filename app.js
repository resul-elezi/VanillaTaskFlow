"use strict";

// DOM-Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task-input");
const allTasksContainer = document.getElementById("all-tasks");
const addTaskBtn = document.getElementById("add-btn");



// Function for adding a task
function addTask(taskContent) {
    const li = document.createElement("li");
    li.textContent = taskContent;


    // Button for marking the task as completed
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => {
        markTaskAsCompleted(li);
    });
    
    // Button to delete a task
    const deleteBtn = document.getElementById("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        deleteTask(li);
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    allTasksContainer.appendChild(li);
}

// Function to reopen a completed task
function reopenTask(taskElement) {
    const openTaskContainer = document.getElementById("open-tasks");
    openTaskContainer.appendChild(taskElement);

    // Change text of the button to "Reopen"
    const completeBtn = taskElement.querySelector("button");
    completeBtn.textContent = "Reopen";
    completeBtn.removeEventListener("click", () => {
        markTaskAsCompleted(taskElement);
    });
    completeBtn.addEventListener("click", () => {
        markTaskAsOpen(taskElement);
    });
}

// Function to mark a task as "open" again
function markTaskAsOpen(taskElement) {
    const openTaskContainer = document.getElementById("open-tasks");
    openTaskContainer.appendChild(taskElement);
    const completeBtn = taskElement.querySelector("button");
    completeBtn.textContent = "Complete";
    completeBtn.removeEventListener("click", () => {
        markTaskAsOpen(taskElement);
    });
    completeBtn.addEventListener("click", () => {
        markTaskAsCompleted(taskElement);
    });
}

// Function to mark a task as done

taskElement.querySelector("button").textContent = "Complete";
taskElement.querySelector("button").addEventListener("click", () => {
    markTaskAsCompleted(taskElement);
// Fuction to delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}

// Event Listener for the form
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskContent = taskInput.value.trim();
    if(taskContent) {
        addTask(taskContent);
        taskInput.value = ""; // Reset input field
    }
})