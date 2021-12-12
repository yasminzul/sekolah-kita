const pixiapp = new window.PIXI.Application({ transparent: true });
//$('body').append(pixiapp.view);
$('#timeline').append(pixiapp.view);

pixiapp.renderer.resize(window.innerWidth/2, (window.innerHeight/100)*100);
// pixiapp.renderer.view.style.position = 'absolute';
// pixiapp.renderer.view.style.zIndex = '-10';

//elements
const elemTimeline = PIXI.Sprite.from('images/Chapter1Timeline.PNG');
elemTimeline.scale.set(0.15);
pixiapp.stage.addChild(elemTimeline);

elemTimeline.anchor.set(0.5);
elemTimeline.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 4)


//text elements
const textStyle = new PIXI.TextStyle({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 20,
    fill: '#000',
    align: 'center',
    wordWrap : true,
    wordWrapWidth: 350
});

let textArr = [
  'A brief history of the Malay Peninsula',
  '≈100,000 years ago: Modern humans start migrating out of Africa',
  '≈10,000-2,000 years ago: Earliest settlers arrive in the peninsula',
  '≈200CE: Emergence of Hindu and Buddhist kingdoms',
  '≈1200CE: Rise of Muslim Malay sultanates, including Melaka which was founded in 1402CE',
  '1511: Portuguese colonise Melaka',
  '1641: Dutch colonise Melaka',
  'Late 1700s-1957: British colonial period',
  '1941-1945: Japanese occupation during World War II',
  '1950s: Term “Orang Asli” first widely used',
  '1957: Malayan independence',
  '1963: Formation of Malaysia',
]

textCounter = 0;

let basicText = new PIXI.Text(textArr[0], textStyle);

basicText.position.set(pixiapp.screen.width / 2 - 155, pixiapp.screen.height/ 2)

// basicText.x = 50;
// basicText.y = 500;

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
    { x: -120, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
}
]

var clickstate = -1;

//click prev + next button
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
            { x: pixiapp.screen.width/2, y:pixiapp.screen.height/4, scale: 0.15},
            { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
          );
          clickstate -= 1;
      }
    });
});
