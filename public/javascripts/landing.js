const pixiapp = new window.PIXI.Application();
$('body').find('#landingView').append(pixiapp.view);

pixiapp.renderer.resize(window.innerWidth, window.innerHeight);
pixiapp.renderer.view.style.position = 'absolute';


//background
const bg = PIXI.Sprite.from('images/BG-header/BG-header.png');

bg.width = window.innerWidth;
bg.height = window.innerHeight;

pixiapp.stage.addChild(bg);


//elements
const elemHeadpiece = PIXI.Sprite.from('images/elem-headpiece/elem-headpiece@2x.png');
elemHeadpiece.scale.set(0.7);
pixiapp.stage.addChild(elemHeadpiece);

const elemWeaving = PIXI.Sprite.from('images/weaving/weaving@2x.png');
elemWeaving.scale.set(0.7);
pixiapp.stage.addChild(elemWeaving);

const elemPhone = PIXI.Sprite.from('images/elem-phone/elem-phone@2x.png');
elemPhone.scale.set(0.7);
pixiapp.stage.addChild(elemPhone);

const elemSeruling = PIXI.Sprite.from('images/elem-seruling/elem-seruling@2x.png');
elemSeruling.scale.set(0.7);
pixiapp.stage.addChild(elemSeruling);

const elemStationery = PIXI.Sprite.from('images/stationery/stationery@2x.png');
elemStationery.scale.set(0.7);
pixiapp.stage.addChild(elemStationery);

const containerNotebook = new PIXI.Container();
pixiapp.stage.addChild(containerNotebook);

const elemNotebook = PIXI.Sprite.from('images/elem-notebook/elem-notebook@2x.png');
elemNotebook.scale.set(0.7);
containerNotebook.addChild(elemNotebook);

const insStart = PIXI.Sprite.from('images/ins-start.svg');
insStart.scale.set(0.7);
containerNotebook.addChild(insStart);


//positions
elemHeadpiece.anchor.set(0.5);
elemHeadpiece.position.set(5,5);

containerNotebook.x = pixiapp.screen.width / 2;
containerNotebook.y = (pixiapp.screen.height / 2) + 125;

insStart.anchor.set(0.5);
insStart.position.set(0,0);

elemWeaving.anchor.set(0.5);
elemWeaving.position.set(pixiapp.screen.width - 330,10);

elemPhone.anchor.set(0,1);
elemPhone.position.set(100,pixiapp.screen.height + 100);

elemSeruling.anchor.set(0.5);
elemSeruling.position.set(pixiapp.screen.width - 150,pixiapp.screen.height - 230);

elemStationery.anchor.set(0.5);
elemStationery.position.set(pixiapp.screen.width - 300,pixiapp.screen.height - 100);


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
