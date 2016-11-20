var arrColors =[];

for (var i=0; i<54;i++){
  arrColors.push("white")
}

arrColors[4]="black";
arrColors[13]="green";
arrColors[22]="red";
arrColors[31]="blue";
arrColors[40]="orange";
arrColors[49]="yellow";

var rgb2color=function(rgb){
	switch(rgb){
      case "rgb(0, 0, 0)":
        return "black";
      case "rgb(0, 128, 0)":
        return "green";
      case "rgb(255, 0, 0)":
        return "red";
      case "rgb(0, 0, 255)":
        return "blue";
      case "rgb(255, 165, 0)":
        return "orange";
      case "rgb(255, 255, 0)":
        return "yellow";
      default:
        return rgb;
	}

}

var aktuelle_Farbe;


var set_aktuelle_Farbe=function(){
  aktuelle_Farbe=getComputedStyle(this).backgroundColor;
}

var btn1=document.getElementById('btn1');
btn1.addEventListener('click',set_aktuelle_Farbe);

var btn2=document.getElementById('btn2');
btn2.addEventListener('click',set_aktuelle_Farbe);

var btn3=document.getElementById('btn3');
btn3.addEventListener('click',set_aktuelle_Farbe);

var btn4=document.getElementById('btn4');
btn4.addEventListener('click',set_aktuelle_Farbe);

var btn5=document.getElementById('btn5');
btn5.addEventListener('click',set_aktuelle_Farbe);

var btn6=document.getElementById('btn6');
btn6.addEventListener('click',set_aktuelle_Farbe);


var farbe_uebernehmen=function () {
  var arrInd=0;
  var i=0;
  var j=0;
  var seite=this.id.substr(0,this.id.length-1);
  var indSeite=this.id.substr(this.id.length-1,this.id.length);
  switch(seite){
  	  case "top":
  	    i=-1;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  case "left":
  	    i=8;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  case "front":
  	    i=17;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  case "right":
  	    i=26;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  case "back":
  	    i=35;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  case "bottom":
  	    i=44;
  	    j=parseInt(indSeite);
  	    arrInd=i+j;
  	    break;
  	  default:
  	    arrInd=99;	  
  }
  //window.alert(rgb2color(aktuelle_Farbe)+" "+this.id+" "+arrInd); // "rgb(0, 0, 0)" Leerschlaege beachten!)
  arrColors[arrInd]=rgb2color(aktuelle_Farbe);
  this.style.background=aktuelle_Farbe;
  //alert(arrColors);
  var fdata=''
  arrLen=arrColors.length;
  for (i = 0; i < arrLen; i++) {
    fdata=fdata+arrColors[i]+"_";
  }
  fdata=fdata.substr(0,fdata.length-1);
  var form_data=document.getElementById('kunterbunt');
  form_data.value=fdata;
};

var top1=document.getElementById('top1');
top1.addEventListener('click',farbe_uebernehmen);

var top2=document.getElementById('top2');
top2.addEventListener('click',farbe_uebernehmen);

var top3=document.getElementById('top3');
top3.addEventListener('click',farbe_uebernehmen);

var top4=document.getElementById('top4');
top4.addEventListener('click',farbe_uebernehmen);

var top6=document.getElementById('top6');
top6.addEventListener('click',farbe_uebernehmen);

var top7=document.getElementById('top7');
top7.addEventListener('click',farbe_uebernehmen);

var top8=document.getElementById('top8');
top8.addEventListener('click',farbe_uebernehmen);

var top9=document.getElementById('top9');
top9.addEventListener('click',farbe_uebernehmen);

var left1=document.getElementById('left1');
left1.addEventListener('click',farbe_uebernehmen);

var left2=document.getElementById('left2');
left2.addEventListener('click',farbe_uebernehmen);

var left3=document.getElementById('left3');
left3.addEventListener('click',farbe_uebernehmen);

var left4=document.getElementById('left4');
left4.addEventListener('click',farbe_uebernehmen);

var left6=document.getElementById('left6');
left6.addEventListener('click',farbe_uebernehmen);

var left7=document.getElementById('left7');
left7.addEventListener('click',farbe_uebernehmen);

var left8=document.getElementById('left8');
left8.addEventListener('click',farbe_uebernehmen);

var left9=document.getElementById('left9');
left9.addEventListener('click',farbe_uebernehmen);

var front1=document.getElementById('front1');
front1.addEventListener('click',farbe_uebernehmen);

var front2=document.getElementById('front2');
front2.addEventListener('click',farbe_uebernehmen);

var front3=document.getElementById('front3');
front3.addEventListener('click',farbe_uebernehmen);

var front4=document.getElementById('front4');
front4.addEventListener('click',farbe_uebernehmen);

var front6=document.getElementById('front6');
front6.addEventListener('click',farbe_uebernehmen);

var front7=document.getElementById('front7');
front7.addEventListener('click',farbe_uebernehmen);

var front8=document.getElementById('front8');
front8.addEventListener('click',farbe_uebernehmen);

var front9=document.getElementById('front9');
front9.addEventListener('click',farbe_uebernehmen);

var right1=document.getElementById('right1');
right1.addEventListener('click',farbe_uebernehmen);

var right2=document.getElementById('right2');
right2.addEventListener('click',farbe_uebernehmen);

var right3=document.getElementById('right3');
right3.addEventListener('click',farbe_uebernehmen);

var right4=document.getElementById('right4');
right4.addEventListener('click',farbe_uebernehmen);

var right6=document.getElementById('right6');
right6.addEventListener('click',farbe_uebernehmen);

var right7=document.getElementById('right7');
right7.addEventListener('click',farbe_uebernehmen);

var right8=document.getElementById('right8');
right8.addEventListener('click',farbe_uebernehmen);

var right9=document.getElementById('right9');
right9.addEventListener('click',farbe_uebernehmen);

var back1=document.getElementById('back1');
back1.addEventListener('click',farbe_uebernehmen);

var back2=document.getElementById('back2');
back2.addEventListener('click',farbe_uebernehmen);

var back3=document.getElementById('back3');
back3.addEventListener('click',farbe_uebernehmen);

var back4=document.getElementById('back4');
back4.addEventListener('click',farbe_uebernehmen);

var back6=document.getElementById('back6');
back6.addEventListener('click',farbe_uebernehmen);

var back7=document.getElementById('back7');
back7.addEventListener('click',farbe_uebernehmen);

var back8=document.getElementById('back8');
back8.addEventListener('click',farbe_uebernehmen);

var back9=document.getElementById('back9');
back9.addEventListener('click',farbe_uebernehmen);

var bottom1=document.getElementById('bottom1');
bottom1.addEventListener('click',farbe_uebernehmen);

var bottom2=document.getElementById('bottom2');
bottom2.addEventListener('click',farbe_uebernehmen);

var bottom3=document.getElementById('bottom3');
bottom3.addEventListener('click',farbe_uebernehmen);

var bottom4=document.getElementById('bottom4');
bottom4.addEventListener('click',farbe_uebernehmen);

var bottom6=document.getElementById('bottom6');
bottom6.addEventListener('click',farbe_uebernehmen);

var bottom7=document.getElementById('bottom7');
bottom7.addEventListener('click',farbe_uebernehmen);

var bottom8=document.getElementById('bottom8');
bottom8.addEventListener('click',farbe_uebernehmen);

var bottom9=document.getElementById('bottom9');
bottom9.addEventListener('click',farbe_uebernehmen);

