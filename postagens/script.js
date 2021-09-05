window.onload = () => {
  document.querySelectorAll(".notLoaded").forEach((i) => {
    i.classList.remove("notLoaded");
  })
  getData("https://jsonplaceholder.typicode.com/posts").then(data => updateTable(data))
};

function createLine(item) {
  line = document.createElement("tr");
  tdId = document.createElement("td");
  tdUserId = document.createElement("td");
  tdTitle = document.createElement("td");
  tdPost = document.createElement("td");

  tdId.innerHTML = item.id;
  tdUserId.innerHTML = item.userId;
  tdTitle.innerHTML = item.title;
  tdPost.innerHTML = item.body;

  line.appendChild(tdId);
  line.appendChild(tdUserId);
  line.appendChild(tdTitle);
  line.appendChild(tdPost);

  return line;
}

