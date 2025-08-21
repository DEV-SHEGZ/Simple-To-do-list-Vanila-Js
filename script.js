const task = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const li = document.createElement("li");
const liText = document.createElement("span");
const deleteBtn = document.createElement("span");

// Add event listener to the button

addBtn.addEventListener("click", function () {
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  liText.textContent = task.value;
  li.appendChild(checkbox);
  li.appendChild(liText);
  li.appendChild(deleteBtn);

  li.id = "list-item";
  list.appendChild(li);
  console.log(task.value);
  task.value = "";
});
