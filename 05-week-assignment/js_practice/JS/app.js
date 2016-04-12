$(document).ready(function(){


  // alert("Wait, don't leave this page yet. Click here for a special offer!")
  $("h1").click(
    function(){
      alert("You clicked the headline")
    }
  )

  // var color = prompt ("What Color?")
  // console.log(color)

  // color = "black"
  // console.log(color)

  var firstNum = 1
  var secondNum = 1
  var answer = firstNum * secondNum
  console.log("your total is: ")
  // console.log(answer)
  console.log(answer)

  if(answer == 1 ){
    console.log("whoohoo! The answer is 1!!!")
  }

  var lightSwitch = true

  if( lightSwitch == true ) {
    alert("The lights are on")
  }else {
    alert("The lights are OFF")
  }


});
