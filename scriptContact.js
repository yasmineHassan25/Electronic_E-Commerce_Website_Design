/*********************** Contact Form **************************/
let Name = document.getElementById("Name1");
let Email = document.getElementById("Email1");
let Password = document.getElementById("Password1");

var namePattern = /^[A-Za-z]\w/g;
function validName(){
    var span1 = document.getElementById("ErrorName");
    if(!(namePattern.test(Name.value)) || Name.value == ""){
        span1.innerText = "";
        var text1 = document.createTextNode("Name is Required and must be string & starts with capital letter.");
        span1.appendChild(text1);
        Name.style.border = '3px solid red';
    }else{
        Name.style.border = '3px solid green';
        span1.innerText = "";
    }
}
Name.onchange = validName;

/*  Validation on email..   */
var emailPattern = /\w{3,}@\w{3,}.com/g;
function validEmail() {
    var span2 = document.getElementById("ErrorEmail");
    if(!(emailPattern.test(Email.value))) {
        span2.innerText = "";
        var text2 = document.createTextNode("Invalid email, must be Example@aaa.com");
        span2.appendChild(text2);
        Email.style.border = '3px solid red';
    }else {
        Email.style.border = '3px solid green';
        span2.innerText = "";
    }
    
}       
Email.onchange = validEmail;

/*  Validation on password..   */
var passPattern = /^[\w!@#$%^&*]{8,}$/g;
function validPass() {
    var span3 = document.getElementById("ErrorPassword");
    if(!(passPattern.test(Password.value))) {
        span3.innerText = "";
        var text3 = document.createTextNode("Password must be at least 8 character");
        span3.appendChild(text3);
        Password.style.border = '3px solid red';
    }else{
        Password.style.border = '3px solid green';
        span3.innerText = "";
    }
    
}
Password.onchange = validPass;

// Event of check validation..
var submit = document.getElementById("submit");
submit.addEventListener("click", validName);
submit.addEventListener("click", validEmail);
submit.addEventListener("click", validPass);
