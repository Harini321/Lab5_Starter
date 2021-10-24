// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

}
const jsConfetti = new JSConfetti();
var horn = document.getElementById('horn-select');
horn.addEventListener('change', changeImg, true);

document.getElementById("button").addEventListener("click", playSound, true);

//document.getElementById("volume-controls").addEventListener("slide", slide, true);
document.querySelector('input').addEventListener('input', slide);;

function changeImg(e){
  if (e.currentTarget.value == 'air-horn') {
    document.getElementById('img').src = "assets/images/air-horn.svg";
    document.getElementById('audio').src = "assets/audio/air-horn.mp3";
  }
  if (e.currentTarget.value == 'car-horn') {
    document.getElementById('img').src = "assets/images/car-horn.svg";
    document.getElementById('audio').src = "assets/audio/car-horn.mp3";
  }
  if (e.currentTarget.value == 'party-horn') {
    document.getElementById('img').src = "assets/images/party-horn.svg";
    document.getElementById('audio').src = "assets/audio/party-horn.mp3";
    
    jsConfetti.addConfetti()
  }
}

function playSound(){
  var audio = document.getElementById("audio");
  audio.play();
}

function slide(e){
  
  if(e.currentTarget.value == 0){
    document.getElementById('volimg').src = "assets/icons/volume-level-0.svg";

  }
  if(e.currentTarget.value >= 1 && e.currentTarget.value < 33){
    document.getElementById('volimg').src = "assets/icons/volume-level-1.svg";
  }
  if(e.currentTarget.value >= 33 && e.currentTarget.value < 67){
    document.getElementById('volimg').src = "assets/icons/volume-level-2.svg";
  }
  if(e.currentTarget.value >= 67){
    document.getElementById('volimg').src = "assets/icons/volume-level-3.svg";
  }

  audio.volume = e/100;
}