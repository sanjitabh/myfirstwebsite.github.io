
let myButton = document.getElementById("myButton");
let myImage = document.getElementById("myImage");

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "tulips.jpg") {
    myImage.setAttribute("src", "nyc.JPG");
  } else {
    myImage.setAttribute("src", "tulips.JPG");
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

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
  }
}
}
myButton2.onclick = () => {
  setUserName();
};
