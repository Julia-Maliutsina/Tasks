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

let pendingObjects = [];

const START_DELAY = 3000;
const STATUS_CHANGE_INTERVAL = 5000;
const DOWNLOAD_STATUSES = {
  pending: "Pending",
  done: "Done",
  failed: "Failed",
};

function constructTable(array) {
  const table = document.createElement("table");
  document.getElementsByTagName("body")[0].appendChild(table);

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

    table.appendChild(row);
    if (element.status === DOWNLOAD_STATUSES.pending) {
      pendingObjects.push(row);
    }
  }
}

constructTable(DOWNLOADS);

function startDelay() {
  let i = 0;
  const timer = setTimeout(changeStatus, START_DELAY);

  function changeStatus() {
    console.log("Check started");
    pendingObjects[i].children[2].textContent = DOWNLOAD_STATUSES.done;
    i++;
    if (i < pendingObjects.length) {
      const interval = setTimeout(changeStatus, STATUS_CHANGE_INTERVAL);
    }
  }
}
