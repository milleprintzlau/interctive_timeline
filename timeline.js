window.addEventListener("DOMContentLoaded", loadSVG);
// LOAD SVG
function loadSVG() {
  console.log("Load SVG");

  fetch("svg-01.svg")
    .then(response => response.text())
    .then(svgdata => {
      console.log("The svg is loaded");

      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
