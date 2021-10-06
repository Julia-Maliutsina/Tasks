const DOWNLOADS = [
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
  let table = document.createElement("table");
  document.getElementsByTagName("body")[0].appendChild(table);

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let cellText = document.createTextNode(element.id);
    cell.appendChild(cellText);
    row.appendChild(cell);
    let cell = document.createElement("td");
    let cellText = document.createTextNode(element.title);
    cell.appendChild(cellText);
    row.appendChild(cell);
    let cell = document.createElement("td");
    let cellText = document.createTextNode(element.status);
    cell.appendChild(cellText);
    row.appendChild(cell);

    table.appendChild(row);
  }
}

constructTable(DOWNLOADS);

const START_DELAY = 3000;
const STATUS_CHECK_INTERVAL = 5000;
const INITIAL_STATUS = "Pending";
const FINAL_STATUS = "Done";

function startDelay() {
  let timer = setTimeout(setTimer, START_DELAY);
}
function setTimer() {
  checkStatus();

  function checkStatus() {
    console.log("Check started");
    let table = document.getElementsByTagName("table")[0];
    let rows = table.children;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].children[2].textContent == INITIAL_STATUS) {
        rows[i].children[2].textContent = FINAL_STATUS;
        let interval = setTimeout(checkStatus, STATUS_CHECK_INTERVAL);
        break;
      }
    }
  }
}
