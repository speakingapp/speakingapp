var savol=[
    "Do you like outdoor activities?",
    "What kind of outdoor sports do you like?",
    "How much time do you spend outdoors every week?",
    "Is driving to work popular in your country?",
    "Is it easy to catch a bus in your country?",
    "What’s the most popular means of transportation in your hometown?",
    "<p>Describe your experience with an illness or injury. You should say:</p><ul><li><p>What it was</p></li><li><p>When it happened</p></li><li><p>How you handled it</p></li></ul><p>and say how do you feel about it now.</p>",
    "How can people improve their health?",
    "Do elderly people exercise much in your country?",
    "Do you think all illnesses can be prevented?",
    "Do you think that illnesses will be less common in the future?",
    "Do you think healthcare should be free?"
  ]

var quizprogress=document.querySelectorAll("#qui-progress")
var part3progress=document.querySelectorAll("#part3-progress")

var que=document.getElementById("quiz")
var que_id=document.getElementById("que-id")
var timer=document.getElementById("timer")
var beep=document.getElementById("beep")
var audio1=document.getElementById("audio1")  
var audio2=document.getElementById("audio2")
var audio3=document.getElementById("audio3")
var audio4=document.getElementById("audio4")
var audio5=document.getElementById("audio5")
var audio6=document.getElementById("audio6")
var audio7=document.getElementById("audio7")
var audio8=document.getElementById("audio8")
var audio9=document.getElementById("audio9")
var audio10=document.getElementById("audio10")
var audio11=document.getElementById("audio11")
var audio12=document.getElementById("audio12")
var audio13=document.getElementById("audio13")
var audio14=document.getElementById("audio14")
var audio15=document.getElementById("audio15")


//Step1
function step0() {
$("main").show()
quizprogress[0].classList.add("bg-blue-400") 
startRecording();
que.innerHTML=savol[0];
que_id.innerHTML=1
audio1.play();
audio1.addEventListener("ended", startCountdown)

// Define a function to start the 5-second countdown
function startCountdown() {
$("#attention").hide()
$("#holdon").show()
let count = 5;
timer.innerHTML += `00:0${count}`;
const interval = setInterval(() => {
count--;
timer.innerHTML = `00:0${count}`;
if (count <= 0) {
 beep.play();
 clearInterval(interval);
 start30SecondCountdown();
}
}, 1000);
}

// Define a function to start the 30-second countdown
function start30SecondCountdown() {
 $("#holdon").hide()
 $("#status").show()
 let count = 30;
 timer.innerHTML = ` 00:${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:${count}`;
   if (count <= 0) {
     timer.innerHTML="";
     clearInterval(interval);
     step1();

   }
 }, 1000);
}

}

//Step1 fun
function step1(){
$("#attention").show()
$("#status").hide()
quizprogress[1].classList.add("bg-blue-400") 
que.innerHTML=savol[1];
que_id.innerHTML=2
audio2.play();
audio2.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
      
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {	
         timer.innerHTML="";
         clearInterval(interval);
         step2();
 
       }
     }, 1000);
   }
}


//step2

function step2(){
$("#attention").show()
$("#status").hide()
quizprogress[2].classList.add("bg-blue-400") 
que.innerHTML=savol[2];
que_id.innerHTML=3
audio3.play();
audio3.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step3();
 
       }
     }, 1000);
   }
}

//step3

function step3(){
$("#attention").show()
$("#status").hide()
quizprogress[3].classList.add("bg-blue-400") 
que.innerHTML=savol[3];
que_id.innerHTML=4
audio4.play();
audio4.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step4();
 
       }
     }, 1000);
   }
}


//step4

function step4(){
$("#attention").show()
$("#status").hide()
quizprogress[4].classList.add("bg-blue-400") 
que.innerHTML=savol[4];
que_id.innerHTML=5
audio5.play();
audio5.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count} `;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step5();
 
       }
     }, 1000);
   }
}


//step5

function step5(){
$("#attention").show()
$("#status").hide()
quizprogress[5].classList.add("bg-blue-400") 
que.innerHTML=savol[5];
que_id.innerHTML=6
audio6.play();
audio6.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         part2();
 
       }
     }, 1000);
   }
}


//part2 intro

function part2(){
$("#progress_part1").addClass("hidden")
$("#progress_part2").removeClass("hidden")
$("#attention").show()
$("#status").hide()
que.innerHTML='Part 2. In this part you will be given one minute for preparation. You will have 2 minutes to speak.';
que_id.innerHTML=''
audio7.play();
audio7.addEventListener("ended", step6);
}

//step6

function step6(){
que.innerHTML=savol[6];
que_id.innerHTML=7
audio8.play();
audio8.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 60;
 timer.innerHTML += `00:${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 120;
     timer.innerHTML = ` ${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         part3();
       }
     }, 1000);
   }
}


//part3 intro

function part3(){
$("#progress_part2").addClass("hidden")
$("#progress_part3").removeClass("hidden")
$("#attention").show()
$("#status").hide()
que.innerHTML='Part 3. In this part you will be given 5 seconds for preparation. You will have 30 seconds to speak.';
que_id.innerHTML=''
audio9.play();
audio9.addEventListener("ended", step7);
}


//step7


function step7(){
part3progress[0].classList.add("bg-blue-400") 
que.innerHTML=savol[7];
que_id.innerHTML=8
audio10.play();
audio10.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step8();
 
       }
     }, 1000);
   }
}




//step8

function step8(){
part3progress[1].classList.add("bg-blue-400")
$("#attention").show()
$("#status").hide()
que.innerHTML=savol[8];
que_id.innerHTML=9
audio11.play();
audio11.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step9();
 
       }
     }, 1000);
   }
}


//step9

function step9(){
part3progress[2].classList.add("bg-blue-400")
$("#attention").show()
$("#status").hide()
que.innerHTML=savol[9];
que_id.innerHTML=10
audio12.play();
audio12.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step10();
 
       }
     }, 1000);
   }
}


//step10

function step10(){
part3progress[3].classList.add("bg-blue-400")
$("#attention").show()
$("#status").hide()
que.innerHTML=savol[10];
que_id.innerHTML=11
audio13.play();
audio13.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
         timer.innerHTML="";
         clearInterval(interval);
         step11();
 
       }
     }, 1000);
   }
}


//step11


function step11(){
part3progress[4].classList.add("bg-blue-400")
$("#attention").show()
$("#status").hide()
que.innerHTML=savol[11];
que_id.innerHTML=12
audio14.play();
audio14.addEventListener("ended", startCountdown);
//countdown 5 sec
function startCountdown() {
 $("#attention").hide()
 $("#holdon").show()
 let count = 5;
 timer.innerHTML += `00:0${count}`;
 const interval = setInterval(() => {
   count--;
   timer.innerHTML = `00:0${count}`;
   if (count <= 0) {
     beep.play();
     clearInterval(interval);
     start30SecondCountdown();
   }
 }, 1000);
}

 // Define a function to start the 30-second countdown
 function start30SecondCountdown() {
     $("#holdon").hide()
     $("#status").show()
     let count = 30;
     timer.innerHTML = ` 00:${count}`;
     const interval = setInterval(() => {
       count--;
       timer.innerHTML = `00:${count}`;
       if (count <= 0) {
        $("#holdon").hide()
        $("#status").show()
         timer.innerHTML="";
         clearInterval(interval);
         examEnd();
 
       }
     }, 1000);
   }
}

function examEnd(){
$("#attention").show()
$("#status").hide()
audio15.play();
que.innerHTML='This is the end of Speaking Test';
que_id.innerHTML='';
audio15.addEventListener("ended",function(){
 stopRecording();
 setTimeout(()=>{
     
 }, 45000)

});		
}
