$(document).ready(function() {
  $('header nav ul li:first-child').click(function(){
    $("#hamburger").toggleClass("slideDown");
  });
  $('header nav ul li a').click(function(){
    console.log("hello world");
    $("#hamburger").removeClass('slideDown');
    });
});
