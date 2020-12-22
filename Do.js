function addTask() {
    let button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function() {
        table.deleteRow(this);
    });


    let task = document.getElementById("task");
    let table = document.getElementById("myTaskList");

    if (task.value == "") {
        return;
    }
    else {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.appendChild(button);
        cell2.innerHTML = task.value;

        document.getElementById("task").value = "";
    }
}

