function toggleFontAndBackground() {
  const body = document.body;
  const modernTheme = !body.classList.contains("theme-modern");

  body.classList.toggle("theme-modern", modernTheme);
  body.classList.toggle("theme-matrix", !modernTheme);
}

function reveal() {
  document.querySelectorAll(".reveal").forEach((section) => {
    const visible = section.getBoundingClientRect().top < window.innerHeight - 150;
    section.classList.toggle("active", visible);
  });
}

window.addEventListener("scroll", reveal);
reveal();
