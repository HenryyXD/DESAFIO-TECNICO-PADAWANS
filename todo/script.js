window.onload = () => {
  document.querySelectorAll(".notLoaded").forEach((i) => {
    i.classList.remove("notLoaded");
  });
  showData();
};

async function showData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let table = document.querySelector("tbody");

    data.forEach((item) => {
      let line = createLine(item);
      table.appendChild(line);
    });
  } catch (error) {
    console.log(error);
  }
}

function createLine(item) {
  line = document.createElement("tr");
  tdId = document.createElement("td");
  tdUserId = document.createElement("td");
  tdTitle = document.createElement("td");
  tdCompleted = document.createElement("td");

  tdId.innerHTML = item.id;
  tdUserId.innerHTML = item.userId;
  tdTitle.innerHTML = item.title;

  icon = document.createElement("i");

  icon.classList.add("material-icons");
  icon.innerHTML = item.completed ? "check_box" : "check_box_outline_blank";
  tdCompleted.appendChild(icon);

  line.appendChild(tdId);
  line.appendChild(tdUserId);
  line.appendChild(tdTitle);
  line.appendChild(tdCompleted);

  return line;
}
