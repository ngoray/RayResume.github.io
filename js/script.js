const introLines = [
  "scan profile",
  "identify threats",
  "investigate incidents",
  "automate security workflows",
  "build smarter analyst tooling",
];

const typingSpeed = 55;
const eraseSpeed = 26;
const pauseBetweenLines = 900;
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typewriter() {
  const destination = document.getElementById("typedtext");

  if (!destination) return;

  const currentLine = introLines[lineIndex % introLines.length];
  destination.textContent = `${currentLine.slice(0, charIndex)}_`;

  if (!deleting && charIndex < currentLine.length) {
    charIndex++;
    setTimeout(typewriter, typingSpeed);
    return;
  }

  if (!deleting) {
    deleting = true;
    setTimeout(typewriter, pauseBetweenLines);
    return;
  }

  if (charIndex > 0) {
    charIndex--;
    setTimeout(typewriter, eraseSpeed);
    return;
  }

  deleting = false;
  lineIndex++;
  setTimeout(typewriter, 220);
}

typewriter();

function initCareerFilter() {
  const filterButtons = document.querySelectorAll("[data-career-filter]");
  const panels = document.querySelectorAll("[data-career-panel]");

  if (!filterButtons.length || !panels.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activePanel = button.dataset.careerFilter;

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-hidden", panel.dataset.careerPanel !== activePanel);
      });
    });
  });
}

initCareerFilter();
