const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

// We are looping through each task, when we start dragging them it should add the class specified,
// when we stop dragging it shoukld remove the class
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
    task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
});
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", () => {
    const currentTask = document.querySelector(".is-dragging")
    zone.appendChild(currentTask);
});
});


// saving the data so it does not get lost when refreshed
function saveData(){
  localStorage.setItem("data", droppables.innerHTML);
}

// displaying the data when the browser is refreshed
function showData(){
  droppables.innerHTML = localStorage.getItem("data")
}
showData();