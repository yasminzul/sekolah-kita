var canvas = new fabric.Canvas('customize-area');

$(document).ready(function(){
    $(this).click( function (){
        var imageSource = $(this 'img').attr('src');
        console.log(imageSource);
        addImageToCanvas(imageSource);
    });
});

function addImageToCanvas(imageNameURL)
{
    fabric.Image.fromURL(imageNameURL, function(oImg) {
      canvas.add(oImg);
    });
}
