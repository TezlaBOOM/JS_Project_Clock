const currentTime2 = document.querySelector("p");
timer = document.querySelector(".Timer"),
selectMenu = document.querySelectorAll("select"),
setTimerBtn = document.querySelector("TimerButt"),
stopTimerBtn = document.querySelector("TimerSTButt");


ringtone = new Audio("./ringtone.mp3");

var intervalId = null;

let hours = 0;
let minutes = 0;
let seconds = 0;



function settime(){

hours = parseInt(  `${selectMenu[3].value}`) || 0;
minutes = parseInt(`${selectMenu[4].value}`) || 0;
seconds = parseInt(`${selectMenu[5].value}`) || 0;
let time = `${selectMenu[3].value}:${selectMenu[4].value} ${selectMenu[5].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Seconds")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    timer.classList.add("disable");
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
      hours = "";
  minutes = "";
  seconds = "";

    
        ringtone.pause();
        currentTime2.innerText = "00:00:00";
        timer.classList.remove("disable");
        document.getElementById("comment").value = "";
        ringtone.pause();
}

function TestConsole() {
x = document.getElementById("comment").value;
    
    let y = "alarm";
    let w = "timer";
    let z = x.slice(4, 9);  
    
    
     if (z == y){
      // console.log("Działający if ")
      //  console.log(x.substring(4, 10)); 
    //
    //
      //  content.classList.add("disable");
      //  console.log(x.slice(10, 18)); 
      //  alarmTime = x.slice(10, 18);  

    }else if(z == w) {
    
      timer.classList.add("disable");

      console.log("Hours")
      console.log(x.slice(10, 12))

      console.log("Minutes")
      console.log(x.slice(13, 15))

      console.log("Seconds")
      console.log(x.slice(16, 18))

      hours = x.slice(10, 12);
      minutes = x.slice(13, 15);
      seconds = x.slice(16, 18);
      console.log("Hours parsed");
      console.log(hours);
      if (hours == "00"){
        hours = "0"
      }

      console.log("Minutes parsed");
      console.log(minutes);
      if (minutes == "00"){
        minutes = "0"
      }

      console.log("Seconds parsed");
      console.log(seconds);

       


      updateCountdown();

    
    }
    else {
    alert("Syntax Error Check your syntax if it has errors");
    }

  }

    
TimerButt.addEventListener("click", settime);
TimerSTButt.addEventListener("click", stopTimer);
CommLine.addEventListener("click", TestConsole);
