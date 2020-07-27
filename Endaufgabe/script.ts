"use strict";

function playSample(sound: string): void {
        let audios: HTMLAudioElement = new Audio(sound);
        audios.play();
}

/*//ALL SOUNDS
var allSounds: string[] = ["sound_boing_2.mp3", "sound_boing.mp3", "sound_kids_booo.mp3", "sound_laugh.mp3"];

//play Random sound at the beginning #1
function soundEasy(): void {
    for (let i: number = 0; i < 3; i++) {
        sounds.push(allSounds[Math.floor(Math.random() * 3)]);
    }
}*/

window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { playSample("sounds/sound_boing_2.mp3"); });
    document.querySelector(".button2").addEventListener("click", function () { playSample("sounds/sound_boing.mp3"); });
    document.querySelector(".button3").addEventListener("click", function () { playSample("sounds/sound_kids_booo.mp3"); });
    document.querySelector(".button4").addEventListener("click", function () { playSample("sounds/sound_laugh.mp3"); });
    document.querySelector(".random").addEventListener("click", function () { sounds(); });

});

//Play random sound at beginnig of game #2
function sounds(): void {
    var x: number = Math.floor((Math.random() * 3));
    var sound: HTMLAudioElement = new Audio();
    switch (x) {
      case 1:
           sound.src = "sound_boing_2.mp3";
           break;
      case 2:
           sound.src = "sound_boing.mp3";
           break;
      case 3:
           sound.src = "sound_kids_booo.mp3";
           break;
      case 4:
           sound.src = "sound_laugh.mp3";
           break;
    }
    sound.play();
  }

//level of difficulty easy/standard/hard #2
var speed: number = 900;
var time: number = 400;

function level(): void {
    if (speed == 900) {
        speed = 750;
        time = 300;
        //easy
        document.getElementById(".speed");
    }
    else if (speed == 750) {
        speed = 400;
        time = 200;
        //standard
        document.getElementById(".speed1");
    }
    else if (speed == 400) {
        speed = 900;
        time = 500;
        //hard
        document.getElementById(".speed2");
    }
}

