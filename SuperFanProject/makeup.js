/*
The code below will change the main div, which is identified as main. when you click on one of the divs 
that is indicated to click on with the cursor, it will toggle one of the images, which it will show depending on the class it 
is in in the css depending on which one you click, and it will show you in the html which class is being changed in the main 
div and when one of the images is being toggled, it will remove the rest of the images so they all don't show up at the same time. 
*/
function m5(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.toggle("peach");
}
function m2(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.toggle("destiny");
}
function m3(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.toggle("lightbrown");
}
function m(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.toggle("lane");
}
function m6(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.toggle("lane2");
}
function m7(elem){
	document.getElementById("main").classList.remove("domo3");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.toggle("des5");
}
function m8(elem){
	document.getElementById("main").classList.remove("des5");
	document.getElementById("main").classList.remove("lane2");
	document.getElementById("main").classList.remove("destiny");
	document.getElementById("main").classList.remove("peach");
	document.getElementById("main").classList.remove("lightbrown");
	document.getElementById("main").classList.remove("lane");
	document.getElementById("main").classList.toggle("domo3");
}
