const pixiapp = new window.PIXI.Application({
  transparent: true,
  resizeTo: window});
$('#landingView').append(pixiapp.view);

const bg = PIXI.Texture.fromImage('images/BG-header/BG-header@2x.png');
pixiapp.stage.addChild(bg);


//load elements for both views
const elemStationery = PIXI.Sprite.from('images/stationery/stationery@2x.png');

var x = window.matchMedia("(orientation: portrait)")

//mobile
if (x.matches)
{
  //resize and position elements
  const elemNotebook = PIXI.Sprite.from('images/elem-notebook/elem-notebook@2x.png');
  const elemWeaving = PIXI.Sprite.from('images/weaving/weaving@2x.png');
  const elemSeruling = PIXI.Sprite.from('images/elem-seruling/elem-seruling@2x.png');

  pixiapp.stage.addChild(elemNotebook);
  elemNotebook.scale.set(0.48);
  elemNotebook.position.set(-100, pixiapp.screen.height/10.25);

  pixiapp.stage.addChild(elemWeaving);
  elemWeaving.scale.set(0.5);
  elemWeaving.anchor.set(0.5);
  elemWeaving.rotation = 3.14;
  elemWeaving.position.set(130,pixiapp.screen.height-20);

  pixiapp.stage.addChild(elemSeruling);
  elemSeruling.scale.set(0.5);
  elemSeruling.anchor.set(1,0);
  elemSeruling.position.set(pixiapp.screen.width-50,(pixiapp.screen.height/2)+80);

  pixiapp.stage.addChild(elemStationery);
  elemStationery.scale.set(0.5);
  elemStationery.anchor.set(0.5);
  elemStationery.position.set(pixiapp.screen.width-45,pixiapp.screen.height+20);


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
const insStart = PIXI.Sprite.from('images/ins-start.svg');

const loader = PIXI.Loader.shared;
loader.add('phone','images/Animated-sprites/spritesheet-phone.json');
loader.add('notebook','images/Animated-sprites/spritesheet-notebookHover.json')
loader.add('headpiece','images/Animated-sprites/spritesheet-headpiece.json');
loader.add('flute','images/Animated-sprites/spritesheet-flute.json')
loader.load(setup);

function setup(loader, resources)
{
  //notebook animation
  const notebookHTextures = [];
  for (let i=0; i < 7; i++)
  {
    const notebookHTexture = PIXI.Texture.from(`NOTEBOOK_0000${i}.png`);
    notebookHTextures.push(notebookHTexture);
  }

  const notebookHSprite = new PIXI.AnimatedSprite(notebookHTextures);
  notebookHSprite.scale.set(0.7);
  notebookHSprite.anchor.set(0.5);
  notebookHSprite.angle = 3.5;
  notebookHSprite.position.set(pixiapp.screen.width / 2, (pixiapp.screen.height / 2) + 125);
  pixiapp.stage.addChild(notebookHSprite);
  notebookHSprite.loop = false;

  notebookHSprite.interactive = true;
  notebookHSprite.buttonMode = true;

  notebookHSprite.on ('mousedown', function()
  {
      $('.pop-up').toggleClass("menu-open");
  } );

  notebookHSprite.on ('pointerover', function()
  {
      notebookHSprite.animationSpeed = 1;
      notebookHSprite.play();
  } );

  notebookHSprite.on ('pointerout', function()
  {
      notebookHSprite.animationSpeed = -2;
      notebookHSprite.play();
  } );

  //headpiece animation


  //phone animation
  const elemPhoneTextures = [];
  for (let i=0; i < 74; i++)
  {
    const phoneTexture = PIXI.Texture.from(`SMARTPHONE_${i}.png`);
    elemPhoneTextures.push(phoneTexture);
  }

  const elemPhoneSprite = new PIXI.AnimatedSprite(elemPhoneTextures);
  elemPhoneSprite.scale.set(0.7);
  elemPhoneSprite.anchor.set(0,1);
  elemPhoneSprite.angle = -3.5;
  elemPhoneSprite.position.set(100,pixiapp.screen.height + 100);
  pixiapp.stage.addChild(elemPhoneSprite);
  elemPhoneSprite.loop = false;

  elemPhoneSprite.interactive = true;
  elemPhoneSprite.buttonMode = true;

  elemPhoneSprite.on ('mousedown', function()
  {
      window.open("resources","_self")
  } );

  elemPhoneSprite.on ('pointerover', function()
  {
      elemPhoneSprite.animationSpeed = 1;
      elemPhoneSprite.play();
  } );

  elemPhoneSprite.on ('pointerout', function()
  {
      elemPhoneSprite.animationSpeed = -2;
      elemPhoneSprite.play();
  } );

  //flute animation


}

pixiapp.stage.addChild(elemHeadpiece);
pixiapp.stage.addChild(elemWeaving);
pixiapp.stage.addChild(elemSeruling);
pixiapp.stage.addChild(elemStationery);
//pixiapp.stage.addChild(insStart);

insStart.scale.set(0.7);

//positions and scale
elemHeadpiece.scale.set(0.7);
elemHeadpiece.anchor.set(0.5);
elemHeadpiece.position.set(5,5);

elemWeaving.scale.set(0.7);
elemWeaving.anchor.set(0.5);
elemWeaving.position.set(pixiapp.screen.width - 330,10);

elemSeruling.scale.set(0.7);
elemSeruling.anchor.set(0.5);
elemSeruling.position.set(pixiapp.screen.width - 150,pixiapp.screen.height - 230);

elemStationery.scale.set(0.7);
elemStationery.anchor.set(0.5);
elemStationery.position.set(pixiapp.screen.width - 300,pixiapp.screen.height - 100);
elemStationery.zIndex = 100;


//interactions
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


}
