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
