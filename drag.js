const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
  task.classList.add("is-dragging");
  });

  task.addEventListener("dragend", () => {
  task.classList.remove("is-dragging");
  });
});


droppables.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
  event.preventDefault();
  const currentTask = document.querySelector(".is-dragging");
  if (currentTask) {
  zone.appendChild(currentTask);
  saveData();
  }
});
});