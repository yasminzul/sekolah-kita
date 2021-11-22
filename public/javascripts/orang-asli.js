const pixiapp = new window.PIXI.Application({backgroundColor: 0xffffff});
//$('body').append(pixiapp.view);
$('#timeline').append(pixiapp.view);

pixiapp.renderer.resize(window.innerWidth/2, (window.innerHeight/100)*45);
// pixiapp.renderer.view.style.position = 'absolute';
// pixiapp.renderer.view.style.zIndex = '-10';

//elements
const elemTimeline = PIXI.Sprite.from('images/Chapter1Timeline.PNG');
elemTimeline.scale.set(0.15);
pixiapp.stage.addChild(elemTimeline);

elemTimeline.anchor.set(0.5);
elemTimeline.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 2)


//text elements
const basicText = new PIXI.Text("Hello World");

basicText.x = 50;
basicText.y = 250;

pixiapp.stage.addChild(basicText);

//timeline animation
const ease = new Ease.Ease();
const animationTimeline = [
function(){ ease.add(
    elemTimeline,
    { x: pixiapp.screen.width + 280, scale: 0.32},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: pixiapp.screen.width, scale: 0.32},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: pixiapp.screen.width - 200, scale: 0.32},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: pixiapp.screen.width - 420, scale: 0.32},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -120, y: pixiapp.screen.height - 170, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
}
]

var clickstate = -1;

$(document).ready(function(){

    $('#timeline-next').click( function (){
      if ( clickstate >= -1 && clickstate < animationTimeline.length-1)
      {
        clickstate += 1;
        animationTimeline[clickstate]();
      }
      else if (clickstate >= animationTimeline.length-1 && clickstate < 11)
      {
        clickstate += 1;
      }
    });

    $('#timeline-prev').click( function (){
      if ( clickstate > 0 && clickstate < animationTimeline.length)
      {
        clickstate -= 1;
        animationTimeline[clickstate]();
      }
      else if (clickstate >= animationTimeline.length && clickstate <= 11)
      {
        clickstate -= 1;
      }
      else if (clickstate == 0)
      {
        ease.add(
            elemTimeline,
            { x: pixiapp.screen.width/2, y:pixiapp.screen.height/2, scale: 0.15},
            { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
          );
          clickstate -= 1;
      }
    });
});
