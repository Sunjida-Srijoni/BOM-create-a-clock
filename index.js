const saveButton = document.querySelector(".btn");
console.log(saveButton);
const sampleText = document.getElementsByClassName("text");

saveButton.addEventListener("click", createClock);

function createClock(){
    console.log("inside create clock");
}