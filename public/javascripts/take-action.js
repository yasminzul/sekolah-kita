var x = window.matchMedia("(max-width: 500px)")

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
  canvas.add(textbox);

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
  canvas.add(textbox);

//load science class
  $.getJSON('/images/Science-assets/scienceClass.json', function(scienceClass){
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
//end desktop


fabric.Image.fromURL('/images/Science-assets/Science-classroom-background.png', function(img){
 img.scaleToWidth(canvas.width);
 img.scaleToHeight(canvas.height);
 canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas));
});

$(document).ready(function(){

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
        canvas.add(textbox);
    });

});


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
