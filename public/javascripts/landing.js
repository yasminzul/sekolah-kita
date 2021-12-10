const pixiapp = new window.PIXI.Application();
$('body').find('#landingView').append(pixiapp.view);

pixiapp.renderer.resize(window.innerWidth, window.innerHeight);
pixiapp.renderer.view.style.position = 'absolute';


//background
const bg = PIXI.Sprite.from('images/BG-header/BG-header.png');

bg.width = window.innerWidth;
bg.height = window.innerHeight;

pixiapp.stage.addChild(bg);

//load elements for both views
const elemNotebook = PIXI.Sprite.from('images/elem-notebook/elem-notebook@2x.png');
pixiapp.stage.addChild(elemNotebook);

const elemWeaving = PIXI.Sprite.from('images/weaving/weaving@2x.png');
pixiapp.stage.addChild(elemWeaving);

const elemSeruling = PIXI.Sprite.from('images/elem-seruling/elem-seruling@2x.png');
pixiapp.stage.addChild(elemSeruling);

const elemStationery = PIXI.Sprite.from('images/stationery/stationery@2x.png');
pixiapp.stage.addChild(elemStationery);



//mobile
var x = window.matchMedia("(orientation: portrait)")

if (x.matches)
{
  //resize and position elements
  elemSeruling.scale.set(1);
  elemSeruling.anchor.set(1,0);
  elemSeruling.position.set(pixiapp.screen.width-75,(pixiapp.screen.height/2)+150);

  elemStationery.scale.set(1);
  elemStationery.anchor.set(1,0);
  elemStationery.position.set(pixiapp.screen.width+25,pixiapp.screen.height-350);

  elemWeaving.scale.set(1.5);
  elemWeaving.anchor.set(0.5);
  elemWeaving.rotation = 3.14;
  elemWeaving.position.set(130,pixiapp.screen.height-120);

  elemNotebook.scale.set(1.05);
  elemNotebook.position.set(-180, pixiapp.screen.height/10);

  //interactions
  elemNotebook.interactive = true;
  elemNotebook.buttonMode = true;
  elemNotebook.on ('touchstart', function()
  {
      $('.pop-up').toggleClass("menu-open");
  } );

}

//desktop
else {

//load landscape only elements
const elemHeadpiece = PIXI.Sprite.from('images/elem-headpiece/elem-headpiece@2x.png');
pixiapp.stage.addChild(elemHeadpiece);

const elemPhone = PIXI.Sprite.from('images/elem-phone/elem-phone@2x.png');
pixiapp.stage.addChild(elemPhone);

// const containerNotebook = new PIXI.Container();
// pixiapp.stage.addChild(containerNotebook);

const insStart = PIXI.Sprite.from('images/ins-start.svg');
insStart.scale.set(0.7);
//containerNotebook.addChild(insStart);


//positions and scale
elemHeadpiece.scale.set(0.7);
elemHeadpiece.anchor.set(0.5);
elemHeadpiece.position.set(5,5);

elemNotebook.scale.set(0.7);
elemNotebook.anchor.set(0.5);
elemNotebook.x = pixiapp.screen.width / 2;
elemNotebook.y = (pixiapp.screen.height / 2) + 125;

// insStart.anchor.set(0.5);
// insStart.position.set(elemNotebook.width,0);


elemWeaving.scale.set(0.7);
elemWeaving.anchor.set(0.5);
elemWeaving.position.set(pixiapp.screen.width - 330,10);

elemPhone.scale.set(0.7);
elemPhone.anchor.set(0,1);
elemPhone.position.set(100,pixiapp.screen.height + 100);

elemSeruling.scale.set(0.7);
elemSeruling.anchor.set(0.5);
elemSeruling.position.set(pixiapp.screen.width - 150,pixiapp.screen.height - 230);

elemStationery.scale.set(0.7);
elemStationery.anchor.set(0.5);
elemStationery.position.set(pixiapp.screen.width - 300,pixiapp.screen.height - 100);


//interactions
elemNotebook.interactive = true;
elemNotebook.buttonMode = true;
elemNotebook.on ('mousedown', function()
{
    $('.pop-up').toggleClass("menu-open");
} );

elemHeadpiece.interactive = true;
elemHeadpiece.buttonMode = true;
elemHeadpiece.on ('pointerover', function()
{
    elemHeadpiece.position.x += 20;
    elemHeadpiece.position.y += 20;
} );

elemHeadpiece.on ('pointerout', function()
{
    elemHeadpiece.position.x -= 20;
    elemHeadpiece.position.y -= 20;
} );

elemHeadpiece.on ('mousedown', function()
{
    window.open("orang-asli","_self")
} );


elemSeruling.interactive = true;
elemSeruling.buttonMode = true;
elemSeruling.on ('pointerover', function()
{
    elemSeruling.position.y -= 20;
} );

elemSeruling.on ('pointerout', function()
{
    elemSeruling.position.y += 20;
} );

elemPhone.interactive = true;
elemPhone.buttonMode = true;

elemPhone.on ('mousedown', function()
{
    window.open("resources","_self")
} );


}
