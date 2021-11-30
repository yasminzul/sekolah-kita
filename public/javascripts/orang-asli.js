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
const textStyle = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 48,
    fill: 'deepskyblue',
});

let textArr = [
  'text 1', 
  'text 2', 
  'text 3', 
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
]

textCounter = 0;

let basicText = new PIXI.Text(textArr[0], textStyle);


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

     document.getElementById("timeline-prev").disabled = true;

    $('#timeline-next').click( function (){  

      textCounter = (textCounter + 1) % textArr.length;

        basicText.text = textArr[textCounter];
        
      if (textCounter == 0) {
        document.getElementById("timeline-prev").disabled = true;
      } else if (textCounter >= 0) {
        document.getElementById("timeline-prev").disabled = false;
      }

      if ( clickstate >= -1 && clickstate < animationTimeline.length-1)
      {
        clickstate += 1;
        animationTimeline[clickstate]();

      } 
      else if (textCounter == 11) 
      {
         document.getElementById("timeline-next").disabled = true;
      }
      else if (clickstate >= animationTimeline.length-1 && clickstate < 11)
      {
        clickstate += 1;
       
      } 
    });

    $('#timeline-prev').click( function (){

      textCounter = (textCounter - 1) % textArr.length;
      
        basicText.text = textArr[textCounter];
        console.log(textCounter);

      document.getElementById("timeline-next").disabled = false;

      if (textCounter <= 0) {
        document.getElementById("timeline-prev").disabled = true;
      }

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
