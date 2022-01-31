const pixiapp = new window.PIXI.Application({
  transparent: true,
  resizeTo: window});
$('#view-chapter2').append(pixiapp.view);

const textStyle = new PIXI.TextStyle({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 14,
  fill: '#efefe',
  align: 'left',
  wordWrap : true,
  wordWrapWidth: pixiapp.screen.width/3.2
});

let textArr = [
`(Age 2-4)
<div class="chtitle">Taska KEMAS</div>
 Early childhood education and daycare services for working parents of young children, catering to rural communities. Under the purview of the Ministry of Rural Development.
 <div class="chcounter">1/19</div>`,

`(Age 4-6)
<div class="chtitle">Tabika KEMASM</div>
 Pre-school classes that prepare children for primary school, catering to rural communities. There are 268 Tabikas in Orang Asli villages and interior areas. Under the purview of the Ministry of Rural Development.
 <div class="chcounter">2/19</div>`,

`(Age 4-6)
<div class="chtitle">Prasekolah</div>
 Pre-school classes under the purview of the Ministry of Education. There are 6,185 Prasekolah institutions. Parents have noted that education at Prasekolah classes is usually of a higher quality compared to KEMAS classes, with better-trained teachers and better facilities. However, Orang Asli communities have limited access to Prasekolah, as they are usually located within Sekolah Kebangsaan schools in town centres.<br><br>

<a href='/en/chapter2/found-clue/clue-9' id="clue-9">Research by IDEAS has noted access to quality pre-school as key to keeping Orang Asli students in school, as they would start school on level footing with their peers.</a>
<div class="chcounter">3/19</div>`,

`(Age 7-12)
<div class="chtitle">Sekolah Kebangsaan</div>
<div class="chcounter">4/19</div>`,

`(Age 7-12)
<div class="chtitle">Sekolah Jenis Kebangsaan</div>
 Vernacular primary schools, where the medium of instruction is either Mandarin or Tamil.
 <div class="chcounter">5/19</div>`,

`(Age 7-12)
<div class="chtitle">Sekolah Kebangsaan Orang Asli</div>
 Government primary schools located in or near significant Orang Asli populations. These schools will have a majority Orang Asli student population. As of 2018, there are 94 such schools.
 <div class="chcounter">6/19</div>`,

`(Age 7-15)
<div class="chtitle">Sekolah Model Khas Komprehensif K9</div>
 Schools located near large Orang Asli populations in interior areas, where students are required to complete nine years’ syllabus, from Standard 1 to Form 3. These schools were instituted to address the high dropout rate among Orang Asli students when transitioning from primary to secondary school, by having that transition take place within the same school. There are currently five K9 schools in Peninsular Malaysia, and a further 11 in Sabah and Sarawak which cater to indigenous populations there.
 <div class="chcounter">7/19</div>`,

`(Age 7-17)
<div class="chtitle">Sekolah Pendidikan Khas</div>
 Primary and secondary schools for special needs children.
 <div class="chcounter">8/19</div>`,

`(Age 13-17)
<div class="chtitle">Sekolah Menengah Kebangsaan</div>
<div class="chcounter">9/19</div>`,

`(Age 13-17)
<div class="chtitle">Sekolah Menengah Jenis Kebangsaan</div>
 Vernacular secondary schools, where the medium of instruction is Mandarin. There are no Tamil-language secondary schools.
 <div class="chcounter">10/19</div>`,
`(Age 13-17)
<div class="chtitle">Sekolah Berasrama Penuh</div>
 Residential schools for high-achieving Malaysian students, focusing on science and technology subjects. There are 69 such schools.
 <div class="chcounter">11/19</div>`,

`(Age 13-17)
<div class="chtitle">Pusat Intelek Pelajar Orang Asli (PIPOA)</div>
 Special school for high-achieving Orang Asli students, for Form 1 to 3. There is only one PIPOA school, in Rompin, Pahang.
 <div class="chcounter">12/19</div>`,

`(Age 13-17)
<div class="chtitle">Sekolah Agama</div>
 There are religious Islamic schools at both primary and secondary level.
 <div class="chcounter">13/19</div>`,

`(Age 13-17)
<div class="chtitle">Sekolah Menengah Teknik</div>
 Vocational secondary schools with a strong focus on skills-based education and industry practices.
 <div class="chcounter">14/19</div>`,

`(Age 13-17)
<div class="chtitle">Sekolah Seni / Sekolah Sukan</div>
 Schools catering to students who excel in arts or sports.
 <div class="chcounter">15/19</div>`,

`(Age 18+)
<div class="chtitle">Tertiary education</div>
<div class="chcounter">16/19</div>`,

`(Mature Age)
<div class="chtitle">Kelas Dewasa Ibu Bapa Orang Asli Dan Penan (KEDAP)</div>
 Adult literacy classes for Orang Asli, conducted in schools. Adults who sign up for KEDAP classes are given an allowance to attend.
 <div class="chcounter">17/19</div>`,

`<div class="chtitle">Community-based learning</div>
 Some Orang Asli communities have started community-based classes, held within their village. These classes are usually less rigid and include indigenous culture and traditional knowledge as part of its syllabus. <a href='/en/chapter2/found-clue/clue-8' id="clue-8"> Parents and teachers have noted that these classes are an important form of supplementary education among Orang Asli communities, but require broader recognition and support from government agencies.</a>
 <div class="chcounter">18/19</div>`,

`<div class="chtitle">Private schools</div>
 There are private education institutes for all levels of education. They range from expensive, paid schools, to not-for-profit institutions catering to marginalised communities, to homeschooling programmes.
 <div class="chcounter">19/19</div>`,

`<div class="chtitle finished">You finished this chapter!</div>
  <button class="ch-startover">START AGAIN</button>`,
]


textCounter = 0;

let basicText = new PIXI.Text(textArr[0], textStyle);

    // basicText.anchor.set(-0.7, 15);
    basicText.position.set(pixiapp.screen.width/ 2 + 200, pixiapp.screen.height/2 - 220);

    const graficArea = new PIXI.Graphics()
        // graficArea
        .beginFill(0xE6E2DD)
        .drawRect(0, 0, basicText.position.x/ 2 + 100, basicText.position.y/ 2 + 400)
        .endFill();

    const spriteArea = new PIXI.Sprite(pixiapp.renderer.generateTexture(graficArea));
        spriteArea.position.set(pixiapp.screen.width / 2, pixiapp.screen.height / 1.4)
        spriteArea.scale.set(0.9);
        spriteArea.anchor.set(-0.35, 1);

        spriteArea.addChild(basicText);



        const ease = new Ease.Ease();

        const loader = PIXI.Loader.shared;
        loader.add('sekolahTitle','/images/Chapter2-ENG/Schools-We-Attend-fullcolor-eng.jpg');
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
        loader.add('sekolahALL','/images/Chapter2-ENG/Schools-We-Attend-fullgrey-eng.jpg');

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


          let sekolahAnimation = [];
          var x = window.matchMedia("(orientation: landscape)");


          //desktop
          if (x.matches)
          {

            elemSekolah0.anchor.set(0.5);
            elemSekolah0.scale.set(0.9);
            elemSekolah0.position.set(pixiapp.screen.width / 2.05, pixiapp.screen.height / 2);
            pixiapp.stage.addChild(elemSekolah0);


            var currentX = pixiapp.screen.width / 2.05;
            var currentY = pixiapp.screen.height / 2;
            var currentScale = 0.9;


            sekolahAnimation = [
            function(){
              pixiapp.stage.removeChild(elemSekolah0);
              pixiapp.stage.removeChild(elemSekolah1);
              elemSekolah2.anchor.set(0.5);
              elemSekolah2.scale.set(currentScale);
              elemSekolah2.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah2);

              ease.add(
                elemSekolah2,
                { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*95, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*60;
              currentY = (pixiapp.screen.height/100)*95;
              currentScale = 1.2;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah2);
              pixiapp.stage.removeChild(elemSekolah3);
              elemSekolah1.anchor.set(0.5);
              elemSekolah1.scale.set(1.2);
              elemSekolah1.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah1);

              ease.add(
                elemSekolah1,
                { x: (pixiapp.screen.width/100)*70, y: (pixiapp.screen.height/100)*65, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*70;
              currentY = (pixiapp.screen.height/100)*65;


            },
            function(){
              pixiapp.stage.removeChild(elemSekolah1);
              pixiapp.stage.removeChild(elemSekolah4);
              elemSekolah3.anchor.set(0.5);
              elemSekolah3.scale.set(1.2);
              elemSekolah3.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah3);

              ease.add(
                elemSekolah3,
                { x: (pixiapp.screen.width/100)*75, y: (pixiapp.screen.height/100)*50, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*75;
              currentY = (pixiapp.screen.height/100)*50;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah3);
              pixiapp.stage.removeChild(elemSekolah5);
              elemSekolah4.anchor.set(0.5);
              elemSekolah4.scale.set(1.2);
              elemSekolah4.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah4);

              ease.add(
                elemSekolah4,
                { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*30, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*60;
              currentY = (pixiapp.screen.height/100)*30;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah4);
              pixiapp.stage.removeChild(elemSekolah6);
              elemSekolah5.anchor.set(0.5);
              elemSekolah5.scale.set(1.2);
              elemSekolah5.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah5);

              ease.add(
                elemSekolah5,
                { x: (pixiapp.screen.width/100)*60, y: (pixiapp.screen.height/100)*12, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*60;
              currentY = (pixiapp.screen.height/100)*12;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah5);
              pixiapp.stage.removeChild(elemSekolah7);
              elemSekolah6.anchor.set(0.5);
              elemSekolah6.scale.set(1.2);
              elemSekolah6.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah6);

              ease.add(
                elemSekolah6,
                { x: (pixiapp.screen.width/100)*25, y: (pixiapp.screen.height/100)*100, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*25;
              currentY = (pixiapp.screen.height/100)*100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah6);
              pixiapp.stage.removeChild(elemSekolah8);
              elemSekolah7.anchor.set(0.5);
              elemSekolah7.scale.set(1.2);
              elemSekolah7.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah7);

              ease.add(
                elemSekolah7,
                { x: (pixiapp.screen.width/100)*5, y: (pixiapp.screen.height/100)*80, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*5;
              currentY = (pixiapp.screen.height/100)*80;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah7);
              pixiapp.stage.removeChild(elemSekolah9);
              elemSekolah8.anchor.set(0.5);
              elemSekolah8.scale.set(1.2);
              elemSekolah8.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah8);

              ease.add(
                elemSekolah8,
                { x: -(pixiapp.screen.width/100)*20, y: (pixiapp.screen.height/100)*80, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*20;
              currentY = (pixiapp.screen.height/100)*80;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah8);
              pixiapp.stage.removeChild(elemSekolah10);
              elemSekolah9.anchor.set(0.5);
              elemSekolah9.scale.set(1.2);
              elemSekolah9.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah9);

              ease.add(
                elemSekolah9,
                { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*2;
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah9);
              pixiapp.stage.removeChild(elemSekolah11);
              elemSekolah10.anchor.set(0.5);
              elemSekolah10.scale.set(1.2);
              elemSekolah10.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah10);

              ease.add(
                elemSekolah10,
                { x: (pixiapp.screen.width/100)*2, y: (pixiapp.screen.height/100)*30, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*2;
              currentY = (pixiapp.screen.height/100)*30;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah10);
              pixiapp.stage.removeChild(elemSekolah12);
              elemSekolah11.anchor.set(0.5);
              elemSekolah11.scale.set(1.2);
              elemSekolah11.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah11);

              ease.add(
                elemSekolah11,
                { x: -(pixiapp.screen.width/100)*20, y: (pixiapp.screen.height/100)*20, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*20;
              currentY = (pixiapp.screen.height/100)*20;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah11);
              pixiapp.stage.removeChild(elemSekolah13);
              elemSekolah12.anchor.set(0.5);
              elemSekolah12.scale.set(1.2);
              elemSekolah12.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah12);

              ease.add(
                elemSekolah12,
                { x: -(pixiapp.screen.width/100)*15, y: (pixiapp.screen.height/100)*60, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*15;
              currentY = (pixiapp.screen.height/100)*60;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah12);
              pixiapp.stage.removeChild(elemSekolah14);
              elemSekolah13.anchor.set(0.5);
              elemSekolah13.scale.set(1.2);
              elemSekolah13.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah13);

              ease.add(
                elemSekolah13,
                { x: (pixiapp.screen.width/100)*40, y: (pixiapp.screen.height/100)*60, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*40;
              currentY = (pixiapp.screen.height/100)*60;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah13);
              pixiapp.stage.removeChild(elemSekolah15);
              elemSekolah14.anchor.set(0.5);
              elemSekolah14.scale.set(1.2);
              elemSekolah14.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah14);

              ease.add(
                elemSekolah14,
                { x: (pixiapp.screen.width/100)*25, y: (pixiapp.screen.height/100)*22, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*25;
              currentY = (pixiapp.screen.height/100)*22;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah14);
              pixiapp.stage.removeChild(elemSekolah16);
              elemSekolah15.anchor.set(0.5);
              elemSekolah15.scale.set(1.2);
              elemSekolah15.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah15);

              ease.add(
                elemSekolah15,
                { x: (pixiapp.screen.width/100)*20, y: (pixiapp.screen.height/100)*40, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*20;
              currentY = (pixiapp.screen.height/100)*40;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah15);
              pixiapp.stage.removeChild(elemSekolah17);
              elemSekolah16.anchor.set(0.5);
              elemSekolah16.scale.set(1.2);
              elemSekolah16.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah16);

              ease.add(
                elemSekolah16,
                { x: -(pixiapp.screen.width/100)*30, y: pixiapp.screen.height/100, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*30;
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah16);
              pixiapp.stage.removeChild(elemSekolah18);
              elemSekolah17.anchor.set(0.5);
              elemSekolah17.scale.set(1.2);
              elemSekolah17.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah17);

              ease.add(
                elemSekolah17,
                { x: pixiapp.screen.width/100, y: (pixiapp.screen.height/100)*105, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = pixiapp.screen.width/100;
              currentY = (pixiapp.screen.height/100)*105;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah17);
              pixiapp.stage.removeChild(elemSekolah19);
              elemSekolah18.anchor.set(0.5);
              elemSekolah18.scale.set(1.2);
              elemSekolah18.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah18);

              ease.add(
                elemSekolah18,
                { x: (pixiapp.screen.height/100)*100, y: (pixiapp.screen.height/100)*80, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.height/100)*100;
              currentY = (pixiapp.screen.height/100)*80;
            },
            function(){
              $('body').css({"background-color": "#49463f"});
              pixiapp.stage.removeChild(elemSekolah18);
              pixiapp.stage.removeChild(elemSekolah20);
              elemSekolah19.anchor.set(0.5);
              elemSekolah19.scale.set(currentScale);
              elemSekolah19.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah19);

              ease.add(
                elemSekolah19,
                { x: (pixiapp.screen.height/100)*50, y: pixiapp.screen.height/100, scale: 1.2},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.height/100)*50;
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah19);
              elemSekolah20.anchor.set(0.5);
              elemSekolah20.scale.set(1.2);
              elemSekolah20.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah20);

              ease.add(
                elemSekolah20,
                { x: pixiapp.screen.width / 2.05, y: pixiapp.screen.height/2, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              $('body').css({"background-color": "#fbf2d5"});
              currentX = pixiapp.screen.width / 2.05;
              currentY = pixiapp.screen.height / 2;
              currentScale = 0.9;
            }
            ];

          }
          //end desktop

          //mobile
          else {

            elemSekolah0.anchor.set(0.5);
            elemSekolah0.scale.set(0.7);
            elemSekolah0.position.set(pixiapp.screen.width / 2.15, pixiapp.screen.height / 2);
            pixiapp.stage.addChild(elemSekolah0);

            var currentX = pixiapp.screen.width / 2.05;
            var currentY = pixiapp.screen.height / 2;
            var currentScale = 0.7;

            sekolahAnimation = [
            function(){
              pixiapp.stage.removeChild(elemSekolah0);
              pixiapp.stage.removeChild(elemSekolah1);
              elemSekolah2.anchor.set(0.5);
              elemSekolah2.scale.set(currentScale);
              elemSekolah2.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah2);
              ease.add(
                elemSekolah2,
                { x: (pixiapp.screen.width/100)*140, y: (pixiapp.screen.height/100)*60, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*140;
              currentY = (pixiapp.screen.height/100)*60;
             currentScale = 0.9;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah2);
              pixiapp.stage.removeChild(elemSekolah3);
              elemSekolah1.anchor.set(0.5);
              elemSekolah1.scale.set(0.9);
              elemSekolah1.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah1);
              ease.add(
                elemSekolah1,
                { x: (pixiapp.screen.width/100)*160, y: (pixiapp.screen.height/100)*40, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*160;
              currentY = (pixiapp.screen.height/100)*40;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah1);
              pixiapp.stage.removeChild(elemSekolah4);
              elemSekolah3.anchor.set(0.5);
              elemSekolah3.scale.set(0.9);
              elemSekolah3.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah3);
              ease.add(
                elemSekolah3,
                { x: (pixiapp.screen.width/100)*170, y: (pixiapp.screen.height/100)*40, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*170;
              currentY = (pixiapp.screen.height/100)*40;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah3);
              pixiapp.stage.removeChild(elemSekolah5);
              elemSekolah4.anchor.set(0.5);
              elemSekolah4.scale.set(0.9);
              elemSekolah4.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah4);
              ease.add(
                elemSekolah4,
                { x: (pixiapp.screen.width/100)*140, y: (pixiapp.screen.height/100)*20, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*140;
              currentY = (pixiapp.screen.height/100)*20;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah4);
              pixiapp.stage.removeChild(elemSekolah6);
              elemSekolah5.anchor.set(0.5);
              elemSekolah5.scale.set(0.9);
              elemSekolah5.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah5);
              ease.add(
                elemSekolah5,
                { x: (pixiapp.screen.width/100)*138, y: (pixiapp.screen.height/100)*2, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*138;
              currentY = (pixiapp.screen.height/100)*2;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah5);
              pixiapp.stage.removeChild(elemSekolah7);
              elemSekolah6.anchor.set(0.5);
              elemSekolah6.scale.set(0.9);
              elemSekolah6.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah6);
              ease.add(
                elemSekolah6,
                { x: (pixiapp.screen.width/100)*50, y: (pixiapp.screen.height/100)*65, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*50;
              currentY = (pixiapp.screen.height/100)*65;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah6);
              pixiapp.stage.removeChild(elemSekolah8);
              elemSekolah7.anchor.set(0.5);
              elemSekolah7.scale.set(0.9);
              elemSekolah7.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah7);
              ease.add(
                elemSekolah7,
                { x: -(pixiapp.screen.width/100)*5, y: (pixiapp.screen.height/100)*50, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*5;
              currentY = (pixiapp.screen.height/100)*50;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah7);
              pixiapp.stage.removeChild(elemSekolah9);
              elemSekolah8.anchor.set(0.5);
              elemSekolah8.scale.set(0.9);
              elemSekolah8.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah8);
              ease.add(
                elemSekolah8,
                { x: -(pixiapp.screen.width/100)*70, y: (pixiapp.screen.height/100)*50, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*70;
              currentY = (pixiapp.screen.height/100)*50;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah8);
              pixiapp.stage.removeChild(elemSekolah10);
              elemSekolah9.anchor.set(0.5);
              elemSekolah9.scale.set(0.9);
              elemSekolah9.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah9);
              ease.add(
                elemSekolah9,
                { x: (pixiapp.screen.width/100)*2, y: pixiapp.screen.height/100, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100);
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah9);
              pixiapp.stage.removeChild(elemSekolah11);
              elemSekolah10.anchor.set(0.5);
              elemSekolah10.scale.set(0.9);
              elemSekolah10.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah10);
              ease.add(
                elemSekolah10,
                { x: -(pixiapp.screen.width/100)*12, y: (pixiapp.screen.height/100)*20, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*12;
              currentY = (pixiapp.screen.height/100)*20;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah10);
              pixiapp.stage.removeChild(elemSekolah12);
              elemSekolah11.anchor.set(0.5);
              elemSekolah11.scale.set(0.9);
              elemSekolah11.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah11);
              ease.add(
                elemSekolah11,
                { x: -(pixiapp.screen.width/100)*75, y: (pixiapp.screen.height/100)*10, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*75;
              currentY = (pixiapp.screen.height/100)*10;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah11);
              pixiapp.stage.removeChild(elemSekolah13);
              elemSekolah12.anchor.set(0.5);
              elemSekolah12.scale.set(0.9);
              elemSekolah12.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah12);
              ease.add(
                elemSekolah12,
                { x: -(pixiapp.screen.width/100)*55, y: (pixiapp.screen.height/100)*40, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*55;
              currentY = (pixiapp.screen.height/100)*40;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah12);
              pixiapp.stage.removeChild(elemSekolah14);
              elemSekolah13.anchor.set(0.5);
              elemSekolah13.scale.set(0.9);
              elemSekolah13.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah13);
              ease.add(
                elemSekolah13,
                { x: (pixiapp.screen.width/100)*95, y: (pixiapp.screen.height/100)*40, scale:0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*95;
              currentY = (pixiapp.screen.height/100)*40;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah13);
              pixiapp.stage.removeChild(elemSekolah15);
              elemSekolah14.anchor.set(0.5);
              elemSekolah14.scale.set(0.9);
              elemSekolah14.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah14);
              ease.add(
                elemSekolah14,
                { x: (pixiapp.screen.width/100)*55, y: (pixiapp.screen.height/100)*15, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*55;
              currentY = (pixiapp.screen.height/100)*15;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah14);
              pixiapp.stage.removeChild(elemSekolah16);
              elemSekolah15.anchor.set(0.5);
              elemSekolah15.scale.set(0.9);
              elemSekolah15.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah15);
              ease.add(
                elemSekolah15,
                { x: (pixiapp.screen.width/100)*45, y: (pixiapp.screen.height/100)*20, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*45;
              currentY = (pixiapp.screen.height/100)*20;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah15);
              pixiapp.stage.removeChild(elemSekolah17);
              elemSekolah16.anchor.set(0.5);
              elemSekolah16.scale.set(0.9);
              elemSekolah16.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah16);
              ease.add(
                elemSekolah16,
                { x: -(pixiapp.screen.width/100)*85, y: -(pixiapp.screen.height/100)*5, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*85;
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah16);
              pixiapp.stage.removeChild(elemSekolah18);
              elemSekolah17.anchor.set(0.5);
              elemSekolah17.scale.set(0.9);
              elemSekolah17.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah17);
              ease.add(
                elemSekolah17,
                { x: -(pixiapp.screen.width/100)*15, y: (pixiapp.screen.height/100)*65, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = -(pixiapp.screen.width/100)*15;
              currentY = (pixiapp.screen.height/100)*65;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah17);
              pixiapp.stage.removeChild(elemSekolah19);
              elemSekolah18.anchor.set(0.5);
              elemSekolah18.scale.set(0.9);
              elemSekolah18.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah18);
              ease.add(
                elemSekolah18,
                { x: (pixiapp.screen.width/100)*135, y: (pixiapp.screen.height/100)*45, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*135;
              currentY = (pixiapp.screen.height/100)*45;
            },
            function(){
              $('body').css({"background-color": "#49463f"});
              pixiapp.stage.removeChild(elemSekolah18);
              pixiapp.stage.removeChild(elemSekolah20);
              elemSekolah19.anchor.set(0.5);
              elemSekolah19.scale.set(currentScale);
              elemSekolah19.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah19);
              ease.add(
                elemSekolah19,
                { x: (pixiapp.screen.width/100)*60, y: pixiapp.screen.height/100, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              currentX = (pixiapp.screen.width/100)*60;
              currentY = pixiapp.screen.height/100;
            },
            function(){
              pixiapp.stage.removeChild(elemSekolah19);
              elemSekolah20.anchor.set(0.5);
              elemSekolah20.scale.set(0.9);
              elemSekolah20.position.set(currentX, currentY);
              pixiapp.stage.addChild(elemSekolah20);
              ease.add(
                elemSekolah20,
                { x: pixiapp.screen.width / 2.05, y: pixiapp.screen.height/2, scale: 0.9},
                { reverse: false, duration: 1500, ease: 'easeInOutQuad' }
              );
              $('body').css({"background-color": "#fbf2d5"});
              currentX = pixiapp.screen.width / 2.05;
              currentY = pixiapp.screen.height / 2;
              currentScale = 0.9;
            }
            ];

          }
          //end mobile

            var clickstate = -1;

            $(document).ready(function(){

              document.getElementById("school-prev").disabled = true;

              $('#school-start').click( function (){
                  textCounter = (textCounter + 1) % textArr.length;
                  $(".info-box").html(textArr[textCounter]);
                  $(".info-box").css("display","block");
                  $('#school-next').css('display', 'block');
                  $('#school-prev').css('display', 'block');
                  clickstate += 1;
                  sekolahAnimation[clickstate]();
                  $('#school-start').css('display', 'none');
              });

              $('#start-again').click( function (){
                  textCounter = 1;
                  clickstate = 0;
                  pixiapp.stage.removeChild(elemSekolah20);
                  $('.ch-prev').removeClass('final');
                  $('.ch-next').removeClass('final');
                  $('.info-box').removeClass('finished');
                  $('#school-next').css('display', 'block');
                  $('#school-prev').css('display', 'block');
                  sekolahAnimation[clickstate]();
                  $(".info-box").html(textArr[textCounter]);
                  document.getElementById("school-prev").disabled = true;
                  document.getElementById("school-next").disabled = false;
              });

              $('#school-next').click( function (){

                textCounter = (textCounter + 1) % textArr.length;
                // basicText.text = textArr[textCounter];
                console.log(textCounter);

                if (textCounter == 0) {
                  document.getElementById("school-prev").disabled = true;
                } else if (textCounter >= 0) {
                  document.getElementById("school-prev").disabled = false;
                }

                if ( clickstate >= -1 && clickstate < sekolahAnimation.length-1) {
                  clickstate += 1;
                  sekolahAnimation[clickstate]();
                }
                else if (clickstate >= sekolahAnimation.length-1 && clickstate < 20) {
                  clickstate += 1;
                }
                if (textCounter == 20) {
                   document.getElementById("school-next").disabled = true;
                   $('.ch-prev').addClass('final');
                   $('.ch-next').addClass('final');
                   $('.info-box').addClass('finished');
                   $('#school-next').css('display', 'none');
                   $('#school-prev').css('display', 'none');
                }
                $(".info-box").html(textArr[textCounter]);
              });

              $('#school-prev').click( function (){

                textCounter = (textCounter - 1) % textArr.length;

                if (clickstate > 0 && clickstate < sekolahAnimation.length) {
                  clickstate -= 1;
                  sekolahAnimation[clickstate]();
                }
                else if (clickstate >= sekolahAnimation.length && clickstate <= 20) {
                  clickstate -= 1;
                }
                else if (clickstate <= 0) {
                  clickstate -= 1;
                }

                if (textCounter <= 0) {
                 document.getElementById("school-prev").disabled = true;
                }
                $(".info-box").html(textArr[textCounter]);
              });

            });

            var clueFound = window.location.hash.substr(1);
            if (clueFound == 'clue-9'){
                $('#rec-9').toggleClass("menu-open");
                pixiapp.stage.removeChild(elemSekolah0);
                textCounter = 3;
                clickstate = 2;
                $('.info-box').css('display', 'block');
                $('#school-next').css('display', 'block');
                $('#school-prev').css('display', 'block');
                sekolahAnimation[clickstate]();
                $(".info-box").html(textArr[textCounter]);
                document.getElementById("school-prev").disabled = false;
                document.getElementById("school-next").disabled = false;
                $('#school-start').css('display', 'none');
            }
            else if (clueFound == 'clue-8'){
                $('#rec-8').toggleClass("menu-open");
                pixiapp.stage.removeChild(elemSekolah0);
                textCounter = 18;
                clickstate = 17;
                $('.info-box').css('display', 'block');
                $('#school-next').css('display', 'block');
                $('#school-prev').css('display', 'block');
                sekolahAnimation[clickstate]();
                $(".info-box").html(textArr[textCounter]);
                document.getElementById("school-prev").disabled = false;
                document.getElementById("school-next").disabled = false;
                $('#school-start').css('display', 'none');
            }

        }
