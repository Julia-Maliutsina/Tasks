const downloads = [
  {
    id: 1,
    title: "Recipe",
    status: "Done",
  },
  {
    id: 2,
    title: "Workouts",
    status: "Pending",
  },
  {
    id: 3,
    title: "Passwords",
    status: "Pending",
  },
  {
    id: 4,
    title: "To Do 2021",
    status: "Pending",
  },
  {
    id: 5,
    title: "Books",
    status: "Failed",
  },
];
function constructTable(array) {
  var table = document.createElement("table");
  document.getElementsByTagName("body")[0].appendChild(table);

  for (var i = 0; i < array.length; i++) {
    let element = array[i];

    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(element.id);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(element.title);
    cell.appendChild(cellText);
    row.appendChild(cell);
    var cell = document.createElement("td");
    var cellText = document.createTextNode(element.status);
    cell.appendChild(cellText);
    row.appendChild(cell);

    table.appendChild(row);
  }
}

constructTable(downloads);

function startDelay() {
  var timer = setTimeout(setTimer, 3000);
}
function setTimer() {
  checkStatus();

  function checkStatus() {
    console.log("Check started");
    var table = document.getElementsByTagName("table")[0];
    var rows = table.children;
    for (let i = 0; i < rows.length; i++) {
      //console.log(rows[i].children[2].textContent);
      if (rows[i].children[2].textContent == "Pending") {
        rows[i].children[2].textContent = "Done";
        var interval = setTimeout(checkStatus, 5000);
        break;
      }
    }
  }
}
