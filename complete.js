import { tasks, addToLocalStorage } from './functions.js';

const tasksDiv = document.querySelector('.to-do-list');

export default () => {
  tasksDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('make-complete')) {
      if (e.target.innerHTML === '<i class="fa-regular fa-square complete"></i>') {
        e.target.innerHTML = '<i class="fa-sharp fa-solid fa-check t-com"></i>';
        e.target.childNodes[0].style.color = '#87ceeb';
        e.target.parentElement.childNodes[1].style['text-decoration'] = 'line-through';
        e.target.parentElement.childNodes[1].style['font-size'] = '20px';
        e.target.parentElement.childNodes[1].style.color = '#d3d3d3';
        for (let i = 0; i < tasks.length; i += 1) {
          if (tasks[i].id == e.target.parentElement.getAttribute('data-id')) {
            tasks[i].complete = true;
            addToLocalStorage(tasks);
          }
        }
      } else {
        e.target.innerHTML = '<i class="fa-regular fa-square complete"></i>';
        e.target.childNodes[0].style.color = '#808080';
        e.target.parentElement.childNodes[1].style['text-decoration'] = 'none';
        e.target.parentElement.childNodes[1].style['font-size'] = '25px';
        e.target.parentElement.childNodes[1].style.color = '#454544';
        for (let i = 0; i < tasks.length; i += 1) {
          if (tasks[i].id == e.target.parentElement.getAttribute('data-id')) {
            tasks[i].complete = false;
            addToLocalStorage(tasks);
          }
        }
      }
    }
  });
};

