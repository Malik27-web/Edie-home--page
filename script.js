var menu =document.getElementById("menu");
var close=document.getElementById("close");
var navbar=document.getElementById("navbar")
var main =document.getElementById("main");
var article=document.getElementById("article");
var section=document.getElementById("section");
var flex=document.getElementById("flex");
var body=document.getElementById("body");
function menufunction(){

close.style.display='flex';
menu.style.display='none';
navbar.style.visibility='visible';
main.style.visibility='hidden';
article.style.visibility='hidden';
section.style.visibility='hidden';
flex.style.visibility='hidden';
body.style.overflow='hidden'
}
function closefunction(){

    close.style.display='none';
    menu.style.display='flex';
    navbar.style.visibility='hidden'; 
    main.style.visibility='visible';
    article.style.visibility='visible';
    section.style.visibility='visible';
    flex.style.visibility='visible';
}

