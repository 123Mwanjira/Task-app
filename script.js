alert("connected");

function addTask() {
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("dateInput").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

let text = document.createElement("span");
text.textContent = task + " - " + date;

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function() {
    li.remove();
};

li.appendChild(text);
li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

li.onclick = function() {
    li.style.textDecoration = "line-through";
};

    document.getElementById("taskList").appendChild(li);

    // clear input
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";

    alert("JS is working!");
}