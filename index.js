var addBtn = document.getElementById('add-btn');
var table = document.getElementById('tasks');
var tableBody = document
  .getElementById('tasks')
  .getElementsByTagName('tbody')[0];
function addTask() {
  var taskName = document.getElementById('taskname').value;
  var taskEstimation = document.getElementById('taskestimation').value;

  var newRow = document.createElement('tr');

  var idCell = document.createElement('td');
  idCell.textContent = 1;
  newRow.appendChild(idCell);

  var nameCell = document.createElement('td');
  nameCell.textContent = taskName;
  newRow.appendChild(nameCell);

  var estimationCell = document.createElement('td');
  estimationCell.textContent = taskEstimation;
  newRow.appendChild(estimationCell);

  tableBody.appendChild(newRow);

  document.getElementById('taskname').value = '';
  document.getElementById('taskestimation').value = '';
}
