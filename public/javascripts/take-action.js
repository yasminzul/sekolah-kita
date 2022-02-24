var x = window.matchMedia("(max-width: 500px)")

//INITIAL LOAD

let textcopy = [
  `This is my dream school, where all students are accepted and celebrated!
Find out how we can reimagine our schools at sekolahkita.my`,
  `This is my dream school, where students are prepared for a future they build together.
Find out how we can reimagine our schools at sekolahkita.my`,
  `This is my dream school, where our traditions and natural environment are our teachers.
Find out how we can reimagine our schools at sekolahkita.my`]

let textcopyBM = [
  `Inilah sekolah idaman saya, di mana semua murid diterima dan diraikan!
  Ketahui bagaimana kita boleh membayangkan semula sekolah kita di sekolahkita.my`,
  `Inilah sekolah idaman saya, di mana murid-murid akan dipersiapkan untuk masa hadapan yang akan dibina bersama.
  Ketahui bagaimana kita boleh membayangkan semula sekolah kita di sekolahkita.my`,
  `Inilah sekolah idaman saya, di mana tradisi dan persekitaran semulajadi adalah guru-guru kita.
  Ketahui bagaimana kita boleh membayangkan semula sekolah kita di sekolahkita.my`
]

if (x.matches){

    var textStyle = {
      left: 58,
      top: 20,
      width: 215,
      fontSize: 12,
      fontFamily: 'Archer Book',
      fontWeight: 'bold',
      borderColor: '#D1C7BA',
      cornerColor: '#D1C7BA',
      cornerSize: 10,
      transparentCorners: false
    }

}
else {

  var textStyle = {
    left: 130,
    top: 40,
    width: 380,
    fontSize: 22,
    fontFamily: 'Archer Book',
    fontWeight: 'bold',
    borderColor: '#D1C7BA',
    cornerColor: '#D1C7BA',
    cornerSize: 10,
    transparentCorners: false
  }
}


var textbox0 = new fabric.Textbox(textcopy[0], textStyle);
var textbox1 = new fabric.Textbox(textcopy[1], textStyle);
var textbox2 = new fabric.Textbox(textcopy[2], textStyle);

var teksbox0 = new fabric.Textbox(textcopyBM[0], textStyle);
var teksbox1 = new fabric.Textbox(textcopyBM[1], textStyle);
var teksbox2 = new fabric.Textbox(textcopyBM[2], textStyle);


//start mobile
if (x.matches){

  var canvasM = new fabric.Canvas('customize-area', {
    width: 310,
    height: 310
  });

  // Mobile overlay
  $('.choose-badge').css('display','hidden');

  $('.m-add-stk').click( function (){
    $('.add-stickers').addClass('overlay');
    $('.ta-wrapper .flex-item-left').css('background-color', '#0000005e');
  });

  $('.add-stickers').click( function (){
    $('.add-stickers').removeClass('overlay');
    $('.ta-wrapper .flex-item-left').css('background-color', '#00000000');
  });

  $('.m-choose-bg').click( function (){
      $('.choose-badge').addClass('overlay');
      $('body').css('overflow-y', 'hidden');
      $('.ta-wrapper .flex-item-left').css('background-color', '#0000005e');
  });

  $('.choose-badge').click( function (){
    $('.choose-badge').removeClass('overlay');
    $('body').css('overflow-y', 'scroll');
    $('.ta-wrapper .flex-item-left').css('background-color', '#00000000');
  });

  function canvasChangeM(filename)
  {
    //load science class
      $.getJSON(filename, function(scienceClass){
        //loop through scienceClass.json
        for (let i = 0; i < scienceClass.length; i++) {

        fabric.Image.fromURL(scienceClass[i].imgURL, function(oImg) {
          oImg.scaleX = 0.15;
          oImg.scaleY = 0.15;
          oImg.set({
            'top': scienceClass[i].top,
            'left': scienceClass[i].left,
            borderColor: '#D1C7BA',
            cornerColor: '#D1C7BA',
            cornerSize: 10,
            transparentCorners: false
        });
          canvasM.add(oImg);
        });
      }
      //end loop
              });
    //end load science class
  }

  function addImageToCanvasM(imageNameURL)
  {
      fabric.Image.fromURL(imageNameURL, function(oImg) {
        // oImg.scaleToWidth(85);
        oImg.scaleX = 0.15;
        oImg.scaleY = 0.15;
        oImg.set({
          'top': canvasM.height/2-40,
          'left': canvasM.width/2-40,
          borderColor: '#D1C7BA',
          cornerColor: '#D1C7BA',
          cornerSize: 10,
          transparentCorners: false
      });
        canvasM.add(oImg);
      });
  }

  changeCanvasBG('/images/Bamboo-assets/Bamboo-class-background.PNG')
  canvasChangeM('/images/Bamboo-assets/bambooClass_mobile.json');
  if ($("html").attr("lang") == 'ms')
  {
    canvasM.add(teksbox0);
  }
  else if ($("html").attr("lang") == 'en')
  {
    canvasM.add(textbox0);
  }

}
//end mobile

//start desktop
else{

  var canvasD = new fabric.Canvas('customize-area', {
    width: 620,
    height: 620
  });


function canvasChangeD(filename)
{
  //load science class
    $.getJSON(filename, function(scienceClass){
      //loop through scienceClass.json
      for (let i = 0; i < scienceClass.length; i++) {

      fabric.Image.fromURL(scienceClass[i].imgURL, function(oImg) {
        oImg.scaleX = 0.3;
        oImg.scaleY = 0.3;
        oImg.set({
          'top': scienceClass[i].top,
          'left': scienceClass[i].left,
          borderColor: '#D1C7BA',
          cornerColor: '#D1C7BA',
          cornerSize: 10,
          transparentCorners: false
      });
        canvasD.add(oImg);
      });
    }
    //end loop
            });
  //end load science class
}

function addImageToCanvasD(imageNameURL)
{
    fabric.Image.fromURL(imageNameURL, function(oImg) {
      // oImg.scaleToWidth(85);
      oImg.scaleX = 0.3;
      oImg.scaleY = 0.3;
      oImg.set({
        'top': canvasD.height/2-40,
        'left': canvasD.width/2-40,
        borderColor: '#D1C7BA',
        cornerColor: '#D1C7BA',
        cornerSize: 10,
        transparentCorners: false
    });
      canvasD.add(oImg);
    });
}

changeCanvasBG('/images/Bamboo-assets/Bamboo-class-background.PNG')
canvasChangeD('/images/Bamboo-assets/bambooClass.json');
if ($("html").attr("lang") == 'ms')
{
  canvasD.add(teksbox0);
}
else if ($("html").attr("lang") == 'en')
{
  canvasD.add(textbox0);
}

}
//end desktop


//END INITIAL LOAD

//WAITING FOR INTERACTIONS
$(document).ready(function(){

  if (x.matches)
  {

  $('#preload-science').click( function(){
    canvasM.clear();
    const scienceBG = '/images/Science-assets/Science-classroom-background.png';
    changeCanvasBG(scienceBG)
      const scienceJSON = '/images/Science-assets/scienceClass_mobile.json';
      canvasChangeM(scienceJSON);
      if ($("html").attr("lang") == 'ms')
      {
        canvasM.add(teksbox1);
      }
      else if ($("html").attr("lang") == 'en')
      {
        canvasM.add(textbox1);
      }
  });

  $('#preload-bamboo').click( function(){
    canvasM.clear();
    const bambooBG = '/images/Bamboo-assets/Bamboo-class-background.PNG';
    changeCanvasBG(bambooBG);
      const bambooJSON = '/images/Bamboo-assets/bambooClass_mobile.json';
      canvasChangeM(bambooJSON);
      if ($("html").attr("lang") == 'ms')
      {
        canvasM.add(teksbox0);
      }
      else if ($("html").attr("lang") == 'en')
      {
        canvasM.add(textbox0);
      }
  });

  $('#preload-nature').click( function(){
    canvasM.clear();
    const natureBG = '/images/Nature-assets/Nature-classroom-background.PNG';
    changeCanvasBG(natureBG);
      const natureJSON = '/images/Nature-assets/natureClass_mobile.json';
      canvasChangeM(natureJSON);
      if ($("html").attr("lang") == 'ms')
      {
        canvasM.add(teksbox2);
      }
      else if ($("html").attr("lang") == 'en')
      {
        canvasM.add(textbox2);
      }
  });

    $('.sticker-bg').click( function (){
        var imageSource = $('img', $(this)).attr('src');
        changeCanvasBG(imageSource);
    });

    $('.sticker').click( function (){
        var imageSource = $('img', $(this)).attr('src');
        addImageToCanvasM(imageSource);
    });

    $('.delete-sticker').click( function (){
      var selected = canvasM.getActiveObjects(),
      selGroup = new fabric.ActiveSelection(selected, {
        canvas: canvasM
      });
        if (selGroup) {
            selGroup.forEachObject(function(obj) {
              canvasM.remove(obj);
            });
          }
        canvasM.discardActiveObject().renderAll();
    });

    $('#no-bg').click( function (){
      changeCanvasBG('');
      canvasM.setBackgroundColor('#EAE8E3', canvasM.renderAll.bind(canvas));
    });

    $('.add-text').click( function (){
      var newTextbox = new fabric.Textbox('Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit', {
        left: 65,
        top: 28,
        width: 200,
        fontSize: 16,
        fontFamily: 'Archer Book',
        fontWeight: 'bold',
        borderColor: '#D1C7BA',
        cornerColor: '#D1C7BA',
        cornerSize: 10,
        transparentCorners: false
      });
      canvasM.add(newTextbox);
    });

  }

  //end mobile

  //start desktop

  else {
    $('#preload-science').click( function(){
      canvasD.clear();
      const scienceBG = '/images/Science-assets/Science-classroom-background.png';
      changeCanvasBG(scienceBG)
        const scienceJSON = '/images/Science-assets/scienceClass.json';
        canvasChangeD(scienceJSON);
        if ($("html").attr("lang") == 'ms')
        {
          canvasD.add(teksbox1);
        }
        else if ($("html").attr("lang") == 'en')
        {
          canvasD.add(textbox1);
        }
    });

    $('#preload-bamboo').click( function(){
      canvasD.clear();
      const bambooBG = '/images/Bamboo-assets/Bamboo-class-background.PNG';
      changeCanvasBG(bambooBG);
        const bambooJSON = '/images/Bamboo-assets/bambooClass.json';
        canvasChangeD(bambooJSON);
        if ($("html").attr("lang") == 'ms')
        {
          canvasD.add(teksbox0);
        }
        else if ($("html").attr("lang") == 'en')
        {
          canvasD.add(textbox0);
        }
    });

    $('#preload-nature').click( function(){
      canvasD.clear();
      const natureBG = '/images/Nature-assets/Nature-classroom-background.PNG';
      changeCanvasBG(natureBG);
        const natureJSON = '/images/Nature-assets/natureClass.json';
        canvasChangeD(natureJSON);
        if ($("html").attr("lang") == 'ms')
        {
          canvasD.add(teksbox2);
        }
        else if ($("html").attr("lang") == 'en')
        {
          canvasD.add(textbox2);
        }
    });

      $('.sticker-bg').click( function (){
          var imageSource = $('img', $(this)).attr('src');
          changeCanvasBG(imageSource);
      });

      $('.sticker').click( function (){
          var imageSource = $('img', $(this)).attr('src');
          addImageToCanvasD(imageSource);
      });

      $('.delete-sticker').click( function (){
        var selected = canvasD.getActiveObjects(),
        selGroup = new fabric.ActiveSelection(selected, {
          canvas: canvasD
        });
          if (selGroup) {
              selGroup.forEachObject(function(obj) {
                canvasD.remove(obj);
              });
            }
          canvasD.discardActiveObject().renderAll();
      });

      $('#no-bg').click( function (){
        changeCanvasBG('');
        canvasD.setBackgroundColor('#EAE8E3', canvasD.renderAll.bind(canvas));
      });

      $('.add-text').click( function (){
        var newTextbox = new fabric.Textbox('Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit', {
          left: 65,
          top: 28,
          width: 200,
          fontSize: 16,
          fontFamily: 'Archer Book',
          fontWeight: 'bold',
          borderColor: '#D1C7BA',
          cornerColor: '#D1C7BA',
          cornerSize: 10,
          transparentCorners: false
        });
        canvasD.add(newTextbox);
      });
  }


    var destinationCanvas =  document.getElementById("dwld-img");
    var sourceCanvas = document.querySelector("#customize-area");

      $('#share-img-close').click(function() {
        $('#share-img').toggleClass("menu-open");
      });

    $('.download-badge').click( function (){
      $('#share-img').toggleClass("menu-open");
      function convertCanvasToImage() {
        let image = new Image();
        image.src = sourceCanvas.toDataURL();
        return image;
      }

      let pnGImage = convertCanvasToImage();
      if (destinationCanvas.innerHTML == "")
      {
        destinationCanvas.appendChild(pnGImage);
      }
      else {
        var olddata = destinationCanvas.lastChild;
        destinationCanvas.removeChild(olddata);
        destinationCanvas.appendChild(pnGImage);
      }
    });


});
//END INTERACTIONS

//FUNCTIONS FOR BOTH VIEWS


function changeCanvasBG(imageURL)
{
  if (x.matches){
    fabric.Image.fromURL(imageURL, function(img){
     img.scaleToWidth(canvasM.width);
     img.scaleToHeight(canvasM.height);
     canvasM.setBackgroundImage(img);
     canvasM.requestRenderAll();
     });
  }

  else {
    fabric.Image.fromURL(imageURL, function(img){
     img.scaleToWidth(canvasD.width);
     img.scaleToHeight(canvasD.height);
     canvasD.setBackgroundImage(img);
     canvasD.requestRenderAll();
   });
  }

}
