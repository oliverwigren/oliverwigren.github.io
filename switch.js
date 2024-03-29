const button = document.getElementById("c-button");

const eduDiv = document.getElementById("education");
const workDiv = document.getElementById("work");

const switchDiv = () => {
  if ((eduDiv.style.display = "none")) {
    eduDiv.style.display = "block";
    workDiv.style.display = "none";
  } else {
    workDiv.style.display = "block";
    eduDiv.style.display = "none";
  }
};

button.addEventListener("click", switchDiv);
