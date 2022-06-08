/*********************** Slider **************************/
let slides = ["./img/slide1.jpg","./img/slide2.jpg","./img/slide3.jpg", "./img/Laptop6.jpg"];

var slide = document.createElement("img");
var attr1 = document.createAttribute("src");
attr1.value = slides[0];
slide.setAttributeNode(attr1);

var attr2 = document.createAttribute("class");
attr2.value = "w-100 vh-100 h-75 mt-0";
slide.setAttributeNode(attr2);

document.getElementById("slider").appendChild(slide);
let i=1;
// Display slider..
setInterval(()=>{
        if(i > 4)
        i=1;
    slide.src= slides[i-1];
    i++;
},2000);