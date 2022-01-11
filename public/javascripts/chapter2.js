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
