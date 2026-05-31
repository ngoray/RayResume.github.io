let radarMapStarted = false;

function startMapAnimation() {
  if (radarMapStarted) return;

  radarMapStarted = true;

  const radar = document.getElementById("mappew");
  const chatLog = document.getElementById("chatlog");
  const skills = [
    { name: "Cybersecurity", group: "Core" },
    { name: "Security Operations (SOC)", group: "SOC" },
    { name: "Threat Detection", group: "Detection" },
    { name: "Incident Response", group: "Response" },
    { name: "SIEM", group: "Platform" },
    { name: "SOAR", group: "Automation" },
    { name: "Splunk", group: "SIEM" },
    { name: "IBM QRadar", group: "SIEM" },
    { name: "Cortex XSOAR", group: "SOAR" },
    { name: "MITRE ATT&CK", group: "Framework" },
    { name: "Threat Intelligence", group: "Intel" },
    { name: "Log Analysis", group: "Investigation" },
    { name: "Network Security", group: "Network" },
    { name: "Endpoint Security", group: "Endpoint" },
    { name: "EDR", group: "Endpoint" },
    { name: "Vulnerability Management", group: "Exposure" },
    { name: "Python for Security Automation", group: "Scripting" },
    { name: "Query Languages (SIEM)", group: "SIEM" },
    { name: "Detection Engineering", group: "Engineering" },
    { name: "Vibe Coding", group: "Creative Build" },
  ];
  const coreNode = { city: "Singapore", code: "SG", x: 72, y: 62 };
  const targetNodes = [
    { city: "San Francisco", code: "SFO", x: 17, y: 42 },
    { city: "New York", code: "NYC", x: 29, y: 38 },
    { city: "Toronto", code: "YTO", x: 28, y: 32 },
    { city: "Mexico City", code: "MEX", x: 23, y: 55 },
    { city: "Sao Paulo", code: "SAO", x: 38, y: 75 },
    { city: "London", code: "LON", x: 48, y: 34 },
    { city: "Frankfurt", code: "FRA", x: 52, y: 38 },
    { city: "Helsinki", code: "HEL", x: 54, y: 27 },
    { city: "Cairo", code: "CAI", x: 55, y: 51 },
    { city: "Lagos", code: "LOS", x: 49, y: 62 },
    { city: "Dubai", code: "DXB", x: 60, y: 49 },
    { city: "Mumbai", code: "BOM", x: 65, y: 57 },
    { city: "Seoul", code: "SEL", x: 79, y: 42 },
    { city: "Tokyo", code: "TYO", x: 84, y: 43 },
    { city: "Manila", code: "MNL", x: 78, y: 59 },
    { city: "Jakarta", code: "JKT", x: 72, y: 69 },
    { city: "Sydney", code: "SYD", x: 84, y: 78 },
    { city: "Johannesburg", code: "JNB", x: 54, y: 77 },
  ];

  radar.innerHTML = `
    <div class="pew-map-grid"></div>
    <svg class="pew-world-map" viewBox="0 0 1000 520" aria-hidden="true">
      <path class="land" d="M93 193L125 137L205 106L299 121L346 168L315 226L249 232L211 270L154 247L114 230Z" />
      <path class="land land-soft" d="M263 290L346 316L372 386L338 477L300 448L275 362Z" />
      <path class="land" d="M455 146L504 120L562 151L535 201L470 196L431 175Z" />
      <path class="land land-soft" d="M501 222L571 235L617 312L586 430L520 416L470 330Z" />
      <path class="land" d="M565 140L682 119L791 160L856 230L805 285L704 266L655 331L584 270L535 199Z" />
      <path class="land land-soft" d="M769 365L850 360L902 405L840 446L760 421Z" />
      <path class="island" d="M721 310L737 323L724 334L706 323Z" />
      <path class="island" d="M790 300L806 313L791 328L775 316Z" />
      <path class="island" d="M845 283L862 291L850 308L833 298Z" />
    </svg>
    <div class="pew-route-layer"></div>
    <div class="pew-node-layer"></div>
    <div class="pew-map-status">
      <span>global cyber traffic</span>
      <strong>Ray security map online</strong>
    </div>
  `;

  const routeLayer = radar.querySelector(".pew-route-layer");
  const nodeLayer = radar.querySelector(".pew-node-layer");
  const statusLine = radar.querySelector(".pew-map-status strong");

  [coreNode, ...targetNodes].forEach((point, index) => {
    const node = document.createElement("button");
    node.className = `pew-node ${index === 0 ? "source" : ""}`;
    node.type = "button";
    node.style.left = `${point.x}%`;
    node.style.top = `${point.y}%`;
    node.title = `${point.city} cyber signal`;
    node.innerHTML = `<span class="pew-node-dot"></span><small>${point.code}</small>`;
    node.addEventListener("click", () => {
      const skill = skills[(index - 1 + skills.length) % skills.length];
      fireRoute(coreNode, point, skill);
    });
    nodeLayer.appendChild(node);
  });

  function logRoute(from, to, skill) {
    if (!chatLog) return;

    const entry = document.createElement("div");
    entry.className = "skill-log";
    entry.textContent = `[PEW] ${from.code} -> ${to.code} | ${skill.name}`;
    chatLog.appendChild(entry);
    chatLog.scrollTop = chatLog.scrollHeight;

    while (chatLog.children.length > 18) {
      chatLog.removeChild(chatLog.children[0]);
    }
  }

  function fireRoute(from, to, skill) {
    const rect = radar.getBoundingClientRect();
    const x1 = (from.x / 100) * rect.width;
    const y1 = (from.y / 100) * rect.height;
    const x2 = (to.x / 100) * rect.width;
    const y2 = (to.y / 100) * rect.height;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const route = document.createElement("div");

    route.className = "pew-shot-line";
    route.style.left = `${x1}px`;
    route.style.top = `${y1}px`;
    route.style.width = `${length}px`;
    route.style.transform = `rotate(${angle}deg)`;
    route.innerHTML = "<span></span>";
    routeLayer.appendChild(route);

    radar.querySelectorAll(".pew-node").forEach((node) => {
      node.classList.toggle("active", node.style.left === `${to.x}%` && node.style.top === `${to.y}%`);
    });

    statusLine.textContent = `${skill.group}: ${skill.name} -> ${to.city}`;
    logRoute(from, to, skill);
    setTimeout(() => route.remove(), 1200);
  }

  let shotIndex = 0;

  function loop() {
    const skill = skills[shotIndex % skills.length];
    const target = targetNodes[(shotIndex * 5 + 2) % targetNodes.length];
    const from = shotIndex % 4 === 0 ? targetNodes[(shotIndex * 7 + 5) % targetNodes.length] : coreNode;

    fireRoute(from, target, skill);
    shotIndex++;
    setTimeout(loop, 760);
  }

  loop();
}

function Reveal() {
  document.getElementById("rev").style.display = "none";
  document.getElementById("rev2").style.display = "block";
  startMapAnimation();
}

function toggleFullScreen() {
  document.querySelector(".containerpew")?.classList.toggle("full-screen-mode");
}
