let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(() => {    
let currentTime = new Date();
let hours = currentTime.getHours();
let am_pm = 'AM';

if(hours >= 12) {
    am_pm = 'PM';
    if(hours > 12) {
        hours -= 12;
    }
} else if(hours == 0) {
    hours = 12;
}

hrs.innerHTML = (hours<10?"0":"") + hours;
mins.innerHTML= (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
ampm.innerHTML = am_pm;
}, 1000)


let month = document.getElementById("month");
let year = document.getElementById("year");
let date = document.getElementById("date");

setInterval(() => {
let currentDate = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

month.innerHTML = months[currentDate.getMonth()];
date.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();
}, 1000)

let day = document.getElementById("day");
setInterval(() => {
let currentDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

day.innerHTML = days[currentDate.getDay()];
})
let seconds = 0o0;
let tens = 0o0;
let smins = 0o0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getsMins = document.querySelector('.smins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    tens = '00';
    seconds = '00';
    smins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getsMins.innerHTML = smins;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        smins++;
        getMins.innerHTML = '0' + smins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(smins > 9){
        getSeconds.innerHTML = smins;
    }
}












