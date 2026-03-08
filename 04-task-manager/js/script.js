const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach((task, index)=>{

const li = document.createElement("li");

li.className = "list-group-item";

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);

});
}

addTaskBtn.addEventListener("click", ()=>{

const text = taskInput.value.trim();

if(text === "") return;

tasks.push({
text:text,
completed:false
});

taskInput.value = "";

saveTasks();
renderTasks();

});

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

renderTasks();
