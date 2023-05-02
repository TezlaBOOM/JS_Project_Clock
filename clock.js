const currentTime = document.querySelector("h1");
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
Console = document.querySelector("comment"),
setAlarmBtn = document.querySelector("AlarmButt");
stopAlarmBtm = document.querySelector("AlarmSTButt");

let alarmTime,text1, text2 , text3,
ringtone = new Audio("./ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
   // HRAL.insertAdjacentHTML("afterend", option);
   selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}


for (let i = 23; i > -1; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[4].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[5].firstElementChild.insertAdjacentHTML("afterend", option);
}


setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
 
   
 
    if (alarmTime == `${h}:${m} ${ampm}`) {
        
        ringtone.play();
        ringtone.loop = true;
        
    }
});

function setAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;    
    
    content.classList.add("disable");
   
}
function stopAlarm(){  
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");                 
}

function checkData1Alarm(str)
 {
let testValue = 0;
    for (let i = 12; i > 0; i--){
        if (str == i){
             testValue = 1;
        }
    }
         if (testValue == 1){
            return /^[0-9]+$/.test(str);
         }else{
            return false;
              }
};

function checkData2Alarm(str)
 {  
 let testValue = 0;  
    for (let i = 59; i > 0; i--){       
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
function checkData3Alarm(str){
    
    let testValue = 0;
    for (let i = 2; i > 1; i--){
        if (str == "AM"){
             return true;
        }else if (str == "PM"){
            return true;
        }else{
        return false;
        }

    }
        
}

function TestConsole() {  


    x = document.getElementById("comment").value;
    let STRlength = x.length + 1;
    
    let y = "alarm";
    let w = "timer";
    let t = "set";
    let v = x.slice(STRlength-19,STRlength-16);
    let z = x.slice(STRlength-15, STRlength-10); 
    text1 = x.slice(STRlength-9,STRlength-7);
    text2 = x.slice(STRlength-6,STRlength-4);
    text3 = x.slice(STRlength-3,STRlength-1);

    



    if (v == t){

        if(z == w) { 


            }else if (z == y){
                 
                if(checkData1Alarm(text1)){
                    
                     if(checkData2Alarm(text2)){

                       if(checkData3Alarm(text3)){
                            content.classList.add("disable");    
                            alarmTime = x.slice(STRlength-9, STRlength-1);                
                            document.getElementById("comment").value = x + '\n';                 
                         }else {alert("Syntax Error Check if AM/PM value is good");
                         document.getElementById("comment").value = x + '\n';  }
                    }else { alert("Syntax Error Check if minutes value is good");
                    document.getElementById("comment").value = x + '\n';  }
                }else{ alert("Syntax Error Check if hours value is good");
            document.getElementById("comment").value = x + '\n'; }                

          }else{            
                 alert("Syntax Error Check your syntax if it has errors");
                 document.getElementById("comment").value = x + '\n'; 
             }
   }else{    
    alert("Syntax Error Check your syntax. Maybe you ment set");
    document.getElementById("comment").value = x + '\n'; 
   }

  }

AlarmButt.addEventListener("click", setAlarm);
AlarmSTButt.addEventListener("click", stopAlarm);
CommLine.addEventListener("click", TestConsole);