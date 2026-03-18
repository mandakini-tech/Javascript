// let tasklist = document.querySelector("#task-list"); // ✅ Fix: querySelector
// let isShow = true;

// function showtask() {
//   if (isShow) {
//     tasklist.style.display = "none";
//     isShow = false;
//   } else {
//     tasklist.style.display = "block";
//     isShow = true;
//   }
// }
// // Instead of onclick in HTML
// tasklist.addEventListener('click', showtask);
// script.js
// const taskInput = document.getElementById('task-input');
// const addTaskBtn = document.getElementById('add-task');
// const taskList = document.getElementById('task-list');

// let tasks = [];

// // Load tasks from localStorage on page load
// window.onload = () => {
//   const storedTasks = localStorage.getItem('tasks');
//   if (storedTasks) {
//     tasks = JSON.parse(storedTasks);
//     renderTasks();
//   }
// };

// // Add Task
// addTaskBtn.addEventListener('click', () => {
//   const text = taskInput.value.trim();
//   if (text === '') return;

//   const newTask = {
//     id: Date.now(),
//     text,
//     completed: false
//   };

//   tasks.push(newTask);
//   taskInput.value = '';
//   saveTasks();
//   renderTasks();
// });

// // Save tasks to localStorage
// function saveTasks() {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Render all tasks
// function renderTasks() {
//   taskList.innerHTML = '';
//   tasks.forEach(task => {
//     const li = document.createElement('li');
//     li.textContent = task.text;
//     li.style.textDecoration = task.completed ? 'line-through' : 'none';

//     // Toggle completion
//     li.addEventListener('click', () => {
//       task.completed = !task.completed;
//       saveTasks();
//       renderTasks();
//     });

//     // Delete button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = '❌';
//     deleteBtn.style.marginLeft = '10px';
//     deleteBtn.addEventListener('click', (e) => {
//       e.stopPropagation(); // Prevent toggle on delete
//       tasks = tasks.filter(t => t.id !== task.id);
//       saveTasks();
//       renderTasks();
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   });
// }
// // const checkbox = document.getElementById("checkbox");
// // checkbox.addEventListener("change", () => {
// //   document.body.classList.toggle("dark-mode");
// // });
const inputBox=document.getElementById("task-input");
const listContainer=document.getElementById("task-list");
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='❌';
        li.appendChild(span);
    }
    inputBox.value="";
    savedData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedData();
    }
},false);
function savedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();