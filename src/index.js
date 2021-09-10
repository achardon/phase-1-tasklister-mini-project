document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', addTask);
});

const p = document.createElement('p');
  p.id = 'noTasks'
  document.querySelector('#tasks').appendChild(p);

if (document.querySelector('li') === null) {
  p.textContent = 'You have no items on your To Do List. Go play!';
}

function addTask (e) {
  e.preventDefault();
  p.textContent = '';
  let form = document.querySelector('form')
  const li = document.createElement('li');
  const d = document.createElement('button');
  d.textContent = 'x';
  document.querySelector('#tasks').appendChild(li);
  const newTask = document.querySelector('#new-task-description');
  const person = e.target.person.value;
  li.textContent = (newTask.value + ` (${person})`)
  if (e.target.priority.value === 'high') {
    li.style.color = 'red';
  }
  else if (e.target.priority.value === 'medium') {
    li.style.color = 'magenta';
  }
  else if (e.target.priority.value === 'low') {
    li.style.color = 'green';
  }
  // console.log(e.target['new-task-description'].value);
  // console.log(newTask.value); 
  li.appendChild(d);
  form.reset();
  newTask.focus();
  d.addEventListener('click', removeTask);
}

function removeTask (e) {
  e.target.parentNode.remove();
  if (document.querySelector('li') === null) {
    p.textContent = 'You have no items on your To Do List. Go play!';
  }
}

