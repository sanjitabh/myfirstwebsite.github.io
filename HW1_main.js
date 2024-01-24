
let myButton = document.getElementById("myButton");
let myImage = document.getElementById("myImage");

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tulips.jpg") {
    myImage.setAttribute("src", "images/nyc.jpg");
  } else {
    myImage.setAttribute("src", "images/tulips.jpg");
  }
};


let myButton2 = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome, ${myName}`;
  myHeading.style.color = "#556B2F"; // Set text color
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome, ${storedName}`;
  myHeading.style.color = "#556B2F"; // Set text color
}
myButton2.onclick = () => {
  setUserName();
};