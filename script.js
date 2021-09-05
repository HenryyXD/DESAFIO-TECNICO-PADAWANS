function sortTable(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a, b) => {
    let x = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    let y = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    if(!isNaN(x)){
      x = parseInt(x, 10);
      y = parseInt(y, 10);
    }
    
    return x > y ? 1 * dirModifier : -1 * dirModifier;
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  tBody.append(...sortedRows);

  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

async function getData(url) {
  try {
    return await fetch(url).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
}

function updateTable(data) {
  let table = document.querySelector("tbody");
  data.forEach((item) => {
    let line = createLine(item);
    table.appendChild(line);
  });
}

document.querySelectorAll(".orderedTable th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    sortTable(tableElement, headerIndex, !currentIsAscending);
  });
});
