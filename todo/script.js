window.onload = () => {
  document.querySelectorAll(".notLoaded").forEach((i) => {
    i.classList.remove("notLoaded");
  });
  getData("https://jsonplaceholder.typicode.com/todos").then(data => updateTable(data));
};

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
