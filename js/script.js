const introLines = [
  "As an aspiring cybersecurity professional, I am committed to continuously expanding my technical knowledge and strengthening my skills in security operations and defense.",
  "",
  "With a strong interest in threat detection and response, I actively work to stay current with evolving cyber threats, security tools, and industry practices while improving through hands-on learning and practical experience.",
  "",
  "I enjoy analyzing complex security problems and finding efficient solutions through automation, scripting, and structured investigation methods.",
  "",
  "With foundational knowledge in Python and exposure to SIEM and SOAR platforms such as XSOAR, I am focused on understanding how security systems function at a deeper technical level. I am particularly interested in learning different SIEM query languages and aim to develop tools that can translate queries across platforms, improving efficiency for security analysts working in multi-tool environments.",
];

const typingSpeed = 30;
const pauseBetweenLines = 500;
let lineIndex = 0;
let charIndex = 0;

function typewriter() {
  const destination = document.getElementById("typedtext");

  if (!destination || lineIndex >= introLines.length) return;

  const visibleLines = [...introLines.slice(0, lineIndex), introLines[lineIndex].slice(0, charIndex)];
  destination.innerHTML = `${visibleLines.join("<br>")}_`;

  if (charIndex < introLines[lineIndex].length) {
    charIndex++;
    setTimeout(typewriter, typingSpeed);
    return;
  }

  lineIndex++;
  charIndex = 0;

  if (lineIndex < introLines.length) {
    setTimeout(typewriter, pauseBetweenLines);
  }
}

typewriter();
