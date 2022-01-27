$(document).ready(function() {
  $('button.menu-btn, button.close-btn').click(function() {
    $('.menu-nav').toggleClass("menu-open");
  });

  $('div.not-available, #coming-soon-close').click(function() {
    $('#coming-soon').toggleClass("menu-open");
  });

  $('.score-wrapper').click(function() {
    $('#hunt-incomplete').toggleClass("menu-open");
  });

  $('.hunt-incomplete-close').click(function() {
    $('#hunt-incomplete').toggleClass("menu-open");
  });

  $('#access-denied-close, .not-available').click(function() {
    $('#access-denied').toggleClass("menu-open");
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

  $('#rec-1 .pop-btn').click(function() {
    $('#rec-1').toggleClass("menu-open");
  });

  $('#rec-2 .pop-btn').click(function() {
    $('#rec-2').toggleClass("menu-open");
  });

  $('#rec-3 .pop-btn').click(function() {
    $('#rec-3').toggleClass("menu-open");
  });

  $('#rec-4 .pop-btn').click(function() {
    $('#rec-4').toggleClass("menu-open");
  });

  $('#rec-5 .pop-btn').click(function() {
    $('#rec-5').toggleClass("menu-open");
  });

  $('#rec-6 .pop-btn').click(function() {
    $('#rec-6').toggleClass("menu-open");
  });

  $('#rec-7 .pop-btn').click(function() {
    $('#rec-7').toggleClass("menu-open");
  });

  $('#rec-8 .pop-btn').click(function() {
    $('#rec-8').toggleClass("menu-open");
  });

  $('#rec-9 .pop-btn').click(function() {
    $('#rec-9').toggleClass("menu-open");
  });

  $('#rec-10 .pop-btn').click(function() {
    $('#rec-10').toggleClass("menu-open");
  });

  $('#rec-11 .pop-btn').click(function() {
    $('#rec-11').toggleClass("menu-open");
  });

  $('#rec-12 .pop-btn').click(function() {
    $('#rec-12').toggleClass("menu-open");
  });

  var clueFound = window.location.hash.substr(1);
  if (clueFound == 'clue-1'){
      $('#rec-1').toggleClass("menu-open");
  }
  else if (clueFound == 'clue-2'){
      $('#rec-2').toggleClass("menu-open");
  }
  else if (clueFound == 'clue-3'){
        $('#rec-3').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-4'){
        $('#rec-4').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-5'){
        $('#rec-5').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-6'){
        $('#rec-6').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-7'){
        $('#rec-7').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-10'){
        $('#rec-10').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-11'){
        $('#rec-11').toggleClass("menu-open");
    }
    else if (clueFound == 'clue-12'){
        $('#rec-12').toggleClass("menu-open");
    }


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
