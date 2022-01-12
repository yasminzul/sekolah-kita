const pixiapp = new window.PIXI.Application({
  transparent: true,
  resizeTo: window});
$('#view-chapter2').append(pixiapp.view);

const ease = new Ease.Ease();

const loader = PIXI.Loader.shared;
loader.add('sekolahTitle','/images/Chapter2-ENG/title-eng.jpg');
loader.add('sekolah1','/images/Chapter2-ENG/tabika-kemas-eng.jpg');
loader.add('sekolah2','/images/Chapter2-ENG/taska-kemas-eng.jpg');
loader.add('sekolah3','/images/Chapter2-ENG/pra-sekolah-eng.jpg');
loader.add('sekolah4','/images/Chapter2-ENG/sek-keb-eng.jpg');
loader.add('sekolah5','/images/Chapter2-ENG/sek-jeniskeb-eng.jpg');
loader.add('sekolah6','/images/Chapter2-ENG/sk-orangasli-eng.jpg');
loader.add('sekolah7','/images/Chapter2-ENG/sk9-eng.jpg');
loader.add('sekolah8','/images/Chapter2-ENG/sek-khas-eng.jpg');
loader.add('sekolah9','/images/Chapter2-ENG/smk-eng.jpg');
loader.add('sekolah10','/images/Chapter2-ENG/sm-jeniskeb-eng.jpg');
loader.add('sekolah11','/images/Chapter2-ENG/sek-asrama-eng.jpg');
loader.add('sekolah12','/images/Chapter2-ENG/pipoa-eng.jpg');
loader.add('sekolah13','/images/Chapter2-ENG/sek-agama-eng.jpg');
loader.add('sekolah14','/images/Chapter2-ENG/sm-teknik-eng.jpg');
loader.add('sekolah15','/images/Chapter2-ENG/sek-sukan-eng.jpg');
loader.add('sekolah16','/images/Chapter2-ENG/pengajian-tinggi-eng.jpg');
loader.add('sekolah17','/images/Chapter2-ENG/kedap-eng.jpg');
loader.add('sekolah18','/images/Chapter2-ENG/pusat-didikan-eng.jpg');
loader.add('sekolah19','/images/Chapter2-ENG/sek-swasta-eng.jpg');
loader.add('sekolahALL','/images/Chapter2-ENG/Schools-We-Attend-fullcolor-eng.jpg');

loader.load(setup);

function setup(loader, resources)
{

  const elemSekolah0 = PIXI.Sprite.from(resources.sekolahTitle.texture);
  const elemSekolah1 = PIXI.Sprite.from(resources.sekolah1.texture);
  const elemSekolah2 = PIXI.Sprite.from(resources.sekolah2.texture);
  const elemSekolah3 = PIXI.Sprite.from(resources.sekolah3.texture);
  const elemSekolah4 = PIXI.Sprite.from(resources.sekolah4.texture);
  const elemSekolah5 = PIXI.Sprite.from(resources.sekolah5.texture);
  const elemSekolah6 = PIXI.Sprite.from(resources.sekolah6.texture);
  const elemSekolah7 = PIXI.Sprite.from(resources.sekolah7.texture);
  const elemSekolah8 = PIXI.Sprite.from(resources.sekolah8.texture);
  const elemSekolah9 = PIXI.Sprite.from(resources.sekolah9.texture);
  const elemSekolah10 = PIXI.Sprite.from(resources.sekolah10.texture);
  const elemSekolah11 = PIXI.Sprite.from(resources.sekolah11.texture);
  const elemSekolah12 = PIXI.Sprite.from(resources.sekolah12.texture);
  const elemSekolah13 = PIXI.Sprite.from(resources.sekolah13.texture);
  const elemSekolah14 = PIXI.Sprite.from(resources.sekolah14.texture);
  const elemSekolah15 = PIXI.Sprite.from(resources.sekolah15.texture);
  const elemSekolah16 = PIXI.Sprite.from(resources.sekolah16.texture);
  const elemSekolah17 = PIXI.Sprite.from(resources.sekolah17.texture);
  const elemSekolah18 = PIXI.Sprite.from(resources.sekolah18.texture);
  const elemSekolah19 = PIXI.Sprite.from(resources.sekolah19.texture);
  const elemSekolah20 = PIXI.Sprite.from(resources.sekolahALL.texture);

  elemSekolah0.anchor.set(0.5);
  elemSekolah0.position.set(pixiapp.screen.width / 2.05, pixiapp.screen.height / 1.8);
  pixiapp.stage.addChild(elemSekolah0);



  let sekolahAnimation = [
  function(){
    pixiapp.stage.removeChild(elemSekolah0);
    elemSekolah1.anchor.set(0.5);
    elemSekolah1.position.set(pixiapp.screen.width / 2.05, pixiapp.screen.height / 1.8);
    pixiapp.stage.addChild(elemSekolah1);
    ease.add(
      elemSekolah1,
      { x: (pixiapp.screen.width/100)*70, y: (pixiapp.screen.height/100)*65, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
    pixiapp.stage.removeChild(elemSekolah2);
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah1);
    elemSekolah2.anchor.set(0.5);
    elemSekolah2.scale.set(1.2);
    elemSekolah2.position.set((pixiapp.screen.width/100)*70, (pixiapp.screen.height/100)*65);
    pixiapp.stage.addChild(elemSekolah2);
    ease.add(
      elemSekolah2,
      { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*95, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
    pixiapp.stage.removeChild(elemSekolah3);
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah2);
    elemSekolah3.anchor.set(0.5);
    elemSekolah3.scale.set(1.2);
    elemSekolah3.position.set((pixiapp.screen.width/100)*60, (pixiapp.screen.height/100)*95);
    pixiapp.stage.addChild(elemSekolah3);
    ease.add(
      elemSekolah3,
      { x: (pixiapp.screen.width/100)*75, y: (pixiapp.screen.height/100)*50, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah3);
    elemSekolah4.anchor.set(0.5);
    elemSekolah4.scale.set(1.2);
    elemSekolah4.position.set((pixiapp.screen.width/100)*75, (pixiapp.screen.height/100)*50);
    pixiapp.stage.addChild(elemSekolah4);
    ease.add(
      elemSekolah4,
      { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*30, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah4);
    elemSekolah5.anchor.set(0.5);
    elemSekolah5.scale.set(1.2);
    elemSekolah5.position.set((pixiapp.screen.width/100)*60,(pixiapp.screen.height/100)*30);
    pixiapp.stage.addChild(elemSekolah5);
    ease.add(
      elemSekolah5,
      { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*12, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah5);
    elemSekolah6.anchor.set(0.5);
    elemSekolah6.scale.set(1.2);
    elemSekolah6.position.set((pixiapp.screen.width/100)*60,(pixiapp.screen.height/100)*12);
    pixiapp.stage.addChild(elemSekolah6);
    ease.add(
      elemSekolah6,
      { x: (pixiapp.screen.width/100)*25, y: (pixiapp.screen.height/100)*100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah6);
    elemSekolah7.anchor.set(0.5);
    elemSekolah7.scale.set(1.2);
    elemSekolah7.position.set((pixiapp.screen.width/100)*25,(pixiapp.screen.height/100)*100);
    pixiapp.stage.addChild(elemSekolah7);
    ease.add(
      elemSekolah7,
      { x: (pixiapp.screen.width/100)*5, y: (pixiapp.screen.height/100)*80, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah7);
    elemSekolah8.anchor.set(0.5);
    elemSekolah8.scale.set(1.2);
    elemSekolah8.position.set((pixiapp.screen.width/100)*5,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah8);
    ease.add(
      elemSekolah8,
      { x: -(pixiapp.screen.width/100)*20, y: (pixiapp.screen.height/100)*80, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah9);
    elemSekolah10.anchor.set(0.5);
    elemSekolah10.scale.set(1.2);
    elemSekolah10.position.set((pixiapp.screen.width/100)*2,pixiapp.screen.height/100);
    pixiapp.stage.addChild(elemSekolah10);
    ease.add(
      elemSekolah10,
      { x: (pixiapp.screen.width/100)*2, y: (pixiapp.screen.height/100)*30, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah10);
    elemSekolah11.anchor.set(0.5);
    elemSekolah11.scale.set(1.2);
    elemSekolah11.position.set((pixiapp.screen.width/100)*2,(pixiapp.screen.height/100)*30);
    pixiapp.stage.addChild(elemSekolah11);
    ease.add(
      elemSekolah11,
      { x: -(pixiapp.screen.width/100)*20, y: (pixiapp.screen.height/100)*20, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah11);
    elemSekolah12.anchor.set(0.5);
    elemSekolah12.scale.set(1.2);
    elemSekolah12.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*20);
    pixiapp.stage.addChild(elemSekolah12);
    ease.add(
      elemSekolah12,
      { x: -(pixiapp.screen.width/100)*15, y: (pixiapp.screen.height/100)*60, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah12);
    elemSekolah13.anchor.set(0.5);
    elemSekolah13.scale.set(1.2);
    elemSekolah13.position.set(-(pixiapp.screen.width/100)*15,(pixiapp.screen.height/100)*60);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah13,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  },
  function(){
    pixiapp.stage.removeChild(elemSekolah8);
    elemSekolah9.anchor.set(0.5);
    elemSekolah9.scale.set(1.2);
    elemSekolah9.position.set(-(pixiapp.screen.width/100)*20,(pixiapp.screen.height/100)*80);
    pixiapp.stage.addChild(elemSekolah9);
    ease.add(
      elemSekolah9,
      { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
      { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
    );
  }
  ];


    var clickstate = 0;

    $(document).ready(function(){

      $('#school-next').click( function (){
        sekolahAnimation[clickstate]();
        clickstate += 1;
      });

      $('#school-prev').click( function (){
        sekolahAnimation[clickstate]();
        clickstate -= 1;
      });

    });

}
