"use strict";

// DOM-Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task-input');
const allTasksContainer = document.getElementById('all-tasks');
const openTasksContainer = document.getElementById('open-tasks');
const completedTasksContainer = document.getElementById('completed-tasks');
const addTaskBtn = document.getElementById("add-btn");
// const taskContent = taskInput.value.trim();


// Event Listener for the form
addTaskBtn.addEventListener("click", () => {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        addTask(taskContent);
        taskInput.value = ''; // Reset input field
    }
});
// Function to add a new task
function addTask(taskContent) {
    const li = document.createElement('li');
    li.textContent = taskContent;

    // Button to switch between "Complete" and "Reopen"
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Complete';
    toggleBtn.addEventListener('click', () => {
        toggleTaskStatus(li, toggleBtn);
    });

    // Button for deletion
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(li);
    });

    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    openTasksContainer.appendChild(li);
}

// Function to switch between "Complete" and "Reopen"
function toggleTaskStatus(taskElement, button) {
    if (button.textContent === 'Complete') {
        completedTasksContainer.appendChild(taskElement);
        button.textContent = 'Reopen';
    } else {
        openTasksContainer.appendChild(taskElement);
        button.textContent = 'Complete';
    }
}

// Function to delete a task
function deleteTask(taskElement) {
    taskElement.remove();
}
