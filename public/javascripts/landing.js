const pixiapp = new window.PIXI.Application({
  transparent: true,
  resizeTo: window});
$('#landingView').append(pixiapp.view);

const loader = PIXI.Loader.shared;

loader.add('background','images/BG-header/BG-header@2x.png');

var x = window.matchMedia("(max-width: 500px)")

//mobile resources
if (x.matches){
  loader.add('notebook','images/elem-notebook/elem-notebook@2x.png');
  loader.add('seruling','images/elem-seruling/elem-seruling@2x.png');
  loader.add('headdress','images/elem-headpiece/elem-headpiece@2x.png');
  loader.add('phone','images/elem-phone/elem-phone.png');
}

//desktop resources
else {
  loader.add('stationery','images/stationery/stationery@2x.png');
  loader.add('weaving','images/weaving/weaving@2x.png');
  loader.add('phone','images/Animated-sprites/spritesheet-phone.json');
  loader.add('notebookHover','images/Animated-sprites/spritesheet-notebookHover.json');
  loader.add('notebook','images/Animated-sprites/spritesheet-notebook.json');
  loader.add('headpiece','images/Animated-sprites/spritesheet-headpiece.json');
  loader.add('flute','images/Animated-sprites/spritesheet-flute.json')
}


loader.load(setup);


 function setup(loader, resources)
 {
   const bg = PIXI.Sprite.from(resources.background.texture);
   bg.width = window.innerWidth;
   bg.height = window.innerHeight;
   pixiapp.stage.addChild(bg);


  var x = window.matchMedia("(max-width: 500px)")

  //mobile
  if (x.matches)
  {

    const elemNotebook = PIXI.Sprite.from(resources.notebook.texture);
    const elemHeadpiece = PIXI.Sprite.from(resources.headdress.texture);
    const elemPhone = PIXI.Sprite.from(resources.phone.texture);

    pixiapp.stage.addChild(elemNotebook);
    elemNotebook.scale.set(0.45);
    elemNotebook.position.set(-50, pixiapp.screen.height/5);

    pixiapp.stage.addChild(elemHeadpiece);
    elemHeadpiece.scale.set(0.45);
    elemHeadpiece.anchor.set(0.5);
    elemHeadpiece.rotation = 0.3;
    elemHeadpiece.position.set(90,10);

    pixiapp.stage.addChild(elemPhone);
    elemPhone.scale.set(0.45);
    elemPhone.anchor.set(0.5);
    elemPhone.angle = -3.5;
    elemPhone.position.set(pixiapp.screen.width/1.25,pixiapp.screen.height/1.1);


    //interactions
    elemHeadpiece.interactive = true;
    elemHeadpiece.buttonMode = true;
    elemHeadpiece.on ('touchstart', function()
    {
        window.open("en/orang-asli","_self")
    } );

    elemNotebook.interactive = true;
    elemNotebook.buttonMode = true;
    elemNotebook.on ('touchstart', function()
    {
        window.open("en/chapter1","_self")
    } );

    elemPhone.interactive = true;
    elemPhone.buttonMode = true;
    elemPhone.on ('touchstart', function()
    {
        window.open("en/resources","_self")
    } );

  }

  //desktop
  else {

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

    const notebookTextures = [];
    for (let i=0; i < 19; i++)
    {
      const notebookTexture = PIXI.Texture.from(`NOTEBOOK_${i}.png`);
      notebookTextures.push(notebookTexture);
    }

    const notebookSprite = new PIXI.AnimatedSprite(notebookTextures);
    notebookSprite.scale.set(1);
    notebookSprite.anchor.set(0.5);
    notebookSprite.angle = 3.5;
    notebookSprite.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 2);
    notebookSprite.loop = false;

    notebookHSprite.on ('mousedown', function()
    {
      pixiapp.stage.addChild(notebookHSprite);
        const ease = new Ease.Ease();
        const bookAnim = ease.add(
            notebookHSprite,
            { x: (pixiapp.screen.width /4)*3 , y: pixiapp.screen.height / 2, scale: 1},
            { reverse: false, duration: 1000, ease: 'easeInOutQuad' }
          );

        bookAnim.once('complete', () =>
        pixiapp.stage.addChild(notebookSprite),
        notebookSprite.animationSpeed = 0.15,
        notebookSprite.play()
      );

        notebookSprite.onComplete = function () {
          window.open("en/chapter1","_self")
        };

    } );

    notebookHSprite.on ('touchstart', function()
    {
        pixiapp.stage.addChild(notebookSprite);
        notebookSprite.animationSpeed = 1;
        notebookSprite.play();
        notebookSprite.onComplete = function () {
          window.open("en/chapter1","_self")
        };
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
    const elemHeadpieceTextures = [];
    for (let i=0; i < 74; i++)
    {
      const headpieceTexture = PIXI.Texture.from(`HEADDRESS_000${i}.png`);
      elemHeadpieceTextures.push(headpieceTexture);
    }

    const elemHeadpieceSprite = new PIXI.AnimatedSprite(elemHeadpieceTextures);
    elemHeadpieceSprite.scale.set(0.7);
    elemHeadpieceSprite.anchor.set(0.5);
    elemHeadpieceSprite.position.set(5,5);
    pixiapp.stage.addChild(elemHeadpieceSprite);
    elemHeadpieceSprite.loop = false;

    elemHeadpieceSprite.interactive = true;
    elemHeadpieceSprite.buttonMode = true;

    elemHeadpieceSprite.on ('mousedown', function()
    {
        window.open("en/orang-asli","_self")
    } );

    elemHeadpieceSprite.on ('touchstart', function()
    {
        window.open("en/orang-asli","_self")
    } );

    elemHeadpieceSprite.on ('pointerover', function()
    {
        elemHeadpieceSprite.animationSpeed = 1;
        elemHeadpieceSprite.play();
    } );

    elemHeadpieceSprite.on ('pointerout', function()
    {
        elemHeadpieceSprite.animationSpeed = -2;
        elemHeadpieceSprite.play();
    } );

    //phone animation
    const elemPhoneTextures = [];
    for (let i=0; i < 74; i++)
    {
      const phoneTexture = PIXI.Texture.from(`SMARTPHONE-NEW_000${i}.png`);
      elemPhoneTextures.push(phoneTexture);
    }

    const elemPhoneSprite = new PIXI.AnimatedSprite(elemPhoneTextures);
    elemPhoneSprite.scale.set(0.7);
    elemPhoneSprite.anchor.set(0,1);
    elemPhoneSprite.angle = -3.5;
    elemPhoneSprite.position.set(100,pixiapp.screen.height + 120);
    pixiapp.stage.addChild(elemPhoneSprite);
    elemPhoneSprite.loop = false;

    elemPhoneSprite.interactive = true;
    elemPhoneSprite.buttonMode = true;

    elemPhoneSprite.on ('mousedown', function()
    {
        window.open("en/resources","_self")
    } );

    elemPhoneSprite.on ('touchstart', function()
    {
        window.open("en/resources","_self")
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
    const elemFluteTextures = [];
    for (let i=0; i < 74; i++)
    {
      const fluteTexture = PIXI.Texture.from(`NOSEFLUTE_000${i}.png`);
      elemFluteTextures.push(fluteTexture);
    }

    const elemFluteSprite = new PIXI.AnimatedSprite(elemFluteTextures);
    elemFluteSprite.scale.set(0.7);
    elemFluteSprite.anchor.set(0.5);
    elemFluteSprite.position.set(pixiapp.screen.width - 150,pixiapp.screen.height - 230);
    pixiapp.stage.addChild(elemFluteSprite);
    elemFluteSprite.loop = false;

    elemFluteSprite.interactive = true;
    elemFluteSprite.buttonMode = true;

    elemFluteSprite.on ('mousedown', function()
    {
        $('#coming-soon').toggleClass("menu-open");
    } );

    elemFluteSprite.on ('touchstart', function()
    {
        $('#coming-soon').toggleClass("menu-open");
    } );

    elemFluteSprite.on ('pointerover', function()
    {
        elemFluteSprite.animationSpeed = 1;
        elemFluteSprite.play();
    } );

    elemFluteSprite.on ('pointerout', function()
    {
        elemFluteSprite.animationSpeed = -2;
        elemFluteSprite.play();
    } );


  const elemStationery = PIXI.Sprite.from(resources.stationery.texture);
  const elemWeaving = PIXI.Sprite.from(resources.weaving.texture);
  pixiapp.stage.addChild(elemWeaving);
  pixiapp.stage.addChild(elemStationery);

  //positions and scale
  elemWeaving.scale.set(0.7);
  elemWeaving.anchor.set(0.5);
  elemWeaving.position.set(pixiapp.screen.width - 330,10);

  elemStationery.scale.set(0.7);
  elemStationery.anchor.set(0.5);
  elemStationery.position.set(pixiapp.screen.width - 300,pixiapp.screen.height - 100);
  elemStationery.zIndex = 100;

  }

  }

loader.onProgress.add(showProgress);
loader.onComplete.add(stopProgress);

function showProgress(e)
{
  var num = parseInt(e.progress);
  $('#loading').html(num+"%");

}

function stopProgress() {
  $('#loading').css("display", "none");
  $('#loading-bar').css("display", "none");
}
