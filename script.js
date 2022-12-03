var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =  document.getElementById("changeColor");
var css = document.querySelector("h3");
var random = document.querySelector(".random");
var btn = document.getElementById("btn");


function changeBackground(){
	//body.style.background = color1.value;
	body.style.background = "linear-gradient(to right," 
	+ color1.value +"," + color2.value +")";
	btn.style.backgroundColor = color1.value;
	css.textContent = body.style.background;


}

function randomColor() {
	var randomHex = "#" + (Math.floor(Math.random()*16777215).toString(16));
	var randomHex2 = "#" + (Math.floor(Math.random()*16777215).toString(16));
	color1.value = randomHex;
	color2.value = randomHex2;
	body.style.background = "linear-gradient(to right," 
	+ color1.value +"," + color2.value +")";
	btn.style.backgroundColor = color2.value;
	css.textContent = body.style.background;


}

window.addEventListener("load", changeBackground)
color1.addEventListener("input", changeBackground);

random.addEventListener("click", randomColor);


//linear-gradient("to right" "," + "" + "," color1.value , green)
