$(document).ready(() => {
  const body = document.getElementById("body-main");
  setTimeout(() => {
    body.className = "scroll";
  }, 2000);
});

window.onscroll = function () {
  myFunction();
};

$(function () {
  $("#mi-slider").catslider();
});

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }

  // end if innerWidth
});
// DOMContentLoaded  end
url = "img/items/item1.0.png";

$("#page-background1").animate(
  {
    opacity: 0,
  },
  "slow",
  function () {
    $("#page-background1")
      .css({
        "background-image": "url(" + url + ")",
      })
      .animate({
        opacity: 1,
      });
  }
);
$(".image").hover(
  function () {
    $(this).css("cursor", "pointer");
  },
  function () {
    $(this).css("cursor", "auto");
  }
);

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
$("#test").delay(2650).animate({ opacity: "1" }, 900);
$("#test1").delay(600).animate({ opacity: "1" }, 900);

 function Show(){
  document.getElementById('rickroll').play();
  document.getElementById("rickroll").style.display = "flex";
  document.getElementById("rickroll").style.justifyContent = "center";
  document.getElementById("rickroll").style.alignItems = "center";


 }
 function Hide(){
  document.getElementById('rickroll').pause();
  document.getElementById("rickroll").style.display = "none";
 }

