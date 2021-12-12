$(document).ready(function(id) {
  $('button.menu-btn').click(function() {
    $('.menu-nav').toggleClass("menu-open");
  });

  $('button.close-btn').click(function() {
    $('.menu-nav').toggleClass("menu-open");
  });

  $('div.not-available').click(function() {
    $('.pop-up').toggleClass("menu-open");
  });

  $('.pop-btn').click(function() {
    $('.pop-up').toggleClass("menu-open");
  });

});

function changeText(id){
  
  if ($('#'+id).is(':checked')) {
    $('.off').css("color", "#000");
    $('.on').css("color", "#D1C7BA");
  }else{
    $('.off').css("color", "#D1C7BA");
    $('.on').css("color", "#000");
  }
}



