const miniBrowserInput = document.getElementById("mini-browser-urlInput");
const miniBrowserIframe = document.getElementById("mini-browser-iframe");
const miniBrowser = document.getElementById("browse");

function loadMiniBrowserURL(url) {
  miniBrowser.style.display = "block";
  miniBrowserInput.value = url;
  miniBrowserIframe.src = url;
}

document.querySelectorAll("[data-url]").forEach((card) => {
  card.addEventListener("click", () => loadMiniBrowserURL(card.dataset.url));
});

document.querySelector("[data-close-browser]")?.addEventListener("click", () => {
  miniBrowser.style.display = "none";
});

miniBrowserInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    loadMiniBrowserURL(miniBrowserInput.value);
  }
});
