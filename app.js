"use strict";

// DOM-Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task-input');
const allTasksContainer = document.getElementById('all-tasks');
const openTasksContainer = document.getElementById('open-tasks');
const completedTasksContainer = document.getElementById('completed-tasks');
const addTaskBtn = document.getElementById("add-btn");

// Function to add a new task
function addTask(taskContent) {
    const li = document.createElement('li');
    li.textContent = taskContent;

    // Button zum Umschalten zwischen "Complete" und "Reopen"
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Complete';
    toggleBtn.addEventListener('click', () => {
        toggleTaskStatus(li, toggleBtn);
    });

    // Button zum Löschen
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(li);
    });

    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    openTasksContainer.appendChild(li);
}

// Funktion zum Umschalten zwischen "Complete" und "Reopen"
function toggleTaskStatus(taskElement, button) {
    if (button.textContent === 'Complete') {
        completedTasksContainer.appendChild(taskElement);
        button.textContent = 'Reopen';
    } else {
        openTasksContainer.appendChild(taskElement);
        button.textContent = 'Complete';
    }
}

// Funktion zum Löschen einer Aufgabe
function deleteTask(taskElement) {
    taskElement.remove();
}

// Event-Listener für das Formular
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        addTask(taskContent);
        taskInput.value = ''; // Eingabefeld zurücksetzen
    }
});