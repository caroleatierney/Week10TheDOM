// Allow user to add rows to a table dynamically

function addMeal() {
    var rows = document.getElementById('dinnerPlannerTable').getElementsByTagName('tr');
    var tableRowCount = rows.length;
    let id = tableRowCount-1;

    const table = document.getElementById("dinnerPlannerTable");

    let row = table.insertRow(tableRowCount);
    row.setAttribute('id', `item-${id++}`);
    row.insertCell(0).innerHTML = document.getElementById("dayOfWeek").value;
    document.getElementById("dinnerPlannerTable").rows[id].cells.item(0).setAttribute("style", "color: #e76f51;");
    row.insertCell(1).innerHTML = document.getElementById("date").value;
    row.insertCell(2).innerHTML = document.getElementById("protein").value;
    row.insertCell(3).innerHTML = document.getElementById("veggie").value;
    row.insertCell(4).innerHTML = document.getElementById("starch").value;
    row.insertCell(5).innerHTML = document.getElementById("howMany").value;
}

// Allow user to delete rows of a table dynamically