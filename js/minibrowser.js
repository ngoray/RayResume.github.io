var miniBrowserInput = document.getElementById("mini-browser-urlInput");
var miniBrowserIframe = document.getElementById("mini-browser-iframe");
var miniBrowser = document.getElementById("browse");

function loadMiniBrowserURL(url) {
  miniBrowser.style.display = "block";
  miniBrowserInput.value = url;
  miniBrowserIframe.src = url;
}

  // Add an event listener for the 'keydown' event on the input field
  miniBrowserInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
      // Prevent the default form submission behavior
      event.preventDefault();
      // Load the URL when Enter is pressed
      loadMiniBrowserURL(miniBrowserInput.value);
    }
  });