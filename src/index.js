document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector('form').addEventListener('submit', addTask);
});

function addTask (e) {
  e.preventDefault();
  let form = document.querySelector('form')
  const li = document.createElement('li');
  const d = document.createElement('button');
  d.textContent = 'x';
  document.querySelector('#tasks').appendChild(li);
  const newTask = document.querySelector('#new-task-description');
  const person = e.target.person.value;
  li.textContent = (newTask.value + ` (${person})`)
  if (this[2][0].value = 'high') {
    li.style.color = 'red';
  }
  if (this[2][1].value = 'medium') {
    li.style.color = 'orange';
  }
  if (this[2][2].value = 'low') {
    li.style.color = 'green';
  }
  debugger;
  // console.log(e.target['new-task-description'].value);
  // console.log(newTask.value); 
  li.appendChild(d);
  form.reset();
  d.addEventListener('click', removeTask);
}

function removeTask (e) {
  e.target.parentNode.remove();
}

//Questions:
//How do I get the cursor back to the first box after submitting another line?
//how to find values of priority to influence color