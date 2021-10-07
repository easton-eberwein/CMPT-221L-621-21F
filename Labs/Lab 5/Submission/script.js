var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var lis = document.querySelectorAll("li");
var body = document.querySelector("body");
var title = document.querySelector("title");

h1.textContent = "Changed Title";
p.textContent = "Easton Eberwein";
h3.textContent = "Can you do these things pretty please with sugar on top?";
title.textContent = "Look at me";

lis[0].style.color = "Blue";
lis[1].style.backgroundColor = "Pink";
body.style.backgroundColor = "Gray";
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");