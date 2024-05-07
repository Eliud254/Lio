function addTask() {
  var taskName = document.getElementById('taskName').value;
  if (taskName.trim() === '') {
    alert('Please enter a task name');
    return;
  }
  
  var taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.textContent = taskName;
  
  var editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.onclick = function() {
    editTask(taskItem);
  };
  taskItem.appendChild(editBtn);
  
  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function() {
    deleteTask(taskItem);
  };
  taskItem.appendChild(deleteBtn);
  
  var priority = document.getElementById('priority').value;
  taskItem.classList.add('priority-' + priority.toLowerCase());
  
  var taskList = document.getElementById('taskList');
  taskList.appendChild(taskItem);
  document.getElementById('taskName').value = '';
  
  makeResponsive();
}

function deleteTask(taskItem) {
  if (confirm("Are you sure you want to delete this task?")) {
    taskItem.remove();
  }
}

function editTask(taskItem) {
  var newTaskName = prompt("Enter the new task name:");
  if (newTaskName !== null) {
    taskItem.textContent = newTaskName;
  }
}

function makeResponsive() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    document.getElementById('taskList').classList.add('responsive-task-list');
  } else {
    document.getElementById('taskList').classList.remove('responsive-task-list');
  }
}
