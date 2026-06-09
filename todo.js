const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");
const lanes = document.querySelectorAll(".swim-lane");

//this function saves the current state of the lanes to local storage, 
// it loops through each lane and saves its innerHTML to an array, 
// then it saves that array as a string in local storage 
function saveData() {
    const data = [];

    lanes.forEach((lane) => {
        data.push(lane.innerHTML);
    });
    localStorage.setItem("data", JSON.stringify(data));
}

//this loads the saved data and fills each lane 
function showData() {
    const data = JSON.parse(localStorage.getItem("data"));

    lanes.forEach((lane, index) => {
        lane.innerHTML = data[index];
    });

    addTaskEvents();
}

//adding the dragging class when we start dragging the elements, 
// then removing it once we stop, each span is given a class so that i know what does what
function addTaskEvents() {

    document.querySelectorAll(".task").forEach((task) => {

        task.addEventListener("dragstart", () => {
            task.classList.add("is-dragging");
        });

        task.addEventListener("dragend", () => {
            task.classList.remove("is-dragging");
            saveData();
        });

        task.addEventListener("click", function(event) {

            if (event.target.classList.contains("delete")) {
                task.remove();
                saveData();
            }

            if (event.target.classList.contains("edit")) {

                const currentText = task.childNodes[0].textContent;
                const newText = prompt("Edit task:", currentText);
                task.childNodes[0].textContent = newText;
                saveData();
                
            }
        });
    });
}

//event listener to add a new task to the todo lane
form.addEventListener("submit", (event) => {

    event.preventDefault(); // so the screen doesnt reload when we submit
    const value = input.value;

    if (!value) {
        alert("What task am I supposed to add?");
    }

    const newTask = document.createElement("p");

    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    //delete button
    let span1 = document.createElement("span");
    span1.innerHTML = "\u00d7";
    span1.classList.add("delete");
    newTask.appendChild(span1);

    //edit button
    let span2 = document.createElement("span");
    span2.innerHTML = "\u270E";
    span2.classList.add("edit");
    newTask.appendChild(span2);

    todoLane.appendChild(newTask);

    addTaskEvents();
    saveData();

    input.value = "";
});

//this loads the saved data onve page reloads
showData();