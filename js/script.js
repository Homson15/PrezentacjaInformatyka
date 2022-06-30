
var canvas = {
	
	top: document.getElementById('top').getContext("2d"),
	
}

var width = {
	
	top: document.getElementById('top').width,
	
}

var frame ={
	
	wstep: document.getElementById('frame1'),
	
	proc: document.getElementById('frame2'),
	
	UP: document.getElementById('frame3'),
	
	magistrala: document.getElementById('frame4'),
	
	plyta: document.getElementById('frame5'),
	
	bios: document.getElementById('frame6'),
	
}

var Window =document.getElementById("window");

function change(element){
	
	zero();
	
	switch(element.value){
		
		case "1": frame.wstep.style.display = "block"; break;
		case "2": frame.proc.style.display = "block"; break;
		case "3": frame.UP.style.display = "block"; break;
		case "4": frame.magistrala.style.display = "block"; break;
		case "5": frame.plyta.style.display = "block"; break;
		case "6": frame.bios.style.display = "block"; break;
		
		
	}
	
}

function zero(){
	
	frame.wstep.style.display = "none";
	frame.proc.style.display = "none";
	frame.UP.style.display = "none";
	frame.magistrala.style.display = "none";
	frame.plyta.style.display = "none";
	frame.bios.style.display = "none";
	
	
	
	
}

function buttonChange(element){
	
	element.src = "style/" + element.id + "Hover.bmp"
	//console.log("change");
}

function clearButton(element){
	
	//console.log("clear");
	
	element.src = "style/" + element.id + ".bmp"
	
}

function deletex(){
	
	Window.remove();
	document.getElementById("icon").remove();
	
}

function showWindow(a){
	
	if(a==1) Window.style.display = "block"
	else Window.style.display = "none"
}

function onLoad(){
	
	zero();
	frame.wstep.style.display = "block";
	
	
	var grd = canvas.top.createRadialGradient(0, 12.5, 0, 0, 12.5, width.top);
	
	grd.addColorStop(0, "#0000FF");
	grd.addColorStop(1, "#6666FF");
	
	canvas.top.fillStyle = grd;
	canvas.top.fillRect(0, 0, width.top, 150);
	
}