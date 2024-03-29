const button = document.getElementById("c-button");

const eduDiv = document.getElementById("education");
const workDiv = document.getElementById("work");

let bool = true;

const switchDiv = (bool) => {
  if (bool) {
    eduDiv.style.display = "none";
    workDiv.style.display = "block";
    bool = false;
  } else {
    eduDiv.style.display = "block";
    workDiv.style.display = "none";
    bool = true;
  }
};

button.addEventListener("click", switchDiv);
