var count = 0;
var g = 0;
var b=0;
function dc(){
	document.getElementById("ptc").innerHTML = "proceed to checkout! >";
	g=0;
	count=0;
}
function dino(){
	window.scrollTo(0,0);
	document.getElementById("ptc").innerHTML = "fiddlesticks!!!1";
	var audio = new Audio('https://soundslibmp3.ru/sounds/1584011024_dinosaur-21.mp3');
	audio.play();
	document.getElementById("vel").style.visibility = "visible";
	document.getElementById("cs").innerHTML = "$0";
	var pos = 0;
 	var id = setInterval(frame, 5);
 	function frame(){
 		if(pos == 1026){
 			clearInterval(id);
 			document.getElementById("vel").hidden = true;
 			dc();
 		}else{
 			pos=pos+3;
 			document.getElementById("vel").style.right = pos+"px";
 		}
 	}
}
function cart(a){
	var a;
	count = count + a;
	document.getElementById("cs").innerHTML = "$"+ count;
	if(g==0){
		if(count >= 10000){
			var a = confirm("If you are prone to seizures, press cancel.");
			g=1;
			if(a==true){
				document.getElementById("c1").style.visibility = "visible";
			}
		}
	}
}