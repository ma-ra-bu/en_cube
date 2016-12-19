/*
Zauberwürfel:

                        top1    top2    top3
                          0       1       2
                        top4    top5    top6
                          3       4       5
                        top7    top8    top9
                          6       7       8
left1   left2   left3   front1  front2  front3  right1  right2  right3  back1   back2   back3
  9      10      11      18      19      20      27      28      29      36      37      38
left4   left5   left6   front4  front5  front6  right4  right5  right6  back4   back5   back6
 12      13      14      21      22      23      30      31      32      39      40      41
left7   left8   left9   front7  front8  front9  right7  right8  right9  back7   back8   back9
 15      16      17      24      25      26      33      34      35      42      43      44
                        bottom1 bottom2 bottom3
                         45      46      47
                        bottom4 bottom5 bottom6
                         48      49      50
                        bottom7 bottom8 bottom9
                         51      52      53

Zahle 0 bis 53 sind Indexe des Arrays v54[]                        


        1:schwarz
        
2:grün  3:rot     4:blau   5:orange

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

var solution="";
var notation = 'en';
var v54 = [];
var eerror=false;
var eerror_count=0;
var eerror_max=300;

// Manipulationen

var l_shift = function(){
  solution=solution+"l' ";
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
  solution=solution+"m' ";
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
  solution=solution+"r " ;
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
   solution=solution+"u' " ;
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
  solution=solution+"e' " ;
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
  solution=solution+"d " ;
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
   solution=solution+"f " ;
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

function en_notation(){
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

function normal_notation() {
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

//Notation
function handleClick(myRadio) {
	if (myRadio.value == 'en'){
		notation='en';
	   en_notation();
	}
	else {
		notation='standard';
		normal_notation();
	}
}

// 2 Ansichten
document.getElementById('radio_en').checked=true;
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
/*
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
*/
var satz4 = function(){
	f_shift();m_shift();d();m();f();m_shift();d_shift();m();
}
/*
var buttonS4 = document.querySelector('#btn_satz4');
  btn_satz4.addEventListener('click',function(){
	 satz4();
    showCanvas();
});
*/
var satz4s = function(){
	f();m_shift();d_shift();m();f_shift();m_shift();d();m();
}
/*
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
*/


function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

var backup_state='';

var state2arr = function () {
  v54[4]=m1;
  v54[13]=m2;
  v54[22]=m3;
  v54[31]=m4;
  v54[40]=m5;
  v54[49]=m6;
  //Kanten
  v54[3]=k12[0];v54[10]=k12[1];
  v54[7]=k13[0];v54[19]=k13[1];
  v54[5]=k14[0];v54[28]=k14[1];
  v54[1]=k15[0];v54[37]=k15[1];
  v54[14]=k23[0];v54[21]=k23[1];
  v54[23]=k34[0];v54[30]=k34[1];
  v54[32]=k45[0];v54[39]=k45[1];
  v54[41]=k52[0];v54[12]=k52[1];
  v54[48]=k62[0];v54[16]=k62[1];
  v54[46]=k63[0];v54[25]=k63[1];
  v54[50]=k64[0];v54[34]=k64[1];
  v54[52]=k65[0];v54[43]=k65[1];
  //Ecken
  v54[6]=e123[0];v54[11]=e123[1];v54[18]=e123[2];
  v54[8]=e134[0];v54[20]=e134[1];v54[27]=e134[2];
  v54[2]=e145[0];v54[29]=e145[1];v54[36]=e145[2];
  v54[0]=e125[0];v54[9]=e125[1];v54[38]=e125[2];
  v54[45]=e623[0];v54[17]=e623[1];v54[24]=e623[2];
  v54[47]=e634[0];v54[26]=e634[1];v54[33]=e634[2];
  v54[53]=e645[0];v54[35]=e645[1];v54[42]=e645[2];
  v54[51]=e625[0];v54[15]=e625[1];v54[44]=e625[2];  
}

var arr2state = function (v54) {
  m1 = v54[4];
  m2 = v54[13];
  m3 = v54[22];
  m4 = v54[31];
  m5 = v54[40];
  m6 = v54[49];
  //Kanten
  k12 = new Array(v54[3],v54[10]);
  k13 = new Array(v54[7],v54[19]);
  k14 = new Array(v54[5],v54[28]);
  k15 = new Array(v54[1],v54[37]);
  k23 = new Array(v54[14],v54[21]);
  k34 = new Array(v54[23],v54[30]);
  k45 = new Array(v54[32],v54[39]);
  k52 = new Array(v54[41],v54[12]);
  k62 = new Array(v54[48],v54[16]);
  k63 = new Array(v54[46],v54[25]);
  k64 = new Array(v54[50],v54[34]);
  k65 = new Array(v54[52],v54[43]);
  //Ecken
  e123 = new Array(v54[6],v54[11],v54[18]);
  e134 = new Array(v54[8],v54[20],v54[27]);
  e145 = new Array(v54[2],v54[29],v54[36]);
  e125 = new Array(v54[0],v54[9],v54[38]);
  e623 = new Array(v54[45],v54[17],v54[24]);
  e634 = new Array(v54[47],v54[26],v54[33]);
  e645 = new Array(v54[53],v54[35],v54[42]);
  e625 = new Array(v54[51],v54[15],v54[44]);  
}


var queryString=gup('farben');
if (queryString){  
  v54=queryString.split('_');
  arr2state(v54); 
  showCanvas();
}


var black_top_red_front = function(){
	switch(m1) {
	  case 'orange':
	    switch(m3){
	    	case 'blue':
	    	  y();x();break;
	    	case 'green':
	    	  y_shift();x();break;
	    	case 'yellow':
	    	  y();y();x();break;
	    	case 'black':
	    	  x();break;
	    };break;	    
	  case 'yellow':
	    x();x();break;
	  case 'blue':
	    switch(m3){
	    	case 'orange':
	    	  y_shift();x();break;
	    	case 'red':
	    	  y();x();break;
	    	case 'yellow':
	    	  y();y();x();break;
	    	case 'black':
	    	  x();break;
	    };break;
	  case 'red':
	    switch(m3){
	    	case 'blue':
	    	  y_shift();x();break;
	    	case 'green':
	    	  y();x();break;
	    	case 'yellow':
	    	  y();y();x();break;
	    	case 'black':
	    	  x();break;
	    };break;	
	  case 'green':
	    switch(m3){
	    	case 'orange':
	    	  y();x();break;
	    	case 'red':
	    	  y_shift();x();break;
	    	case 'yellow':
	    	  y();y();x();break;
	    	case 'black':
	    	  x();break;
	    };break;
	 }
	 switch (m1){
	  case 'black':
	    switch(m3){
	      case 'blue':
	        y();break;
	      case 'green':
	        y_shift();break;
	      case 'orange':
	        y();y();break;
	    }break;	    
	}
};

var edge_top = function(c1,c2){
  // Kante oben
  if (k13[0] == c1 && k13[1] == c2){
  	 f();f();d();m();d_shift();m_shift();  	   
  }
  if (k14[0] == c2 && k14[1] == c1){
  	 r();r();d_shift();f();f();
  }
  if (k14[0] == c1 && k14[1] == c2){
  	 u();f();f();u_shift();d();m();d_shift();m_shift();
  }  
  if (k15[0] == c2 && k15[1] == c1){
  	 u();u();f();f();u();u();f();f();
  }
  if (k15[0] == c1 && k15[1] == c2){
  	 u();u();f();f();u();u();d();m();d_shift();m_shift();
  }  
  if (k12[0] == c2 && k12[1] == c1){
  	 l();l();d();f();f();
  }
  if (k12[0] == c1 && k12[1] == c2){
  	 u_shift();f();f();u();d();m();d_shift();m_shift();
  }
  // Kante Mitte
  if (k34[0] == c1 && k34[1] == c2){
    f_shift();  
  }
  if (k34[0] == c2 && k34[1] == c1){
    r_shift();d_shift();r();f();f();
  }
  if (k45[0] == c1 && k45[1] == c2){
    e();f_shift();e_shift();  
  }
  if (k45[0] == c2 && k45[1] == c1){
    e();r_shift();d_shift();r();f();f();e_shift();
  }
  if (k23[0] == c2 && k23[1] == c1){
    f();  
  }
  if (k23[0] == c1 && k23[1] == c2){
    l();d();l_shift();f();f();
  }
  if (k52[0] == c2 && k52[1] == c1){
    e_shift();f();e();  
  }
  if (k52[0] == c1 && k52[1] == c2){
    e_shift();l();d();l_shift();f();f();e();
  }
  // Kante unten
  if (k63[0] == c2 && k63[1] == c1){
    f();f(); 
  }
  if (k63[0] == c1 && k63[1] == c2){
    d();m();d_shift();m_shift();
  }
  if (k64[0] == c2 && k64[1] == c1){
    d_shift();f();f(); 
  }
  if (k64[0] == c1 && k64[1] == c2){
    m();d_shift();m_shift();
  }
  if (k65[0] == c2 && k65[1] == c1){
    d();d();f();f(); 
  }
  if (k65[0] == c1 && k65[1] == c2){
    d_shift();m();d_shift();m_shift();
  }
  if (k62[0] == c2 && k62[1] == c1){ 
    d();f();f();
  }
  if (k62[0] == c1 && k62[1] == c2){
    m();d();m_shift();
  }
}

var edge_middle=function(c1,c2) {
  if (k23[0] == c2 && k23[1] == c1){
    l();d();l_shift();d_shift();f_shift();d();f();
  }
  if(k34[0] == c2 && k34[1] == c1){
    e();l();d();l_shift();e_shift();d_shift();f_shift();d();f();
  }
  if(k34[0] == c1 && k34[1] == c2){
    r_shift();d();r();f_shift();d();d();f();
  }
  if(k45[0] == c2 && k45[1] == c1){
    e();e();l();d();l_shift();e_shift();e_shift();d_shift();f_shift();d();f();
  }
  if(k45[0] == c1 && k45[1] == c2){
    e();r_shift();d();r();e_shift();f_shift();d();d();f();
  }
  if(k52[0] == c2 && k52[1] == c1){
    e_shift();l();d();l_shift();e();d_shift();f_shift();d();f();
  }
  if(k52[0] == c1 && k52[1] == c2){
    e();e();r_shift();d();r();e_shift();e_shift();f_shift();d();d();f();
  }
  if(k63[0] == c1 && k63[1] == c2){
  	 d();f_shift();d_shift();f();
  }
  if(k63[1] == c1 && k63[0] == c2){
  	 l();d_shift();l_shift();
  }
  if(k64[0] == c1 && k64[1] == c2){
  	 f_shift();d_shift();f();
  }
  if(k64[1] == c1 && k64[0] == c2){
  	 d_shift();l();d_shift();l_shift();
  }
  if(k65[0] == c1 && k65[1] == c2){
  	 d_shift();f_shift();d_shift();f();
  }
  if(k65[1] == c1 && k65[0] == c2){
  	 d_shift();d_shift();l();d_shift();l_shift();
  }
  if(k62[0] == c1 && k62[1] == c2){
  	d();d();f_shift();d_shift();f();
  }
  if(k62[1] == c1 && k62[0] == c2){
  	 d();l();d_shift();l_shift();
  }
  
  
}

var corner_top_left=function(c1,c2,c3){ // c1=black c2=green c3=red
	if(e123[0] == c2 && e123[1] == c3 && e123[2] == c1){
		y();satz4s();satz4s();y_shift();	
	}
	if(e123[0] == c3 && e123[1] == c1 && e123[2] == c2){
		satz4();satz4();
	}
	
	if(e134[0] == c1 && e134[1] == c2 && e134[2] == c3){
		satz4s();d();satz4();
	}
	if(e134[0] == c3 && e134[1] == c1 && e134[2] == c2){
	   y_shift(),satz4();y();d_shift();satz4();
	}
	if(e134[0] == c2 && e134[1] == c3 && e134[2] == c1){
	   satz4s();y();d_shift();satz4s();y_shift();
	}

	if(e145[0] == c1 && e145[1] == c2 && e145[2] == c3){
		u();satz4s();u_shift();d();satz4();
	}
	if(e145[0] == c2 && e145[1] == c3 && e145[2] == c1){
		y_shift();satz4s();y();y();d();d();satz4s();y_shift();
	}
	if(e145[0] == c3 && e145[1] == c1 && e145[2] == c2){
	   u();y_shift(),satz4();y();u_shift();d_shift();satz4();
	}
	
	if(e125[0] == c1 && e125[1] == c3 && e125[2] == c2){
		u();u();satz4s();u_shift();u_shift();d();satz4();
	}	
	if(e125[0] == c3 && e125[1] == c2 && e125[2] == c1){
	   y();satz4();y_shift();d();satz4();
	}
	if(e125[0] == c2 && e125[1] == c1 && e125[2] == c3){
		y();y();satz4s();y_shift();d();satz4s();
	}
	
   // Wuerfel ist in der untersten Ebene
   
   if (e623[0]==c1 && e623[1]==c3 &&e623[2]==c2) {
   	satz4();y();satz4s();y_shift();   	
   }
   if (e623[0]==c3 && e623[1]==c2 &&e623[2]==c1) {
   	d();y();satz4s();y_shift();   	
   }
   if (e623[0]==c2 && e623[1]==c1 &&e623[2]==c3) {
   	d_shift();satz4();   	
   }
   
   if (e634[0]==c1 && e634[1]==c3 &&e634[2]==c2) {
   	d_shift();satz4();y();satz4s();y_shift();   	
   }
   if (e634[0]==c3 && e634[1]==c2 &&e634[2]==c1) {
   	y();satz4s();y_shift();   	
   }
   if (e634[0]==c2 && e634[1]==c1 &&e634[2]==c3) {
   	d_shift();d_shift();satz4();   	
   }
   
   if (e645[0]==c1 && e645[1]==c3 &&e645[2]==c2) {
   	d_shift();d_shift();satz4();y();satz4s();y_shift();   	
   }
   if (e645[0]==c3 && e645[1]==c2 &&e645[2]==c1) {
   	d_shift();y();satz4s();y_shift();   	
   }
   if (e645[0]==c2 && e645[1]==c1 &&e645[2]==c3) {
   	d();satz4();   	
   }
   
   if (e625[0]==c1 && e625[1]==c2 &&e625[2]==c3) {
   	d();satz4();y();satz4s();y_shift();   	
   }
   if (e625[0]==c3 && e625[1]==c1 &&e625[2]==c2) {
   	d();d();y();satz4s();y_shift();   	
   }
   if (e625[0]==c2 && e625[1]==c3 &&e625[2]==c1) {
   	satz4();   	
   }
}

var kreuz_unten =function(c1){
  // gelbes Kreuz erstellen
  while((k12[0] != c1 || k13[0] != c1 || k14[0] != c1 || k15[0] != c1)&& !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
  		
    if (k12[0] != c1 && k13[0] != c1 && k14[0] != c1 && k15[0] != c1) {
    	f();r();u();r_shift();u_shift();f_shift();
    }
    	
    if (k12[0] == c1 && k13[0] != c1 && k14[0] != c1 && k15[0] == c1) {
    	f();r();u();r_shift();u_shift();f_shift();
    }
    
    if (k12[0] == c1 && k13[0] != c1 && k14[0] == c1 && k15[0] != c1) {
    	f();r();u();r_shift();u_shift();f_shift();
      solution=solution+"\n"; 
    }
    
    if (k12[0] != c1 || k13[0] != c1 || k14[0] != c1 || k15[0] != c1) {
    	u();
    }     
  }
  
  // Farben des Kreuzes ausrichten
  var richtigeFarben=0;
  while ((richtigeFarben<2)&& !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
  	 while ((richtigeFarben <2&& !eerror)){
  	   eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
  	 	richtigeFarben=0;
  	 	if(k12[1]==m2){richtigeFarben++;};
  	 	if(k13[1]==m3){richtigeFarben++;};
  	 	if(k14[1]==m4){richtigeFarben++;};
  	 	if(k15[1]==m5){richtigeFarben++;};
      if(richtigeFarben <2){u();};
    }  
    //alert(richtigeFarben);
    if (richtigeFarben==2) {
    	while((k15[1]!=m5)&& !eerror){
  	     eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
    	  y();
    	}
    	if (k12[1]==m2) {
    		y_shift();
    	}
    	r();u();r_shift();u();r();u();u(),r_shift();
      solution=solution+"\n";
    	richtigeFarben=0;
    }    
 }
}

var corner_down= function(){
  // Ist eine Kante bereits am rechten Ort? Wenn nicht, dann ausrichten!
  var corner_place = false;
  var int_corner_place=0;
  while ((!corner_place)&& !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
    if(e134.indexOf(m1)>=0 && e134.indexOf(m3)>=0 && e134.indexOf(m4)>=0){
    	corner_place=true;
    } else {     
      y();
    }
    int_corner_place++;
    if (!corner_place && (int_corner_place % 5 ==0)){
    	u();r();u_shift();l_shift();u();r_shift();u_shift();l();
      solution=solution+"\n";
    }
  }
  // Alle Kanten an den rechten Ort bringen!
  while ((!((e123.indexOf(m1)>=0 && e123.indexOf(m2)>=0 && e123.indexOf(m3)>=0)&&
           (e134.indexOf(m1)>=0 && e134.indexOf(m3)>=0 && e134.indexOf(m4)>=0)&&
           (e145.indexOf(m1)>=0 && e145.indexOf(m4)>=0 && e145.indexOf(m5)>=0)&&
           (e125.indexOf(m1)>=0 && e125.indexOf(m2)>=0 && e125.indexOf(m5)>=0)))
           && !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
    u();r();u_shift();l_shift();u();r_shift();u_shift();l();    
    solution=solution+"\n";
  }
  // Die Kanten richtig drehen!
  var solved=false;
  test_solved=0;
  while((!solved && e134[0] == m1)&& !eerror){
  	eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
  	y();
  	test_solved++;
  	if (test_solved==5){
      solved=true;
      solution=solution+"\n";  	
  	}
  	  
  }  
  while ((!solved)&& !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
    while ((e134[0]!=m1)&& !eerror){
  	   eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
      r_shift();d_shift();r();d();      
      solution=solution+"\n";
    }
    //alert(e123+' '+e134+' '+e145+' '+e125);
    u();
    solved=e123[0]==m1 && e134[0]==m1 && e145[0]==m1 && e125[0]==m1;
  }
  while ((k12[1]!=m2)&& !eerror){
  	 eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
    u();  
  }
  x();x();
  while ((m3!='red')&& !eerror){
  	eerror_count++;if (eerror_count>eerror_max) {eerror=true;}
  	y();
  }
}

var en_solution = function(s){
  i=s.length;j=0;
  while (i!=j){
    j=i;
  	 s=s.replace(/l'/g,"L\u2191");
  	 s=s.replace(/l/g,"L\u2193");
  	 s=s.replace(/m'/g,"M\u2191");
  	 s=s.replace(/m/g,"M\u2193");
    s=s.replace(/r'/g,"R\u2193");
    s=s.replace(/r/g,"R\u2191");
    s=s.replace(/u'/g,"O\u2192");
    s=s.replace(/u/g,"O\u2190");
  	 s=s.replace(/e'/g,"M\u2192");
  	 s=s.replace(/e/g,"M\u2190");
  	 s=s.replace(/d'/g,"U\u2190");
    s=s.replace(/d/g,"U\u2192");
    s=s.replace(/f'/g,"\u21ba");
    s=s.replace(/f/g,"\u21bb");
    s=s.replace(/x'/g,"W\u2193");
    s=s.replace(/x/g,"W\u2191");
    s=s.replace(/y'/g,"W\u2190");
    s=s.replace(/y/g,"W\u2192");

    i=s.length;
  }
  return s;
}

var simplified = function(s){
  i=s.length;j=0;
  while (i!=j){
    j=i;
    s=s.replace(/l' l' l'/g,"l");
    s=s.replace(/m' m' m'/g,"m");
    s=s.replace(/r r r/g,"r'");
    s=s.replace(/u u u/g,"u'");
    s=s.replace(/e' e' e'/g,"e");
    s=s.replace(/d d d/g,"d'");
    s=s.replace(/f f f/g,"f'");
    s=s.replace(/l' m' r/g,"x");
    s=s.replace(/x x x/g,"x'");
    s=s.replace(/u' e' d/g,"y");
    s=s.replace(/y y y/g,"y'");
    s=s.replace(/u' u' u'/g,"u");    
    s=s.replace(/y \ny \ny \ny \n/g,"");
    s=s.replace(/f f'/g,"")
    s=s.replace(/f' f/g,"")
    i=s.length;
  }  
  return s;
}

var save_state = function(){
	
}

var solve=function(c1,c2) {
  eerror_count=0;
  state2arr();
  var v54_bak=v54.slice(0);
  solution="1. WUERFEL AUSRICHTEN\n\n";
  if (!(m1 == 'black' && m3 == 'red')){
    black_top_red_front();
  };
  // Kreuz oben
  solution=solution+"\n\n2. KREUZ OBEN\n\n"
  edge_top('red','black'); 
  y();solution=solution+"\n";  
  edge_top('green','black');  
  y();solution=solution+"\n";
  edge_top('orange','black');
  y();solution=solution+"\n";
  edge_top('blue','black');
  y();solution=solution+"\n";
  // Guertel
  solution=solution+"\n\n3. GUERTEL\n\n"
  edge_middle('green','red');
  y();solution=solution+"\n";
  edge_middle('orange','green');
  y();solution=solution+"\n";
  edge_middle('blue','orange');
  y();solution=solution+"\n";
  edge_middle('red','blue');
  y();solution=solution+"\n";
  // Flaeche oben
  solution=solution+"\n\n4. FLAECHE OBEN\n\n"
  corner_top_left('black','green','red');
  y_shift();solution=solution+"\n";
  corner_top_left('black','red','blue');
  y_shift();solution=solution+"\n";
  corner_top_left('black','blue','orange');
  y_shift();solution=solution+"\n";
  corner_top_left('black','orange','green');
  // Wuerfel drehen  
  solution=solution+"\n\n5. FLAECHE UNTEN\n\n"
  y();x();x();
  kreuz_unten('yellow');solution=solution+"\n";
  corner_down();solution=solution+"\n";
  var mySolution=simplified(solution);
  if (notation=='en'){
     mySolution=en_solution(mySolution);  
  }
  if (!eerror){
    alert(mySolution);
    //alert(eerror_count);
  }else{
    alert('Für diesen Würfel gibt es keine Lösung!');
    //alert(eerror_count);
    eerror=false;
  }
  arr2state(v54_bak);
  showCanvas();
}

en_notation();