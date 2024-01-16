var miniBrowserInput = document.getElementById("mini-browser-urlInput");
var miniBrowserIframe = document.getElementById("mini-browser-iframe");
var miniBrowser = document.getElementById("browse");

function loadMiniBrowserURL(url) {
  miniBrowser.style.display = "block";
  miniBrowserInput.value = url;
  miniBrowserIframe.src = url;
}