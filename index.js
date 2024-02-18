const saveButton = document.querySelector(".btn");
console.log(saveButton);
const sampleText = document.querySelector(".text");

saveButton.addEventListener("click", createClock);

function createClock(){
    console.log("inside create clock");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);



    let time = hours + ":" + minutes + ":" + seconds;

    console.log(time);
    sampleText.textContent = time;

    setInterval(createClock, 1000)
}

function formatTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}