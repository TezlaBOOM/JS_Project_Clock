const currentTime2 = document.querySelector("p");
timer = document.querySelector(".Timer"),
selectMenu = document.querySelectorAll("select"),
setTimerBtn = document.querySelector("TimerButt"),
stopTimerBtn = document.querySelector("TimerSTButt");

let textTimer1 , q, textTimer2, textTimer3;
ringtone = new Audio("./ringtone.mp3");

var intervalId = null;

let hours = 0;
let minutes = 0;
let seconds = 0;
let STRlength2;

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
clearInterval(intervalId);    
      hours = "";
      minutes = "";
      seconds = "";

    
        ringtone.pause();
        currentTime2.innerText = "00:00:00";
        timer.classList.remove("disable");        
        ringtone.pause();
}

function checkData1(str)
 {
let testValue = 0;
    for (let i = 24; i > -1; i--){
        if (str == i){
             testValue = 1;
        }
    }
         if (testValue == 1){
            return /^[0-9]+$/.test(str);
         }else{
            return false;
              }
}

function checkData2(str)
 {  
 let testValue = 0;  
    for (let i = 59; i > -1; i--){       
        if (str == i){                  
             testValue = 1;
        }
    }
         if (testValue == 1){
            return /^[0-9]+$/.test(str);
         }else{
            return false;
              }
}
function checkData3(str)
 {
    let testValue = 0;
    for (let i = 59; i > -1; i--){         
       if (str == i){                  
             testValue = 1;
        }
    }
         if (testValue == 1){
            return /^[0-9]+$/.test(str);
         }else{
            return false;
              }

    }


function TestConsole() {

    q = document.getElementById("comment").value;
    STRlength2 = q.length + 1  ;
    
    let y = "alarm";
    let w = "timer";
    let t = "set";
    let op = q.slice(STRlength2-16, STRlength2-11);

    if (y == op ){       
        STRlength2 = STRlength2 - 1;  
        }

    let v = q.slice(STRlength2-19, STRlength2-16);
    let z = q.slice(STRlength2-15, STRlength2-10); 
    textTimer1 = q.slice(STRlength2-9, STRlength2-7);
    textTimer2 = q.slice(STRlength2-6, STRlength2-4);
    textTimer3 = q.slice(STRlength2-3, STRlength2-1);
  
  if (v == t){

         if (z == y){
         return;
            }
        else if(z == w) {

           if(checkData1(textTimer1)){
                    
              if(checkData2(textTimer2)){

                 if(checkData3(textTimer3)){
    
                    timer.classList.add("disable");
                    hours = textTimer1;         
                    minutes = textTimer2;
                    seconds = textTimer3;           
                    document.getElementById("comment").value = q + '\n'; 
                    if (hours == "00"){
                        hours = "0"
                    }          
                    if (minutes == "00"){
                        minutes = "0"
                    }
                    updateCountdown();

                     }else {alert("Syntax Error Check if seconds value is good");
                         document.getElementById("comment").value = q + '\n';  }
                    }else { alert("Syntax Error Check if minutes value is good");
                    document.getElementById("comment").value = q + '\n';  }
                }else { alert("Syntax Error Check if hours value is good");
            document.getElementById("comment").value = q + '\n'; }                  
                  

              }else{                 
                  ("Syntax Error Check your syntax if it has errors");
                  document.getElementById("comment").value = q + '\n'; 
                    }

                  }else{   

    alert("Syntax Error Check your syntax. Maybe you ment set");
    document.getElementById("comment").value = q + '\n'; 
   }
  }

    
TimerButt.addEventListener("click", settime);
TimerSTButt.addEventListener("click", stopTimer);
CommLine.addEventListener("click", TestConsole);
