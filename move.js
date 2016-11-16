/*
Zauberwürfel:

                        top1    top2    top3

                        top4    top5    top6

                        top7    top8    top9

left1   left2   left3   front1  front2  front3  right1  right2  right3  back1   back2   back3

left4   left5   left6   front4  front5  front6  right4  right5  right6  back4   back5   back6

left7   left8   left9   front7  front8  front9  right7  right8  right9  back7   back8   back9

                        bottom1 bottom2 bottom3

                        bottom4 bottom5 bottom6

                        bottom7 bottom8 bottom9
                        


        1:schwarz
        
2:grün  3:rot     4:blau   4:orange

        6:gelb        

Elemente des Zauberwürfels:

4 Mittelflächen: m1, m2, m3, m4, m5, m6 [schwarz, grün, rot, blau, orange, gelb]
12 Kanten: k12, k13, k14, k15, k23, k34, k45, k52, k62, k63, k64, k65
8 Ecken: e123, e134, e145, e125, e623, e634, e645, e625

*/

// Datenstruktur

//Mittelflächen
var m1 = "black";
var m2 = "green";
var m3 = "red";
var m4 = "blue";
var m5 = "orange";
var m6 = "yellow";
//Kanten
var k12 = new Array(m1,m2);
var k13 = new Array(m1,m3);
var k14 = new Array(m1,m4);
var k15 = new Array(m1,m5);
var k23 = new Array(m2,m3);
var k34 = new Array(m3,m4);
var k45 = new Array(m4,m5);
var k52 = new Array(m5,m2);
var k62 = new Array(m6,m2);
var k63 = new Array(m6,m3);
var k64 = new Array(m6,m4);
var k65 = new Array(m6,m5);
//Ecken
var e123 = new Array(m1, m2, m3);
var e134 = new Array(m1, m3, m4);
var e145 = new Array(m1, m4, m5);
var e125 = new Array(m1, m2, m5);
var e623 = new Array(m6, m2, m3);
var e634 = new Array(m6, m3, m4);
var e645 = new Array(m6, m4, m5);
var e625 = new Array(m6, m2, m5);


// Manipulationen

var l_shift = function(){
  //Ecken
  var e123_0=e123[0];
  var e123_1=e123[1];
  var e123_2=e123[2];
  e123[0]=e623[2];
  e123[1]=e623[1];
  e123[2]=e623[0];
  e623[0]=e625[2];
  e623[1]=e625[1];
  e623[2]=e625[0];
  e625[0]=e125[2];
  e625[1]=e125[1];
  e625[2]=e125[0];
  e125[0]=e123_2;
  e125[1]=e123_1;
  e125[2]=e123_0;
  //Kanten
  var k12_0=k12[0];
  var k12_1=k12[1];
  k12[0]=k23[1];
  k12[1]=k23[0];
  k23[0]=k62[1];
  k23[1]=k62[0];
  k62[0]=k52[0];
  k62[1]=k52[1];
  k52[0]=k12_0;
  k52[1]=k12_1;  
}

var m_shift = function(){
	//Mitten
	var m0=m1;
	m1=m3;
	m3=m6;
	m6=m5;
	m5=m0;
	//Kanten
	var k13_0=k13[0];
	var k13_1=k13[1];
	k13[0]=k63[1];
	k13[1]=k63[0];
	k63[1]=k65[0];
	k63[0]=k65[1];
	k65[0]=k15[1];
	k65[1]=k15[0];
	k15[0]=k13_1;
	k15[1]=k13_0;
}

var r = function(){
	//Ecken
	var e134_0=e134[0];
	var e134_1=e134[1];
	var e134_2=e134[2];
	e134[0]=e634[1];
	e134[1]=e634[0];
	e134[2]=e634[2];	
	e634[0]=e645[2];
	e634[1]=e645[0];
	e634[2]=e645[1];	
	e645[0]=e145[2];
	e645[1]=e145[1];
	e645[2]=e145[0];   
	e145[0]=e134_1;
	e145[1]=e134_2;
	e145[2]=e134_0;
	//Kanten
	var k34_0=k34[0];
	var k34_1=k34[1];
	k34[0]=k64[0];
	k34[1]=k64[1];
	k64[0]=k45[1];
	k64[1]=k45[0];
	k45[0]=k14[1];
	k45[1]=k14[0];
	k14[0]=k34_0;
	k14[1]=k34_1;	
}

var u_shift = function(){
	//Ecken
	var e123_0=e123[0];
	var e123_1=e123[1];
	var e123_2=e123[2];
	e123[0]=e125[0];
	e123[1]=e125[2];
	e123[2]=e125[1];
	e125[0]=e145[0];
	e125[1]=e145[2];
	e125[2]=e145[1];
	e145[0]=e134[0];
	e145[1]=e134[1];
	e145[2]=e134[2];
	e134[0]=e123_0;
	e134[1]=e123_1;
	e134[2]=e123_2;
	//Kanten
	var k12_0=k12[0];
	var k12_1=k12[1];
	k12[0]=k15[0];
	k12[1]=k15[1];
	k15[0]=k14[0];
	k15[1]=k14[1];
	k14[0]=k13[0];
	k14[1]=k13[1];
	k13[0]=k12_0;
	k13[1]=k12_1;
}

var e_shift = function(){
	//Mitten
	var m0 =m3;
	m3=m2;
	m2=m5;
	m5=m4;
	m4=m0;
	//Kanten
	var k23_0=k23[0];
	var k23_1=k23[1];
	k23[0]=k52[0];
	k23[1]=k52[1];
	k52[0]=k45[0];
	k52[1]=k45[1];
	k45[0]=k34[0];
	k45[1]=k34[1];
	k34[0]=k23_0;
	k34[1]=k23_1;
}

var d = function(){
	//Ecken
	var e623_0=e623[0];
	var e623_1=e623[1];
	var e623_2=e623[2];
	e623[0]=e625[0];
	e623[1]=e625[2];
	e623[2]=e625[1];
	e625[0]=e645[0];
	e625[1]=e645[2];
	e625[2]=e645[1];
	e645[0]=e634[0];
	e645[1]=e634[1];
	e645[2]=e634[2];
	e634[0]=e623_0;
	e634[1]=e623_1;
	e634[2]=e623_2;	
	//Kanten
	var k63_0=k63[0];
	var k63_1=k63[1];
	k63[0]=k62[0];
	k63[1]=k62[1];
	k62[0]=k65[0];
	k62[1]=k65[1];
	k65[0]=k64[0];
	k65[1]=k64[1];
	k64[0]=k63_0;
	k64[1]=k63_1;
}

var f = function(){
	//Ecken
   var e123_0=e123[0];
   var e123_1=e123[1];
   var e123_2=e123[2];
   e123[0]=e623[1];
   e123[1]=e623[0];
   e123[2]=e623[2];
   e623[0]=e634[2];
   e623[1]=e634[0];
   e623[2]=e634[1];
   e634[0]=e134[2];
   e634[1]=e134[1];
   e634[2]=e134[0];
   e134[0]=e123_1;
   e134[1]=e123_2;
   e134[2]=e123_0;   	
	//Kanten
	k13_0=k13[0];
	k13_1=k13[1];
	k13[0]=k23[0];
	k13[1]=k23[1];
	k23[0]=k63[0];
	k23[1]=k63[1];
	k63[0]=k34[1];
	k63[1]=k34[0];
	k34[0]=k13_1;
	k34[1]=k13_0;
}

var l=function(){
	 l_shift();
    l_shift();
    l_shift();
}

var m=function(){
	m_shift();
   m_shift();
   m_shift();
}

var r_shift=function(){
	 r();
    r();
    r();
}

var u=function(){
	 u_shift();
    u_shift();
    u_shift();
}

var e=function(){
    e_shift();
    e_shift();
    e_shift();
}

var d_shift=function(){
	 d();
    d();
    d();
}

var f_shift=function(){
	 f();
    f();
    f();
}

var x=function(){
	 l_shift();
    m_shift();
    r();
}

var x_shift=function(){
	x();
	x();
	x();
}

var y=function(){
	 u_shift();
    e_shift();
    d();
}

var y_shift=function(){
	 y();
	 y();
	 y();
}

//Buttons
    
var buttonLs = document.querySelector('#btnLs');
  btnLs.addEventListener('click',function(){
    l_shift();
    showCanvas();
});

var buttonMs = document.querySelector('#btnMs');
  btnMs.addEventListener('click',function(){
    m_shift();
    showCanvas();
});

var buttonR = document.querySelector('#btnR');
  btnR.addEventListener('click',function(){
    r();
    showCanvas();
});

var buttonL = document.querySelector('#btnL');
  btnL.addEventListener('click',function(){
	 l();
    showCanvas();
});

var buttonM = document.querySelector('#btnM');
  btnM.addEventListener('click',function(){
    m();
    showCanvas();
});

var buttonRs = document.querySelector('#btnRs');
  btnRs.addEventListener('click',function(){
	 r_shift();
	 showCanvas();
});

var buttonUs = document.querySelector('#btnUs');
  btnUs.addEventListener('click',function(){
    u_shift();
    showCanvas();
});

var buttonEs = document.querySelector('#btnEs');
  btnEs.addEventListener('click',function(){
    e_shift();
    showCanvas();
});

var buttonD = document.querySelector('#btnD');
  btnD.addEventListener('click',function(){
    d();
    showCanvas();
});


var buttonU = document.querySelector('#btnU');
  btnU.addEventListener('click',function(){
    u();
    showCanvas();
});

var buttonE = document.querySelector('#btnE');
  btnE.addEventListener('click',function(){
	 e();
    showCanvas();
});

var buttonDs = document.querySelector('#btnDs');
  btnDs.addEventListener('click',function(){
    d_shift();
    showCanvas();
});

var buttonF = document.querySelector('#btnF');
  btnF.addEventListener('click',function(){
    f();
    showCanvas();
});


var buttonFs = document.querySelector('#btnFs');
  btnFs.addEventListener('click',function(){
    f_shift();
    showCanvas();
});

var buttonX = document.querySelector('#btnX');
  btnX.addEventListener('click',function(){
	 x();
    showCanvas();
});

var buttonXs = document.querySelector('#btnXs');
  btnXs.addEventListener('click',function(){
    x_shift();
    showCanvas();
});

var buttonY = document.querySelector('#btnY');
  btnY.addEventListener('click',function(){
    y();
    showCanvas();
});

var buttonYs = document.querySelector('#btnYs');
  btnYs.addEventListener('click',function(){
	 y_shift();
    showCanvas();
});

//Notation
function handleClick(myRadio) {
	if (myRadio.value == 'en'){
	   buttonLs.innerHTML='L&#8593;';
	   buttonMs.innerHTML='M&#8593;';
	   buttonR.innerHTML='R&#8593;';
	   buttonL.innerHTML='L&#8595;';
	   buttonM.innerHTML='M&#8595;';
	   buttonRs.innerHTML='R&#8595;';
	   buttonUs.innerHTML='O&#8594;';
	   buttonEs.innerHTML='M&#8594;';
	   buttonD.innerHTML='U&#8594;';
	   buttonU.innerHTML='O&#8592;';
	   buttonE.innerHTML='M&#8592;';
	   buttonDs.innerHTML='U&#8592;';
	   buttonF.innerHTML='&#8635;';
	   buttonFs.innerHTML='&#8634;';
	   buttonX.innerHTML='W&#8593;';
	   buttonXs.innerHTML='W&#8595;';
	   buttonY.innerHTML='W&#8594;';
	   buttonYs.innerHTML='W&#8592;';
	}
	else {
		buttonLs.innerHTML='L&#39;';
	   buttonMs.innerHTML='M&#39;';
		buttonR.innerHTML='R ';
		buttonL.innerHTML='L ';
		buttonM.innerHTML='M ';
		buttonRs.innerHTML='R&#39;';
	   buttonUs.innerHTML='U&#39;';
	   buttonEs.innerHTML='E&#39;';
	   buttonD.innerHTML='D ';
	   buttonU.innerHTML='U ';
	   buttonE.innerHTML='E ';
	   buttonDs.innerHTML='D&#39;';
	   buttonF.innerHTML='F ';
	   buttonFs.innerHTML='F&#39;';
	   buttonX.innerHTML='X ';
	   buttonXs.innerHTML='X&#39;';
	   buttonY.innerHTML='Y ';
	   buttonYs.innerHTML='Y&#39;';
	}
}

// 2 Ansichten
document.getElementById('radio_normal').checked=true;
document.getElementById('radio_3D').checked=true;

var rombus_oben=function(c,co,x,y){
		c.fillStyle =co;
		c.beginPath();
		c.moveTo(x,y);
		c.lineTo(x+50,y);
    	c.lineTo(x+30,y+20);
    	c.lineTo(x-20,y+20);
    	c.fill();
}

var rombus_rechts=function(c,co,x,y){
		c.fillStyle =co;
		c.beginPath();
		c.moveTo(x,y);
		c.lineTo(x+20,y-20);
    	c.lineTo(x+20,y+30);
    	c.lineTo(x,y+50);
    	c.fill();
}

var show_3D=function(c){
// Canvas hellgrau
	c.fillStyle="lightgray";
	c.fillRect(0,0,300,300);	

// Umrisse weiss
		c.fillStyle = '#fff';
		c.beginPath();
    	c.moveTo(105,20);
    	c.lineTo(275,20);
    	c.lineTo(280,25);
    	c.lineTo(280,195);
    	c.lineTo(200,275);
    	c.lineTo(190,280);
    	c.lineTo(20,280);
    	c.lineTo(20,110);
		c.lineTo(25,100);
    	c.fill();
		
		//Front
		c.fillStyle = e123[2];
		c.fillRect(20,110,50,50);	
		c.fillStyle = k13[1];	
		c.fillRect(80,110,50,50);
		c.fillStyle = e134[1];	
		c.fillRect(140,110,50,50);		
		c.fillStyle = k23[1];
		c.fillRect(20,170,50,50);
		c.fillStyle = m3;	
		c.fillRect(80,170,50,50);
		c.fillStyle = k34[0];	
		c.fillRect(140,170,50,50);		
		c.fillStyle = e623[2];
		c.fillRect(20,230,50,50);
		c.fillStyle = k63[1];
		c.fillRect(80,230,50,50);
		c.fillStyle = e634[1];	
		c.fillRect(140,230,50,50);	
		
		//oben
    	rombus_oben(c,e125[0],105,20);
    	rombus_oben(c,k15[0],165,20);
		rombus_oben(c,e145[0],225,20);
		rombus_oben(c,k12[0],75,50);
		rombus_oben(c,m1,135,50);
		rombus_oben(c,k14[0],195,50);
		rombus_oben(c,e123[0],45,80);
		rombus_oben(c,k13[0],105,80);
		rombus_oben(c,e134[0],165,80);
		
		//rechts
		rombus_rechts(c,e134[2],200,105);
		rombus_rechts(c,k14[1],230,75);
		rombus_rechts(c,e145[1],260,45);
		rombus_rechts(c,k34[1],200,165);
		rombus_rechts(c,m4,230,135);
		rombus_rechts(c,k45[0],260,105);
		rombus_rechts(c,e634[2],200,225);
		rombus_rechts(c,k64[1],230,195);
		rombus_rechts(c,e645[1],260,165);
}

var boolean3D=true;

var rechteck = function(c,co,x,y){
	c.fillStyle = co;
	c.fillRect(x,y,20,20);
	c.strokeStyle = '#fff';
	c.lineWidth=2;
	c.strokeRect(x,y,20,20)
	
}

var show_2D = function(c){
	//Canvas hellgrau
	
	c.fillStyle="lightgray";
	c.fillRect(0,0,300,300);
	var x=90;
	var y=60;
	var b=20;
	
	// oben
	rechteck(c,e125[0],x,y);	
	rechteck(c,k15[0],x+b,y);
	rechteck(c,e145[0],x+2*b,y);
	rechteck(c,k12[0],x,y+b);
	rechteck(c,m1,x+b,y+b);
	rechteck(c,k14[0],x+2*b,y+b);
	rechteck(c,e123[0],x,y+2*b);
	rechteck(c,k13[0],x+b,y+2*b);
	rechteck(c,e134[0],x+2*b,y+2*b);
	
	// links
	x=x-3*b;
	y=y+3*b;
	rechteck(c,e125[1],x,y);
	rechteck(c,k12[1],x+b,y);
	rechteck(c,e123[1],x+2*b,y);
	rechteck(c,k52[1],x,y+b);
	rechteck(c,m2,x+b,y+b);
	rechteck(c,k23[0],x+2*b,y+b);
	rechteck(c,e625[1],x,y+2*b);
	rechteck(c,k62[1],x+b,y+2*b);
	rechteck(c,e623[1],x+2*b,y+2*b);
	
	// vorne
	x=x+3*b;
	rechteck(c,e123[2],x,y);
	rechteck(c,k13[1],x+b,y);
	rechteck(c,e134[1],x+2*b,y);
	rechteck(c,k23[1],x,y+b);
	rechteck(c,m3,x+b,y+b);
	rechteck(c,k34[0],x+2*b,y+b);
	rechteck(c,e623[2],x,y+2*b);
	rechteck(c,k63[1],x+b,y+2*b);
	rechteck(c,e634[1],x+2*b,y+2*b);
	
	//links
	x=x+3*b;
	rechteck(c,e134[2],x,y);
	rechteck(c,k14[1],x+b,y);
	rechteck(c,e145[1],x+2*b,y);
	rechteck(c,k34[1],x,y+b);
	rechteck(c,m4,x+b,y+b);
	rechteck(c,k45[0],x+2*b,y+b);
	rechteck(c,e634[2],x,y+2*b);
	rechteck(c,k64[1],x+b,y+2*b);
	rechteck(c,e645[1],x+2*b,y+2*b);
	
	//hinten
	x=x+3*b;	
	rechteck(c,e145[2],x,y);
	rechteck(c,k15[1],x+b,y);
	rechteck(c,e125[2],x+2*b,y);
	rechteck(c,k45[1],x,y+b);
	rechteck(c,m5,x+b,y+b);
	rechteck(c,k52[0],x+2*b,y+b);
	rechteck(c,e645[2],x,y+2*b);
	rechteck(c,k65[1],x+b,y+2*b);
	rechteck(c,e625[2],x+2*b,y+2*b);
	
	//unten
	x=x-6*b;
	y=y+3*b;
	rechteck(c,e623[0],x,y);
	rechteck(c,k63[0],x+b,y);
	rechteck(c,e634[0],x+2*b,y);
	rechteck(c,k62[0],x,y+b);
	rechteck(c,m6,x+b,y+b);
	rechteck(c,k64[0],x+2*b,y+b);
	rechteck(c,e625[0],x,y+2*b);
	rechteck(c,k65[0],x+b,y+2*b);
	rechteck(c,e645[0],x+2*b,y+2*b);
}

var canvasE1 = document.querySelector('#canvas');
var canvas =canvasE1.getContext('2d');
var showCanvas = function(){
	if (boolean3D){
	  show_3D(canvas);
	}
	else {
	  show_2D(canvas);
	}
}

function handleViewClick(myRadio) {
	if (myRadio.value == '3D'){
		boolean3D=true;		
	}
	else {
		boolean3D=false;
	}
	showCanvas();
}
showCanvas();

// Saetze
var satz1 = function(){
	 f_shift();d();f();d();f_shift();d();d();f();
}

var buttonS1 = document.querySelector('#btn_satz1');
  btn_satz1.addEventListener('click',function(){
	 satz1(); 
    showCanvas();
});

var satz2 = function(){
	 m();d_shift();m_shift();d();d();m();d_shift();m_shift();
}

var buttonS2 = document.querySelector('#btn_satz2');
  btn_satz2.addEventListener('click',function(){
	 satz2();
    showCanvas();
});

var satz3=function(){
	f();d();f_shift();d();f();d();d();f_shift();d();
}
var buttonS3 = document.querySelector('#btn_satz3');
  btn_satz3.addEventListener('click',function(){
	 satz3();
    showCanvas();
});

var satz4 = function(){
	f_shift();m_shift();d();m();f();m_shift();d_shift();m();
}

var buttonS4 = document.querySelector('#btn_satz4');
  btn_satz4.addEventListener('click',function(){
	 satz4();
    showCanvas();
});

var satz4s = function(){
	f();m_shift();d_shift();m();f_shift();m_shift();d();m();
}

var buttonS4s = document.querySelector('#btn_satz4s');
  btn_satz4s.addEventListener('click',function(){
	 satz4s();
    showCanvas();
});

var satz5 = function(){
	d();r();u();u();r_shift();d_shift();r();u();u();r_shift();d();d();y();satz4();d();d();y_shift();
}

var buttonS5 = document.querySelector('#btn_satz5');
  btn_satz5.addEventListener('click',function(){
	 satz5();
    showCanvas();
});

var satz5s = function(){
	d_shift();l_shift();u();u();l();d();l_shift();u();u();l();d();d();y_shift();satz4s();d();d();y();
}

var buttonS5s = document.querySelector('#btn_satz5s');
  btn_satz5s.addEventListener('click',function(){
	 satz5s();
    showCanvas();
});