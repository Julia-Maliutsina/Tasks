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
  const TABLE = document.createElement("table");
  document.getElementsByTagName("body")[0].appendChild(TABLE);

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    let row = document.createElement("tr");
    let idCell = document.createElement("td");
    let idText = document.createTextNode(element.id);
    idCell.appendChild(idText);
    row.appendChild(idCell);
    let titleCell = document.createElement("td");
    let titleText = document.createTextNode(element.title);
    titleCell.appendChild(titleText);
    row.appendChild(titleCell);
    let statusCell = document.createElement("td");
    let statusText = document.createTextNode(element.status);
    statusCell.appendChild(statusText);
    row.appendChild(statusCell);

    TABLE.appendChild(row);
  }
}

constructTable(DOWNLOADS);

const START_DELAY = 3000;
const STATUS_CHECK_INTERVAL = 5000;
const DOWNLOAD_STATUSES = {
  pending: "Pending",
  done: "Done",
  failed: "Failed",
};

function startDelay() {
  const TIMER = setTimeout(setTimer, START_DELAY);
}
function setTimer() {
  checkStatus();

  function checkStatus() {
    console.log("Check started");
    const TABLE = document.getElementsByTagName("table")[0];
    const ROWS = TABLE.children;
    for (let i = 0; i < ROWS.length; i++) {
      if (ROWS[i].children[2].textContent == DOWNLOAD_STATUSES.pending) {
        ROWS[i].children[2].textContent = DOWNLOAD_STATUSES.done;
        const INTERVAL = setTimeout(checkStatus, STATUS_CHECK_INTERVAL);
        break;
      }
    }
  }
}
