"use strict";
let hour = 0;
let min = 0;
let seg = 0;
let time = 1000; //* quantos milessimos  valem 1 segundo 
let cron;

function Start() {
    cron = setInterval(() => {
        Timer();
    }, time);
}

function Pause() {
    clearInterval(cron);
   
}

function Stop() {
    clearInterval(cron);
    hour = 0;
    min = 0;
    seg = 0;
    document.getElementById('counter').innerText = "00:00:00";
}

function Timer() {
    seg++;
    if (seg == 60) {
        seg = 0;
        min++
    }
    if (min == 60) {
        min = 0;
        hour++;
    }
    let format = (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg)
    document.getElementById('counter').innerText = format;
}