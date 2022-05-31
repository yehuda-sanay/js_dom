//שאלה 1

// console.log(document.getElementById("num1"));

//שאלה 2

// document.getElementById("num2").innerText="my dom app";

 //שאלה 3

 
// var number3= document.getElementsByClassName("num3");
// for(var i=0;i<4;i++){
// console.log(number3[i]);
// }
// //שאלה 4
// console.log(number3[2].innerHTML);
// //שאלה 5
// console.log(number3[3].innertext);
//שאלה 6
// var number6= document.getElementsByClassName("num6");
// for(var i=0;i<4;i++){
//     console.log(number6[i].innerHTML);
// }
//שאלה7 
// var names=prompt("please enter your full name.");
// document.body.innerHTML="<h2>"+names+"</h2>";

//שאלה8 
// function printColorNum{
// var num=prompt("inter sum num");
// var color=prompt("inter sum color");

// for(var i=0; i<num; i++){
// document.body.innerHTML+="<span>"+color+"</span>";
// }
// }
// printColorNum()

//שאלה 9 

// function getTextEndTag(){
//     var sumText=prompt("inter sun text");
//     var tagit=prompt("inter sum tag");
//     document.body.innerHTML="<"+tagit+"/>"+sumText+ "<"+tagit+"/>";
// }
//שאלה 10
// getTextEndTag()
// function inputTypes (){
// var inputType=prompt();
// document.body.innerHTML="<input type="+inputType+"/>"
// }
// inputTypes()
//שאלה 11

// function getClassFromArgoment(className,texts){
// var myarray=document.getElementsByClassName(className);
// for(var i=0;i<myarray.length;i++){
//     myarray[i].innerHTML=texts;
// }
// }
// getClassFromArgoment()
//שאלה 12
// function putSpanInP(sumText){
// var elem=document.getElementsByTagName("p");
// for(var i=0;i<elem.length;i++){
//     elem[i].innerHTML="<span/>"+sumText+"</span>";
// }
// }
// putSpanInP()

//שאלה 13 

// function getNameFamilyAndAge(){
//     var user={
//     names:prompt(),
//     lestname:prompt(),
//     age:prompt()
// }
// document.body.innerHTML+=user.names+" "+user.lestname+" "+user.age+"<br/>";
// if(user.age>18){
// document.body.innerHTML+="<input type"+Text+"</>";
// }
// }
// getNameFamilyAndAge()

//שאלה 14
// function movieObject(){
//     var movie={
//         movieName:prompt("inter movie name"),
//         Viewsnum:prompt("inter views number"),
//         movieyear:prompt("inter movie year"),
//         movieimg:prompt("inter movie url img"),
//     }
//     document.body.innerHTML="<h1>"+movie.movieName+"</h1>"+"<br/>"+movie.Viewsnum+"<br/>"+"<img src="+movie.movieimg+"/>"+"<br/>"+"<h6>"+movie.movieyear+"</h6>";
// }
// movieObject()
//שאלה 15 
// var impluy={
//     firstName:prompt("inter first name"),
//     lastName:prompt("inter last name"),
//     email:prompt("inter email"),
//     secshen:prompt("inter secshen")
// }
// document.body.innerHTML="<h1>"+impluy.firstName+"</h1>"+"<br/>"+"<h2>"+impluy.lastName+"</h2>"+"<br/>"+"<h3>"+impluy.email+"</h3>"+"<br/>"+"<h4>"+impluy.secshen+"</h4>";

//שאלה 16 
// function getFromUserAndPrint(){
//     var BuildingNum=prompt("building number");
//     for(var i=0;i<BuildingNum;i++){
//     var Building={
//         kablanName:prompt("inter kablan name"),
//         companyName:prompt("inter company name"),
//         florQuantity:prompt("inter Quantity"),
//         ApartmentQuantityOnFlor:prompt("Apartment Quantity On Flor")
//     }
//     document.body.innerHTML+="<h1>"+Building.kablanName+"</h1>"+" "+"<h2>"+Building.companyName+"</h2"+" "+"<h3>"+Building.florQuantity+"</h3>"+" "+"<h4>"+Building.ApartmentQuantityOnFlor+"</h4>"+"<br/>";
// }
// }
// getFromUserAndPrint()

//שאלה 17

function getNumberPrintObjact(){
var numberofprint=0;
var numshoop=prompt();
for(var i=0;i<numshoop;i++){
var shop={
    name:prompt("inter name"),
    street:prompt("inter street"),
    secshennum:prompt("inter shcshen"),
    inpluynum:prompt("inter impluy")
}
if(shop.inpluynum>10){
    numberofprint++;
    document.body.innerHTML+="<h1>"+shop.name+"</h1>"+" "+"<h2>"+shop.street+"</h2>"+" "+"<h3>"+shop.secshennum+"</h3>"+" "+"<h4>"+shop.inpluynum+"</h4>"+"<br/>"
}
}
return numberofprint;
}
getNumberPrintObjact()

function printed(conect){
    document.write(conect);
}
printed(getNumberPrintObjact())

