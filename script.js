function externalLinks() { for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) { var b = c[a]; b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") } } ; 
externalLinks();

window.onscroll = function() {scrollFunction()};

$(document).ready(create_menu());

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("top_button").style.display = "block";
  } else {
    document.getElementById("top_button").style.display = "none";
  }
}

var modal = document.getElementById('designModal');

// get design elements
var grumble = document.getElementById('grumble');
var scanscript = document.getElementById('scanscript');
var pulse = document.getElementById('pulse');
var promo = document.getElementById('promo');
var adyct = document.getElementById('adyct');
var pliant = document.getElementById('pliant');

var modalImg = document.getElementById("modalImg");


grumble.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/GS.jpg";
}

scanscript.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/ScanScript.jpg";
}

pulse.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/Pulse_Concept.png";
}

promo.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/hatchery.jpg";
}

adyct.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/adyct.jpg";
}

pliant.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "../Assets/pliant.jpg";
}

// chestnotesBrochure.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "Assets/Chestnotes.jpg";
// }

// chestnotesPoster.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = "Assets/ChestnotesPoster.jpg";
//   modalImg.style.width = "90%";
// }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function create_menu() {

  var nav = document.querySelector(".navigation");

  menu = ["about", "resume", "projects"];

  var page_name = document.title.split(" ")[0].toLowerCase();

  for (var i = 0; i < menu.length; i++) {
    var menu_item = document.createElement("a");
    menu_item.href = "/" + menu[i] + ".html";
    // menu_item.href = menu[i] + ".html";
    menu_item.id = menu[i].localeCompare(page_name) == 0 ? "nav_button_active" : "nav_button";
    menu_item.innerHTML = menu[i].toUpperCase();
    nav.appendChild(menu_item);

    if (i < menu.length - 1) {
      var span = document.createElement("span");
      span.id = "half-opacity";
      span.innerHTML = " | ";
      nav.appendChild(span);
    }
  }
  nav.appendChild(document.createElement("hr"));
}



