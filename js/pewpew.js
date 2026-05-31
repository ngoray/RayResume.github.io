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
  const mapBounds = { lonMin: -180, lonMax: 180, latMin: -58, latMax: 84 };
  const projectPoint = (point) => ({
    ...point,
    x: ((point.lon - mapBounds.lonMin) / (mapBounds.lonMax - mapBounds.lonMin)) * 100,
    y: ((mapBounds.latMax - point.lat) / (mapBounds.latMax - mapBounds.latMin)) * 100,
  });
  const coreNode = projectPoint({ city: "Singapore", code: "SG", lon: 103.8198, lat: 1.3521 });
  const targetNodes = [
    { city: "San Francisco", code: "SFO", lon: -122.4194, lat: 37.7749 },
    { city: "New York", code: "NYC", lon: -74.006, lat: 40.7128 },
    { city: "Sao Paulo", code: "SAO", lon: -46.6333, lat: -23.5505 },
    { city: "London", code: "LON", lon: -0.1276, lat: 51.5074 },
    { city: "Frankfurt", code: "FRA", lon: 8.6821, lat: 50.1109 },
    { city: "Cairo", code: "CAI", lon: 31.2357, lat: 30.0444 },
    { city: "Dubai", code: "DXB", lon: 55.2708, lat: 25.2048 },
    { city: "Mumbai", code: "BOM", lon: 72.8777, lat: 19.076 },
    { city: "Seoul", code: "SEL", lon: 126.978, lat: 37.5665 },
    { city: "Tokyo", code: "TYO", lon: 139.6917, lat: 35.6895 },
    { city: "Manila", code: "MNL", lon: 120.9842, lat: 14.5995 },
    { city: "Jakarta", code: "JKT", lon: 106.8456, lat: -6.2088 },
    { city: "Sydney", code: "SYD", lon: 151.2093, lat: -33.8688 },
    { city: "Johannesburg", code: "JNB", lon: 28.0473, lat: -26.2041 },
  ].map(projectPoint);

  radar.innerHTML = `
    <div class="soc-map-grid"></div>
    <img class="soc-world-map" src="./images/world-map-real.svg" alt="" aria-hidden="true">
    <svg class="soc-route-svg" aria-hidden="true"></svg>
    <div class="soc-node-layer"></div>
    <div class="soc-scanline"></div>
    <div class="soc-map-hud">
      <div><span>events</span><strong id="socEventCount">000</strong></div>
      <div><span>severity</span><strong id="socSeverity">HIGH</strong></div>
      <div><span>source</span><strong>SG-CSIRT</strong></div>
    </div>
    <div class="soc-map-status">
      <span>soc attack map</span>
      <strong>Ray CSIRT signal feed online</strong>
    </div>
  `;

  const routeSvg = radar.querySelector(".soc-route-svg");
  const nodeLayer = radar.querySelector(".soc-node-layer");
  const statusLine = radar.querySelector(".soc-map-status strong");
  const eventCount = radar.querySelector("#socEventCount");
  const severityText = radar.querySelector("#socSeverity");

  [coreNode, ...targetNodes].forEach((point, index) => {
    const node = document.createElement("button");

    node.className = `soc-node ${index === 0 ? "source" : ""}`;
    node.type = "button";
    node.style.left = `${point.x}%`;
    node.style.top = `${point.y}%`;
    node.title = `${point.city} cyber signal`;
    node.innerHTML = `<span class="soc-node-dot"></span><small>${point.code}</small>`;
    node.addEventListener("click", () => {
      const skill = skills[(index - 1 + skills.length) % skills.length];
      fireRoute(coreNode, point, skill, "manual");
    });
    nodeLayer.appendChild(node);
  });

  function logRoute(from, to, skill, severity) {
    if (!chatLog) return;

    const entry = document.createElement("div");

    entry.className = `skill-log ${severity.toLowerCase()}`;
    entry.textContent = `[${severity}] ${from.code} -> ${to.code} | ${skill.name}`;
    chatLog.appendChild(entry);
    chatLog.scrollTop = chatLog.scrollHeight;

    while (chatLog.children.length > 18) {
      chatLog.removeChild(chatLog.children[0]);
    }
  }

  function fireRoute(from, to, skill, mode = "auto") {
    const rect = radar.getBoundingClientRect();
    const width = Math.max(rect.width, 1);
    const height = Math.max(rect.height, 1);
    const x1 = (from.x / 100) * width;
    const y1 = (from.y / 100) * height;
    const x2 = (to.x / 100) * width;
    const y2 = (to.y / 100) * height;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const bend = Math.min(Math.abs(x2 - x1) * 0.22 + 34, 120);
    const curveY = midY - bend;
    const severity = mode === "manual" ? "INVESTIGATE" : ["CRITICAL", "HIGH", "MEDIUM"][shotIndex % 3];
    const ns = "http://www.w3.org/2000/svg";
    const path = document.createElementNS(ns, "path");
    const packet = document.createElementNS(ns, "circle");
    const motion = document.createElementNS(ns, "animateMotion");
    const route = `M ${x1} ${y1} Q ${midX} ${curveY} ${x2} ${y2}`;

    routeSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    path.setAttribute("class", `soc-attack-path ${severity.toLowerCase()}`);
    path.setAttribute("d", route);
    packet.setAttribute("class", "soc-route-packet");
    packet.setAttribute("r", "4");
    motion.setAttribute("dur", "1s");
    motion.setAttribute("path", route);
    motion.setAttribute("fill", "freeze");
    packet.appendChild(motion);
    routeSvg.append(path, packet);

    radar.querySelectorAll(".soc-node").forEach((node) => {
      node.classList.toggle("active", node.style.left === `${to.x}%` && node.style.top === `${to.y}%`);
    });

    eventCount.textContent = String(284 + shotIndex).padStart(3, "0");
    severityText.textContent = severity;
    statusLine.textContent = `${skill.group}: ${skill.name} -> ${to.city}`;
    logRoute(from, to, skill, severity);
    setTimeout(() => {
      path.remove();
      packet.remove();
    }, 1200);
  }

  let shotIndex = 0;

  function loop() {
    const skill = skills[shotIndex % skills.length];
    const target = targetNodes[(shotIndex * 5 + 2) % targetNodes.length];
    const from = shotIndex % 4 === 0 ? targetNodes[(shotIndex * 7 + 3) % targetNodes.length] : coreNode;

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

window.startMapAnimation = startMapAnimation;
window.Reveal = Reveal;
window.toggleFullScreen = toggleFullScreen;
