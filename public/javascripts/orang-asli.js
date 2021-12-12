const pixiapp = new window.PIXI.Application({ transparent: true });
$('#timeline').append(pixiapp.view);

//elements
const elemTimeline = PIXI.Sprite.from('images/OATimeline.PNG');
pixiapp.stage.addChild(elemTimeline);

//text elements
const textStyle = new PIXI.TextStyle({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 20,
    fill: '#000',
    align: 'center',
    wordWrap : true,
    wordWrapWidth: pixiapp.screen.width - 100
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

basicText.anchor.set(0.5);
pixiapp.stage.addChild(basicText);

const ease = new Ease.Ease();
let animationTimeline = [];


var x = window.matchMedia("(orientation: portrait)")

//mobile
if (x.matches)
{

  pixiapp.renderer.resize(window.innerWidth, window.innerHeight/2);

  elemTimeline.scale.set(0.07);
  elemTimeline.anchor.set(0.5);
  elemTimeline.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 4)

  basicText.position.set(pixiapp.screen.width/ 2, pixiapp.screen.height/ 2 + 100);

  //timeline animation
  animationTimeline = [
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width*2) + 20, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width*2) - 250, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width*2) - 525, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: pixiapp.screen.width - 30, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: 275, scale: 0.35},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: 25, scale: 0.5},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -220, scale: 0.5},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -pixiapp.screen.width + 220, scale: 0.5},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -pixiapp.screen.width + 50, scale: 0.5},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -pixiapp.screen.width - 235, scale: 0.5},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  }
  ];

}
//end mobile

//desktop
else {

pixiapp.renderer.resize(window.innerWidth/2, (window.innerHeight/100)*100);

elemTimeline.scale.set(0.1);
elemTimeline.anchor.set(0.5);
elemTimeline.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 4)

basicText.position.set(pixiapp.screen.width/ 2, pixiapp.screen.height/ 2 + 100);

//timeline animation
animationTimeline = [
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width*2) + 20, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width*2) - 250, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width*2) - 525, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: pixiapp.screen.width - 30, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: 275, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: 25, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -220, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -pixiapp.screen.width + 220, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -pixiapp.screen.width + 50, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -pixiapp.screen.width - 235, scale: 0.5},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
}
];

}

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
      else if (clickstate >= animationTimeline.length-1 && clickstate < 11)
      {
        clickstate += 1;
      }

      if (textCounter == 11)
      {
         document.getElementById("timeline-next").disabled = true;
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
            { x: pixiapp.screen.width/2, y:pixiapp.screen.height/4, scale: 0.1},
            { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
          );
          clickstate -= 1;
      }
    });
});
