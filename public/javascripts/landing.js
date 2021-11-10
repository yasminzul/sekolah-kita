const pixiapp = new window.PIXI.Application();
$('body').find('#landingView').append(pixiapp.view);

pixiapp.renderer.resize(window.innerWidth, window.innerHeight);

const bg = PIXI.Sprite.from('images/BG-header/BG-header.png');

pixiapp.stage.addChild(bg);
