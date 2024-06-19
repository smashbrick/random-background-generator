//This is the button
const button = document.querySelector(".btn");
// This is the body
const backgroundBody = document.querySelector("body");

//RGB to HEX
const rgbToHex = (r, g, b) =>
	"#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

console.log(rgbToHex(0, 51, 255));

//Random color generator function
function randomColor() {
	let random = Math.floor(Math.random() * 255 + 1);
	let color = Math.floor(Math.random() * 255 + 1);
	let generator = Math.floor(Math.random() * 255 + 1);
	let hexCode = rgbToHex(random, color, generator);
	backgroundBody.style.backgroundColor = `rgb(${random}, ${color}, ${generator})`;
	document.getElementsByClassName("noSelect")[0].textContent = `${hexCode}`;
}

//Background goes back to default when you stop hovering
function defaultStyles() {
	backgroundBody.style.backgroundColor = "#eee";
	document.getElementsByClassName("noSelect")[0].textContent = `Click me!`;
}

//Events
button.addEventListener("click", randomColor);
button.addEventListener("mouseleave", defaultStyles);
