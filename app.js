"use strict";

// DOM-Elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task-input");
const allTasksContainer = document.getElementById("all-tasks");

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

// Function to mark a task as done
function reopenTask(taskElement) {
    const openTaskContainer = document.getElementById("open-tasks");
    openTaskContainer.appendChild(taskElement);
    taskElement.querySelector("button").textContent = "Complete";
    taskElement.querySelector("button").addEventListener("click", () => {
        markTaskAsCompleted(taskElement);
    });
}

// Fuction to delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}