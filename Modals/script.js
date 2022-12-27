'use strict';
const audio = document.getElementById('myAudio');
const mama = document.getElementById('myAudio2');
const ch = document.getElementById('myAudio3');
const m1 = document.getElementById("type1");
const m2 = document.getElementById("type2");
const m3 = document.getElementById("type3");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal1Trigger = document.getElementById("modal1-trigger");
var modal2Trigger = document.getElementById("modal2-trigger");
var modal3Trigger = document.getElementById("modal3-trigger");
const buttons = document.querySelector('.eagle');
const button = document.querySelector('.mama');
const but = document.querySelector('.ps');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal');
const btnCloseModal2 = document.getElementById('m2');
const btnCloseModal3 = document.getElementById('m3');
let txt1;
let txt2;
let txt3;
let isPlaying = false;
var i;
var typedContent;
var timer;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    txt1 = xhr.responseText;
  }
}
xhr.open("GET", "modal1.txt", true);
xhr.send();

var vhr = new XMLHttpRequest();
vhr.onreadystatechange = function() {
  if (vhr.readyState == XMLHttpRequest.DONE) {
    txt2 = vhr.responseText;
  }
}
vhr.open("GET", "modal2.txt", true);
vhr.send();

var chr = new XMLHttpRequest();
chr.onreadystatechange = function() {
  if (chr.readyState == XMLHttpRequest.DONE) {
    txt3 = chr.responseText;
  }
}
chr.open("GET", "modal3.txt", true);
chr.send();

function typeContent(modal, content, speed) {
  i = 0;
  typedContent = "";
  modal.textContent = "";
  timer = setInterval(function() {
    typedContent += content.charAt(i);
    modal.textContent = typedContent;
    if (++i == content.length) {
      clearInterval(timer);
    }
  }, speed);
}
modal1Trigger.onclick = function() {
  audio.play();
  modal1.style.display = "block";
  overlay.classList.remove('hidden');
  isPlaying = true;
  typeContent(m1,txt1,21);
}
modal2Trigger.onclick = function() {
  mama.play();
  modal2.style.display = "block";
  overlay.classList.remove('hidden');
  isPlaying = true;
  typeContent(m2,txt2,20);
}
modal3Trigger.onclick = function() {
  ch.play();
  isPlaying = true;
  modal3.style.display = "block";
  overlay.classList.remove('hidden');
  typeContent(m3,txt3,20);
}

const closeModal1 = function () {
  modal1.style.display = "none";
  overlay.classList.add('hidden');
  audio.pause();
  audio.currentTime = 0;
  i=0;
  typedContent= "";
  clearInterval(timer);
};
const closeModal2 = function () {
  modal2.style.display = "none";
  overlay.classList.add('hidden');
  mama.pause();
  mama.currentTime = 0;
  i=0;
  typedContent= "";
  clearInterval(timer);
};
const closeModal3 = function () {
  modal3.style.display = "none";
  overlay.classList.add('hidden');
  ch.pause();
  ch.currentTime = 0;
  i=0;
  typedContent= "";
  clearInterval(timer);
};
btnCloseModal1.addEventListener('click', closeModal1);
btnCloseModal2.addEventListener('click', closeModal2);
btnCloseModal3.addEventListener('click', closeModal3);
overlay.addEventListener('click', closeModal1);
overlay.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal3);
