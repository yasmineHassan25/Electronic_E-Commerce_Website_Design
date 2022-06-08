/*********************** Button Go-Top in footer **************************/

var container = document.getElementById("BtnContainer");

var btn = document.createElement("a");
var btnShape = document.createAttribute("class");
btnShape.value = "fa fa-arrow-circle-up me-4 ms-auto float-end mb-5"; 
btn.setAttributeNode(btnShape);
var topLink = document.createAttribute("href");
topLink.value = "#TOP";
btn.setAttributeNode(topLink);

container.appendChild(btn);

btn.style.fontSize = "2rem";
btn.style.textDecoration = "none";
btn.style.color = "#000";

