var cities = ["NYC", "SF", "LA", "ATX", "SYD", "GB"];
$(document).ready(function() {

//for loop
  for(i=0;i<cities.length;i++) {

//when the user changes the city type in the option value
    $('#city-type').append('<option value="' + cities[i] + '">' + cities [i] + '</option>');
  }

$('form').on('change'), 'city-type', function (){
  var city = $('#city-type').val();

//if the user selectes New York in the dropdown show New York backgroud
  if(city == 'NYC'){
    $('body').attr('class', 'nyc');
  }

//if the user selectes San Francisco in the dropdown show San Francisco backgroud
  else if (city == 'SF') {
      $('body').attr('class','sf');
    }

//if the user selectes Los Angeles in the dropdown show Los Angeles backgroud
  else if (city == 'LA') {
      $('body').attr('class','la');
    }

//if the user selectes Austin in the dropdown show Austin backgroud
  else if (city == 'ATX') {
      $('body').attr('class','austin');
    }

//if the user selectes sydney in the dropdown show sydney backgroud
  else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }

  //if the user selectes Green Bay in the dropdown show Green Bay backgroud
  else if (city == 'GB') {
      $('body').attr('class','gb');
    }
}
});
