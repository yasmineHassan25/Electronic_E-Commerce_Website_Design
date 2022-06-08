/*********************** filter products **************************/

let laptops= ["./img/Laptop1.png", "./img/Laptop2.png", "./img/Laptop3.jpg", "./img/Laptop4.jpg", "./img/Laptop5.jpg", "./img/Laptop6.jpg", "./img/Laptop7.jpg"];
let phones= ["./img/PhoneInfinix1.jpg", "./img/IPhone.png", "./img/PhoneOppo.jpg", "./img/PhoneOppo2.jpg", "./img/PhoneOppo3.jpg", "./img/PhoneSamsung.jpg", "./img/PhoneSamsung2.jpg", "./img/PhoneOppo4.jpg", "./img/PhoneSamsung3.jpg"];
let lcds= ["./img/lcd1.png", "./img/lcd2.jpg", "./img/lcd3.jpg", "./img/lcd4.jpg", "./img/lcd5.jpg"];
let headphones= ["./img/headPh1.jpg", "./img/headPh2.jpg", "./img/headPh3.jpg", "./img//headPh4.jpg", "./img/headPh5.jpg"];

let product = [];
product = product.concat(lcds[0],lcds[2]).concat(laptops[0],laptops[3]).concat(phones[0],phones[1]).concat(headphones[0],headphones[2]);

function displayProduct(type){
    // clear products content..
    document.getElementById("products").innerHTML = "";
    product = [];
    if(type == "laptop"){
        product = laptops;
    }else if(type == "lcd"){
        product = lcds;
    }else if(type == "headphone"){
        product = headphones;
    }else if(type == "phone"){
        product = phones;
    }else{
        product = product.concat(lcds[0],lcds[2]).concat(laptops[0],laptops[3]).concat(phones[0],phones[1]).concat(headphones[0],headphones[2]);
    }
    display();
}


function display(){
    for(let i=0; i < product.length; i++){
        var item = document.createElement("div");
        var Cls = document.createAttribute("class");
        Cls.value = "col-3 m-3 p-3 d-inline-block item";
        item.setAttributeNode(Cls); //item container..

        var photo = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = product[i];
        photo.setAttributeNode(source);
        var img_Cls = document.createAttribute("class");
        img_Cls.value = "w-100 resize";
        photo.setAttributeNode(img_Cls);

        item.appendChild(photo);

        var btnAdd = document.createElement("button");
        var btnText = document.createTextNode("Add") ;
        btnAdd.appendChild(btnText);
        var btnCls = document.createAttribute("class");
        btnCls.value = "btn btn-primary w-50 m-3 mx-auto";
        btnAdd.setAttributeNode(btnCls);

        item.appendChild(btnAdd);

        document.getElementById("products").appendChild(item);
    }
}
    
display();

