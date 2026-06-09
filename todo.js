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
   span1.classList.add("delete");
   newTask.appendChild(span1)   

   let span2 = document.createElement("span");
   span2.innerHTML = "\u270E";
   span2.classList.add("edit");
   newTask.appendChild(span2);

    // this function handles both of my span elements and based
    // on the classes it executes the specific function
    newTask.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        newTask.remove();
    }

    if (event.target.classList.contains("edit")) {
        const currentText = newTask.childNodes[0].textContent;
        const newText = prompt("Edit task:", currentText);

        if (newText !== null && newText.trim() !== "") {
            newTask.childNodes[0].textContent = newText;
        }
    }
});
}});
