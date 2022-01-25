$(document).ready(function(id) {
  $('button.menu-btn, button.close-btn').click(function() {
    $('.menu-nav').toggleClass("menu-open");
  });

  $('div.not-available, #coming-soon-close').click(function() {
    $('#coming-soon').toggleClass("menu-open");
  });

  $('#hunt-complete-close').click(function() {
    $('#hunt-complete').toggleClass("menu-open");
  });

  $('#hunt-incomplete-close').click(function() {
    $('#hunt-incomplete').toggleClass("menu-open");
  });

  $('#class-start-close').click(function() {
    $('#class-start').toggleClass("menu-open");
  });

  $('#score-total-close').click(function() {
    $('#score-total').toggleClass("menu-open");
  });

  $('#share-close, #share-open').click(function() {
    $('#share').toggleClass("menu-open");
  });

  // $('.clue').click(function() {
  //   if (currScore > 1 && currScore < 12)
  //   {
  //     $('#hunt-incomplete').toggleClass("menu-open");
  //   }
  //   else if (currScore == 1)
  //   {
  //     $('#hunt-complete').toggleClass("menu-open");
  //   }
  //   else (currScore == 12)
  //   {
  //     $('#score-total').toggleClass("menu-open");
  //   }
  // });

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

// Meet the teacher 

// $('#teacher-01').click(function(){
//   $('.hero-content').animate({scrollTop:$('#hero-1').position().top}, 'slow');
//   // $('#teacher-01').toggleClass('focus'); 
// });

// $('#teacher-02').click(function(){
//   $('.hero-content').animate({scrollTop:$('#hero-2').position().top}, 'slow');
//   // $('#teacher-02').toggleClass('focus');
// });

// $('#teacher-03').click(function(){
//   $('.hero-content').animate({scrollTop:$('#hero-3').position().top}, 'slow');
//   // $('#teacher-03').toggleClass('focus');
// });

