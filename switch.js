const button = document.getElementById("switch");

const eduDiv = document.getElementById("education");
const workDiv = document.getElementById("work");

const switchDiv = () => {
  if ((eduDiv.style.display = "hidden")) {
    eduDiv.style.display = "block";
    workDiv.style.display = "block";
  } else {
    workDiv.style.display = "block";
    eduDiv.style.display = "hidden";
  }
};

button.addEventListener("click", switchDiv);
