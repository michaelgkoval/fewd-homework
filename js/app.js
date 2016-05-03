$(document).ready(function() {
  $('header nav ul li:first-child').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
  $('header nav ul li').click(function(){
    $(this).parent().toggleClass('slideUp');
  });
});
});
