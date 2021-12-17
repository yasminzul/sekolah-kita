$(document).ready(function(id) {
  $('button.menu-btn, button.close-btn').click(function() {
    $('.menu-nav').toggleClass("menu-open");
  });

  $('div.not-available, #coming-soon-close').click(function() {
    $('#coming-soon').toggleClass("menu-open");
  });

  $('#share-close, #share-open').click(function() {
    $('#share').toggleClass("menu-open");
  });

  $('#switch, #menu-switch').click(function() {
    if ($(this).is(':checked')) {
      $('.off').css("color", "#000");
      $('.on').css("color", "#D1C7BA");
      window.open("/","_self");
    } else {
      $('.off').css("color", "#D1C7BA");
      $('.on').css("color", "#000");
        window.open("en","_self")
    }
  });

});

function copytoclipboard() {
/* Get the text field */
var copyText = document.getElementById("myInput");

/* Select the text field */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */
 /* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.value);

var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

if ($('#switch, #menu-switch').is(':checked')) {
  $('.off').css("color", "#000");
  $('.on').css("color", "#D1C7BA");
}
else {
  $('.off').css("color", "#D1C7BA");
  $('.on').css("color", "#000");
}
