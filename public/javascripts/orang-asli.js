const pixiapp = new window.PIXI.Application({ transparent: true });
$('#timeline').append(pixiapp.view);

//elements
const elemTimeline = PIXI.Sprite.from('/images/OAtimeline.PNG');
pixiapp.stage.addChild(elemTimeline);

//text elements
const textStyle = new PIXI.TextStyle({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 18,
    fill: '#000',
    align: 'center',
    wordWrap : true,
    wordWrapWidth: pixiapp.screen.width/2.5
});

let textArr = [
  'Tap on the left and right arrows to journey through history',
  '≈100,000 years ago: Modern humans start migrating out of Africa',
  '≈10,000-2,000 years ago: Earliest settlers arrive in the peninsula',
  '≈200CE: Emergence of Hindu and Buddhist kingdoms',
  '≈1200CE: Rise of Muslim Malay sultanates, including Melaka which was founded in 1402CE',
  '1511: Portuguese colonise Melaka',
  '1641: Dutch colonise Melaka',
  'Late 1700s-1957: British colonial period',
  '1941-1945: Japanese occupation during World War II',
  '1950s: Term “Orang Asli” first widely used',
  '1957: Malayan independence          1963: Formation of Malaysia',
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

  elemTimeline.scale.set(0.1);
  elemTimeline.anchor.set(0.5);
  elemTimeline.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 2.5)

  basicText.position.set(pixiapp.screen.width/ 2, pixiapp.screen.height - 50);

  //timeline animation
  animationTimeline = [
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width/100)*260, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width/100)*210, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width/100)*154, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width/100)*110, scale: 0.25},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: (pixiapp.screen.width/100)*31, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -(pixiapp.screen.width/100)*6, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -(pixiapp.screen.width/100)*50, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -(pixiapp.screen.width/100)*98, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -(pixiapp.screen.width/100)*135, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){ ease.add(
      elemTimeline,
      { x: -(pixiapp.screen.width/100)*175, scale: 0.32},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  }
  ];

}
//end mobile

//desktop
else {

pixiapp.renderer.resize(window.innerWidth/2, (window.innerHeight/100)*65);

elemTimeline.scale.set(0.2);
elemTimeline.anchor.set(0.5);
elemTimeline.position.set(pixiapp.screen.width, pixiapp.screen.height / 2.5)

basicText.position.set(pixiapp.screen.width/ 2, pixiapp.screen.height/ 2 + 200);

//timeline animation
animationTimeline = [
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*200, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*165, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*123, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*93, scale: 0.35},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*40, scale: 0.45},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: (pixiapp.screen.width/100)*8, scale: 0.45},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -(pixiapp.screen.width/100)*20, scale: 0.45},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -(pixiapp.screen.width/100)*60, scale: 0.45},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -(pixiapp.screen.width/100)*85, scale: 0.45},
    { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
  );
},
function(){ ease.add(
    elemTimeline,
    { x: -(pixiapp.screen.width/100)*115, scale: 0.45},
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
      else if (clickstate >= animationTimeline.length-1 && clickstate < 10)
      {
        clickstate += 1;
      }

      if (textCounter == 10)
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
      else if (clickstate >= animationTimeline.length && clickstate <= 10)
      {
        clickstate -= 1;

      }
      else if (clickstate == 0)
      {
        ease.add(
            elemTimeline,
            { x: pixiapp.screen.width, y:pixiapp.screen.height/2.5, scale: 0.2},
            { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
          );
          clickstate -= 1;
      }
    });
});
