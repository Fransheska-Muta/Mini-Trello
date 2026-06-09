const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (event) => {
   event.preventDefault(); // so the screen doesnt reload when we submit
   const value = input.value;
   if(!value){
   alert("What task am i supposed to add?");
   } else {
   const newTask = document.createElement("p");
   newTask.classList.add("task");
   newTask.setAttribute("draggable", "true");
   newTask.innerText = value;

   newTask.addEventListener("dragstart", () => {
   newTask.classList.add("is-dragging");
   });
   newTask.addEventListener("dragend", () => {
   newTask.classList.remove("is-dragging");
   });

   todoLane.appendChild(newTask)
   input.value = ""

   //Delete (cross icon)
   let span1 = document.createElement("span");
   span1.innerHTML = "\u00d7";
   newTask.appendChild(span1)   

   newTask.addEventListener("click", function(event) {
   if(event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
   }
});
}});

