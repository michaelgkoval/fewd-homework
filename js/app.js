$(document).ready(function() {

//targets the the hamburger id in the html and has the hamburger menu slide doown//
  $('header nav ul li:first-child').click(function(){
    $("#hamburger").toggleClass("slideDown");
  });
//targets the a tags in the hamurger menu when clicked it remove the slide down class.//
  $('header nav ul li a').click(function(){
    $("#hamburger").removeClass('slideDown');
  });
//if the user clicks on the hero image it will trigger my favorite product manager quote.//
  $( "#hero" ).click(function() {
      alert( "A great product manager has the brain of an engineer, the heart of a designer, and the speech of a diplomat. - Deep Nishar, UX at Linkedin" );
    });

});
