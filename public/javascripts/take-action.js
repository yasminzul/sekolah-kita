var x = window.matchMedia("(max-width: 500px)")

//INITIAL LOAD
//start mobile
if (x.matches){

  var canvas = new fabric.Canvas('customize-area', {
    width: 310,
    height: 310
  });

  var textbox = new fabric.Textbox('Pendidikan tanpa batasan!\nKetahui bagaimana dengan layari sekolahkita.my', {
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

  // Mobile overlay 
  $('.m-add-stk').click( function (){
    $('.add-stickers').addClass('overlay');
    $('.oa-wrapper .flex-item-left').css('background-color', '#0000005e');
  });

  $('.add-stickers').click( function (){
    $('.add-stickers').removeClass('overlay');
    $('.oa-wrapper .flex-item-left').css('background-color', '#00000000');
  });

  $('.m-choose-bg').click( function (){
      $('.choose-badge').addClass('overlay');
      $('body').css('overflow-y', 'hidden');
      $('.oa-wrapper .flex-item-left').css('background-color', '#0000005e');
  });

  $('.choose-badge').click( function (){
    $('.choose-badge').removeClass('overlay');
    $('body').css('overflow-y', 'scroll');
    $('.oa-wrapper .flex-item-left').css('background-color', '#00000000');
  });

}
//end mobile

//start desktop
else{

  var canvas = new fabric.Canvas('customize-area', {
    width: 620,
    height: 620
  });

  var textbox = new fabric.Textbox('Pendidikan tanpa batasan!\nKetahui bagaimana dengan layari sekolahkita.my', {
    left: 145,
    top: 60,
    width: 320,
    fontSize: 26,
    fontFamily: 'Archer Book',
    fontWeight: 'bold',
    borderColor: '#D1C7BA',
    cornerColor: '#D1C7BA',
    cornerSize: 10,
    transparentCorners: false
  });

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

}
//end desktop

changeCanvasBG('/images/Science-assets/Science-classroom-background.png')
canvasChange('/images/Science-assets/scienceClass.json');
canvas.add(textbox);

//END INITIAL LOAD

//WAITING FOR INTERACTIONS
$(document).ready(function(){

  $('#preload-science').click( function(){
    canvas.clear();
    const scienceJSON = '/images/Science-assets/scienceClass.json';
    const scienceBG = '/images/Science-assets/Science-classroom-background.png';
    changeCanvasBG(scienceBG)
    canvasChange(scienceJSON);
    canvas.add(textbox);
  });

  $('#preload-bamboo').click( function(){
    canvas.clear();
    const bambooJSON = '/images/Bamboo-assets/bambooClass.json';
    const bambooBG = '/images/Bamboo-assets/Bamboo-class-background.PNG';
    changeCanvasBG(bambooBG)
    canvasChange(bambooJSON);
    canvas.add(textbox);
  });

  $('#preload-nature').click( function(){
    canvas.clear();
    const natureJSON = '/images/Nature-assets/natureClass.json';
    const natureBG = '/images/Nature-assets/Nature-classroom-background.PNG';
    changeCanvasBG(natureBG)
    canvasChange(natureJSON);
    canvas.add(textbox);
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
        canvas.remove(canvas.getActiveObject());
    });

    $('#no-bg').click( function (){
      const image = new fabric.Image('');
      canvas.setBackgroundImage(image, canvas.renderAll.bind(canvas));
    });

    $('#add-text').click( function (){
      var newTextbox = new fabric.Textbox('Pendidikan tanpa batasan!\nKetahui bagaimana dengan layari sekolahkita.my', {
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

function changeCanvasBG(imageURL)
{
  fabric.Image.fromURL(imageURL, function(img){
   img.scaleToWidth(canvas.width);
   img.scaleToHeight(canvas.height);
   canvas.setBackgroundImage(img);
   canvas.requestRenderAll();
});
}



