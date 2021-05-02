let hh = 0;
let mm = 0;
let ss = 0;

let dishh ;
let dismm ;
let disss ;
let interval = null;
let state = false;
	
function stopwatch(){
	
	ss++;
	if(ss/60 === 1){
		ss = 0;
		if(mm < 10){
			mm = '0'+mm;
		}
		mm++;
		
		if(mm/60 === 1){
			mm = 0;
			if(hh < 10){
				hh = '0'+hh;
			}
			hh++;
		}
	}
	if(ss < 10){
		disss = '0'+ss.toString();
	}
	else{
		disss = ss.toString();
	}
	if(mm < 10){
		dismm = '0'+mm.toString();
	}
	else{
		dismm = mm.toString();
	}
	if(hh < 10){
		dishh = '0'+hh.toString();
	}
	else{
		dishh = hh.toString();
	}
	
	document.getElementById("time").innerHTML = dishh+':'+dismm+':'+disss;
	
}

function Reset(){
	window.clearInterval(interval);
	ss = 0;
	mm = 0;
	hh = 0;
	document.getElementById("time").innerHTML = "00:00:00";
	document.getElementById("Stop/Resume").innerHTML  = "Start";
}

function start(){
	if(state === false){
		interval = window.setInterval(stopwatch, 10);
		document.getElementById("Stop/Resume").innerHTML  = "Stop";
		state = true;
	}
	else{
		window.clearInterval(interval);
		document.getElementById("Stop/Resume").innerHTML  = "Start";
		state = false;
	}
}







