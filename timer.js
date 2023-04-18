const currentTime2 = document.querySelector("p");
selectMenu = document.querySelectorAll("select"),
setTimerBtn = document.querySelector("TimerButt"),
stopTimerBtn = document.querySelector("TimerSTButt"),
ringtone = new Audio("./ringtone.mp3");

var intervalId = null;
let hours = 0;
let minutes = 0;
let seconds = 0;



function settime(){

hours = parseInt(`${selectMenu[3].value}`) || 0;
minutes = parseInt(`${selectMenu[4].value}`) || 0;
seconds = parseInt(`${selectMenu[5].value}`) || 0;
let time = `${selectMenu[3].value}:${selectMenu[4].value} ${selectMenu[5].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Seconds")) {
        return alert("Please, select a valid time to set Alarm!");
    }

if (hours > 24) hours = 24;
if (minutes > 59) minutes = 59;
if (seconds > 59) seconds = 59;

updateCountdown();

}

function updateCountdown(){  
   intervalId = setInterval(function(){  
       
seconds--;
          if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
              minutes = 59;
              hours--;
              if (hours < 0) {                
               ringtone.play();
                ringtone.loop = true;                 
                             
                clearInterval(intervalId);
                return
              }
            }
          } 

         let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;  

    currentTime2.innerText = `${h}:${m}:${s}`;
    
    
} ,1000);
   
}

function stopTimer() {        
        ringtone.pause();
        currentTime2.innerText = "00:00:00";
      }

TimerButt.addEventListener("click", settime);
TimerSTButt.addEventListener("click", stopTimer);