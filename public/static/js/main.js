//parts and overlay

$("#part_trans").click(()=>{
  $(".overlay").removeClass("hidden")
})

$("#show_part1").click(()=>{
  $("#part1").show()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").hide()
  $(".overlay").addClass("hidden")
}) 



$("#show_part2").click(()=>{
  $("#part1").hide()
 $("#part2").show()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").hide()
  $(".overlay").addClass("hidden")
})


$("#show_part3").click(()=>{
  $("#part1").hide()
 $("#part2").hide()
  $("#part3").show()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").hide()
  $(".overlay").addClass("hidden")
})



$("#show_part4").click(()=>{
  $("#part1").hide()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").show()
  $("#part5").hide()
  $("#result").hide()
  $(".overlay").addClass("hidden")
})


$("#show_part5").click(()=>{
  $("#part1").hide()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").show()
  $("#result").hide()
  $(".overlay").addClass("hidden")
})

$("#show_result").click(()=>{
  $("#part1").hide()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").show()
  $(".overlay").addClass("hidden")
})


function showResultPage(){
   $("#part1").hide()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").show()
}


//Submit btn alert
$("#submit-btn").click(()=>{
$(".alert-container").removeClass("hidden")
})

$("#notsure").click(function(){
  $(".alert-container").addClass("hidden")
})



$("#sure").click(function(){
  $(".alert-container").addClass("hidden")
  $("#part1").hide()
 $("#part2").hide()
  $("#part3").hide()
  $("#part4").hide()
  $("#part5").hide()
  $("#result").show()
  $("#show_result").removeClass("hidden")
  $("#submit-btn").hide()
  $("#countdown").hide()
  checkReadingScore()
})




//Countdown



function startCountdown() {
  // Set the target time to 1 hour from now
  const targetTime = new Date().getTime() + 60 * 60 * 1000;

  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      hours + "0:" + minutes + ":" + seconds + "";

    if (distance < 0) {
      clearInterval(countdown);
      $(".alert-timer-overlay").removeClass("hidden")
    }
  }, 1000); // Update every second
}


startCountdown()

$("#alert-check").click(()=>{
  showResultPage()
  checkReadingScore()
})