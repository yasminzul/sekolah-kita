$(document).ready(function() {
  // $('#back-btn').click(function() {
  //   history.back();
  // });

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

  $('#access-denied-close, .not-available, .access-denied').click(function() {
    $('#access-denied').toggleClass("menu-open");
  });

  $('#class-start-close').click(function() {
    $('#class-start').toggleClass("menu-open");
  });

  $('#score-total-close').click(function() {
    $('#score-total').toggleClass("menu-open");
  });

  $('#share-close, .share-open').click(function() {
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

      //long logic for switching malay-eng
      if ($("html").attr("id") == 'c01')
      {
        window.open("/bab1","_self");
      }

      else if ($("html").attr("id") == 'c02')
      {
        window.open("/bab2","_self");
      }

      else if ($("html").attr("id") == 'c03')
      {
        window.open("/bab3","_self");
      }

      else if ($("html").attr("id") == 'c04')
      {
        window.open("/bab4","_self");
      }

      else if ($("html").attr("id") == 'c05')
      {
        window.open("/bab5","_self");
      }

      else if ($("html").attr("id") == 'oa')
      {
        window.open("/orang-asli","_self");
      }

      else if ($("html").attr("id") == 'cred')
      {
        window.open("/projek","_self");
      }

      else if ($("html").attr("id") == 'res')
      {
        window.open("/pusat-sumber","_self");
      }

      else if ($("html").attr("id") == 'ta')
      {
        window.open("/ambil-tindakan","_self");
      }

      else
      {
          window.open("/","_self");
      }


    } else {
      $('.off').css("color", "#D1C7BA");
      $('.on').css("color", "#000");

      if ($("html").attr("id") == 'c01')
      {
        window.open("/en/chapter1","_self");
      }

      else if ($("html").attr("id") == 'c02')
      {
        window.open("/en/chapter2","_self");
      }

      else if ($("html").attr("id") == 'c03')
      {
        window.open("/en/chapter3","_self");
      }

      else if ($("html").attr("id") == 'c04')
      {
        window.open("/en/chapter4","_self");
      }

      else if ($("html").attr("id") == 'c05')
      {
        window.open("/en/chapter5","_self");
      }

      else if ($("html").attr("id") == 'oa')
      {
        window.open("/en/orang-asli","_self");
      }

      else if ($("html").attr("id") == 'cred')
      {
        window.open("/en/about","_self");
      }

      else if ($("html").attr("id") == 'res')
      {
        window.open("/en/resources","_self");
      }

      else if ($("html").attr("id") == 'ta')
      {
        window.open("/en/take-action","_self");
      }

      else
      {
          window.open("/en","_self");
      }

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
