var x = window.matchMedia("(max-width: 500px)")

//INITIAL LOAD

let textcopy = [
  `This is my dream school, where all students are accepted and celebrated!
Find out how we can reimagine our schools at sekolahkita.my`,
  `This is my dream school, where students are prepared for a future they build together.
Find out how we can reimagine our schools at sekolahkita.my`,
  `This is my dream school, where our traditions and natural environment are our teachers.
Find out how we can reimagine our schools at sekolahkita.my`]


//start mobile
if (x.matches){

  var canvas = new fabric.Canvas('customize-area', {
    width: 310,
    height: 310
  });

  var textStyle = {
    left: 65,
    top: 28,
    width: 215,
    fontSize: 14,
    fontFamily: 'Archer Book',
    fontWeight: 'bold',
    borderColor: '#D1C7BA',
    cornerColor: '#D1C7BA',
    cornerSize: 10,
    transparentCorners: false
  }

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

  function canvasChange(filename)
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
          canvas.add(oImg);
        });
      }
      //end loop
              });
    //end load science class
  }

  function addImageToCanvas(imageNameURL)
  {
      fabric.Image.fromURL(imageNameURL, function(oImg) {
        // oImg.scaleToWidth(85);
        oImg.scaleX = 0.15;
        oImg.scaleY = 0.15;
        oImg.set({
          'top': canvas.height/2-40,
          'left': canvas.width/2-40,
          borderColor: '#D1C7BA',
          cornerColor: '#D1C7BA',
          cornerSize: 10,
          transparentCorners: false
      });
        canvas.add(oImg);
      });
  }


}
//end mobile

//start desktop
else{

  var canvas = new fabric.Canvas('customize-area', {
    width: 620,
    height: 620
  });

var textStyle = {
  left: 130,
  top: 40,
  width: 380,
  fontSize: 26,
  fontFamily: 'Archer Book',
  fontWeight: 'bold',
  borderColor: '#D1C7BA',
  cornerColor: '#D1C7BA',
  cornerSize: 10,
  transparentCorners: false
}

function canvasChange(filename)
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
        canvas.add(oImg);
      });
    }
    //end loop
            });
  //end load science class
}

function addImageToCanvas(imageNameURL)
{
    fabric.Image.fromURL(imageNameURL, function(oImg) {
      // oImg.scaleToWidth(85);
      oImg.scaleX = 0.3;
      oImg.scaleY = 0.3;
      oImg.set({
        'top': canvas.height/2-40,
        'left': canvas.width/2-40,
        borderColor: '#D1C7BA',
        cornerColor: '#D1C7BA',
        cornerSize: 10,
        transparentCorners: false
    });
      canvas.add(oImg);
    });
}


}
//end desktop

var textbox0 = new fabric.Textbox(textcopy[0], textStyle);
var textbox1 = new fabric.Textbox(textcopy[1], textStyle);
var textbox2 = new fabric.Textbox(textcopy[2], textStyle);

changeCanvasBG('/images/Bamboo-assets/Bamboo-class-background.PNG')
canvasChange('/images/Bamboo-assets/bambooClass.json');
canvas.add(textbox0);

//END INITIAL LOAD

//WAITING FOR INTERACTIONS
$(document).ready(function(){

  $('#preload-science').click( function(){
    canvas.clear();
    const scienceJSON = '/images/Science-assets/scienceClass.json';
    const scienceBG = '/images/Science-assets/Science-classroom-background.png';
    changeCanvasBG(scienceBG)
    canvasChange(scienceJSON);
    canvas.add(textbox1);
  });

  $('#preload-bamboo').click( function(){
    canvas.clear();
    const bambooJSON = '/images/Bamboo-assets/bambooClass.json';
    const bambooBG = '/images/Bamboo-assets/Bamboo-class-background.PNG';
    changeCanvasBG(bambooBG)
    canvasChange(bambooJSON);
    canvas.add(textbox0);
  });

  $('#preload-nature').click( function(){
    canvas.clear();
    const natureJSON = '/images/Nature-assets/natureClass.json';
    const natureBG = '/images/Nature-assets/Nature-classroom-background.PNG';
    changeCanvasBG(natureBG)
    canvasChange(natureJSON);
    canvas.add(textbox2);
  });

    $('.sticker-bg').click( function (){
        var imageSource = $('img', $(this)).attr('src');
        changeCanvasBG(imageSource);
    });

    $('.sticker').click( function (){
        var imageSource = $('img', $(this)).attr('src');
        addImageToCanvas(imageSource);
    });

    $('#delete-sticker').click( function (){
      var selected = canvas.getActiveObjects(),
      selGroup = new fabric.ActiveSelection(selected, {
        canvas: canvas
      });
        if (selGroup) {
            selGroup.forEachObject(function(obj) {
              canvas.remove(obj);
            });
          }
        canvas.discardActiveObject().renderAll();
    });

    $('#no-bg').click( function (){
      changeCanvasBG('');
      canvas.setBackgroundColor('#EAE8E3', canvas.renderAll.bind(canvas));
    });

    $('#add-text').click( function (){
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
      canvas.add(newTextbox);
    });

    $('#download-badge').click( function (){
        $("#customize-area").get(0).toBlob(function(blob){
		        saveAs(blob, "sekolahkita-badge.png");
	         });
    });

});
//END INTERACTIONS

//FUNCTIONS FOR BOTH VIEWS


function changeCanvasBG(imageURL)
{
  fabric.Image.fromURL(imageURL, function(img){
   img.scaleToWidth(canvas.width);
   img.scaleToHeight(canvas.height);
   canvas.setBackgroundImage(img);
   canvas.requestRenderAll();
});
}
