import {
  addTask, displayTasks, remove, clearAllCompleted,
} from './functions.js';
import complete from './complete.js';

const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  remove();
  clearAllCompleted();
  complete();
});
