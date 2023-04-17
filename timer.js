const currentTime2 = document.querySelector("p");
selectMenu = document.querySelectorAll("select"),
setTimerBtn = document.querySelector("TimerButt"),
stopTimerBtn = document.querySelector("TimerSTButt"),
ringtone = new Audio("./ringtone.mp3");

var intervalId = null;
let startmin = (`${selectMenu[3].value}`*60) + (`${selectMenu[4].value}`);
let time = startmin * 60;


function settime(){

startmin = (`${selectMenu[3].value}`*60) + (`${selectMenu[4].value}`); 
time = startmin * 60;
updateCountdown();

}

function updateCountdown(){  
   intervalId = setInterval(function(){
    // if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        //return alert("Please, select a valid time to set Alarm!");
        //`${selectMenu[3].value}` = 0;
   // }
    

        
    

    const minutes = Math.floor(time/60);
    let seconds = time % 60;


    seconds = seconds <10 ? '0' + seconds : seconds;
    currentTime2.innerText = `${minutes}:${seconds}`;
    

 if (time === 0) {
        ringtone.play();
        ringtone.loop = true;
        clearInterval(intervalId);
    }
time--;

} ,1000);
   

}
function stopTimer() {
        clearInterval(intervalId);
        intervalId = null;
        ringtone.pause();
        currentTime2.innerText = "00:00:00";
      }

TimerButt.addEventListener("click", settime);
TimerSTButt.addEventListener("click", stopTimer);