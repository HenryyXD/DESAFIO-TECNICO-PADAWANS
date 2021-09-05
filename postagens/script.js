window.onload = () => {
  document.querySelectorAll(".notLoaded").forEach((i) => {
    i.classList.remove("notLoaded");
  })
  showData();
};

async function showData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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

