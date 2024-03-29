const button = document.getElementById("c-button");

const eduDiv = document.getElementById("education");
const workDiv = document.getElementById("work");

let bool = true;

const switchDiv = (bool) => {
  if (bool) {
    eduDiv.style.visibility = "hidden";
    workDiv.style.visibility = "visible";
    bool = false;
  } else {
    eduDiv.style.visibility = "visible";
    workDiv.style.visibility = "hidden";
    bool = true;
  }
};

button.addEventListener("click", switchDiv);
