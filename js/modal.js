function openmodal1() {
  document.getElementById("id01")?.style.setProperty("display", "block");
}

window.addEventListener("click", ({ target }) => {
  if (/^id0[1-4]$/.test(target.id)) {
    target.style.display = "none";
  }
});
