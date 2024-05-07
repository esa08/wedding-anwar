
// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  } else {
    
  }
}
// document.body.on

// Preloader
$(document).ready(function($) {
  // document.body.addEventListener("touchstart", () => {
  //   document.getElementById("musicplayer").play();
  // });
  var button = document.getElementById("buka-undangan");
  button.addEventListener("click", () => {
    document.body.style.overflow = "visible";
    button.style.display = "none";
    document.documentElement.style.overflow = "visible";
    var target = document.getElementsByClassName("body-main")[0];
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth' // Animasi gulir
  });
  var audio =  new Audio("audio.mp3");
  audio.play();
  })
$(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
  
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
