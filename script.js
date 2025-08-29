var i = 0;

let addbtn = document.querySelector("#addbtn");
let taskContainer = document.getElementById("taskcontainer");

// Adding event listener for 'Enter' key on input to add task
document.querySelector('#taskinput').addEventListener('keydown', function(e){
  if(e.code === 'Enter'){
    addTask();
  }
});

function addTask(){
  i++;
  localStorage.setItem('taskid', i); 

  let taskInp = document.querySelector('#taskinput').value.trim();
  if(taskInp === "") return; // avoid empty tasks

  // Input creation
  let inp = document.createElement("input");
  inp.setAttribute("type", "checkbox");
  inp.setAttribute("class", "checkinput");

  // Task Name creation
  let taskName = document.createElement("p");
  taskName.setAttribute("class", "taskname");
  taskName.textContent = taskInp;

  // Remove button creation
  let rembtn = document.createElement("button");
  rembtn.setAttribute("class", "rembtn");

  // Image Button creation inside remove button
  let img = document.createElement("img");
  img.setAttribute("class", "bin");
  img.setAttribute("src", "bin.png");
  img.setAttribute("alt", "remove");
  rembtn.appendChild(img);

  // Task container div
  let task = document.createElement("div");
  task.setAttribute("id", i);
  task.setAttribute("class", "task");

  task.appendChild(inp);
  task.appendChild(taskName);
  task.appendChild(rembtn);

  taskContainer.appendChild(task);

  // Clear input box after adding
  document.querySelector('#taskinput').value = "";

  // Add click listener to remove button to delete this task
  rembtn.addEventListener('click', function(){
    task.remove();
  });
}
