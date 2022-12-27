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
const txt1 = `Vikram is a 2022 Indian Tamil-language action thriller film directed by Lokesh Kanagaraj,
who co-wrote the script with Rathna Kumar and produced by Kamal Haasan who also stars in 
the titular role as agent Vikram, who leads a black-ops squad that aims to bring down a 
drug syndicate led by Sandhanam (Vijay Sethupathi). The film also stars Fahadh Faasil, 
Kalidas Jayaram, Narain and Chemban Vinod Jose, while Suriya appears in a cameo role. 
A spiritual successor of the identically-named 1986 Tamil film, it is the second 
installment in the Lokesh Cinematic Universe following Kaithi (2019).Vikram was released 
theatrically on 3 June 2022. The film received positive reviews from critics, with praise
for the performances of the cast, direction, writing, music, cinematography, action 
sequences and other technical aspects. Grossing over ₹420–500 crore (US$53–63 million), 
the film broke several records, becoming the second highest-grossing Tamil film and 
fifth highest-grossing Indian film of that year, and the fourth highest-grossing Tamil 
film of all time. It became the highest-grossing Tamil film in the state of Tamil Nadu, 
surpassing the collections of previous record holder Baahubali 2: The Conclusion (2017),
until the release of Ponniyin Selvan: I that year.`;
let txt2=`done`;
let txt3=`oombu`;
let isPlaying = false;
var i;
var typedContent;
var timer;
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
