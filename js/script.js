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

const careerDetails = {
  starhub: {
    company: "StarHub",
    role: "Senior Cybersecurity Incident Response Specialist (CSIRT)",
    date: "Apr 2026 to Present",
    location: "Singapore, Hybrid",
    logo: "./images/starhub.jpg",
    tags: ["L2 Incident Response", "Elastic Stack", "Threat Hunting", "MITRE ATT&CK", "CSIRT"],
    sections: [
      {
        heading: "Role Overview",
        items: [
          "Act as an L2 Incident Responder in the Security Operations Centre, handling escalated security incidents.",
          "Support the full incident lifecycle from triage and investigation through containment, remediation, closure, and lessons learned.",
          "Bridge SOC analysts and incident response management with deeper technical analysis and coordination.",
        ],
      },
      {
        heading: "Key Responsibilities",
        items: [
          "Perform end-to-end triage and investigation of alerts escalated from L1 analysts while aligning response work to MTTD and MTTR targets.",
          "Monitor and analyse alerts from Elastic Stack, then validate events across network, endpoint, identity, and cloud log sources.",
          "Investigate malware, phishing, insider threat, and cloud security incidents through log correlation and evidence review.",
          "Execute incident response playbooks for containment, eradication, recovery, escalation, and post-incident improvement.",
          "Fine-tune SIEM detection rules, support log source onboarding, and contribute automation ideas for SOC workflow improvement.",
          "Map detections to MITRE ATT&CK, maintain incident reports, and support compliance or audit needs through proper evidence collection.",
          "Collaborate with IT, network, application, MSSP, and CSIRT teams on remediation, root cause analysis, simulations, and tabletop exercises.",
        ],
      },
    ],
  },
  accenture: {
    company: "Accenture",
    role: "Security Engineer",
    date: "Apr 2025 to Apr 2026",
    location: "Singapore",
    logo: "./images/accn.png",
    tags: ["SIEM", "Incident Response", "CyberArk PAM", "Azure Security", "Risk Automation"],
    sections: [
      {
        heading: "Security Operations",
        items: [
          "Monitored, triaged, and investigated security alerts using Splunk, Microsoft Sentinel, IDS/IPS, firewalls, and Trend Micro Vision One.",
          "Performed incident investigation and response for suspected or confirmed breaches, including root cause analysis, impact assessment, containment, and remediation coordination.",
          "Stayed current with emerging threats, vulnerabilities, and cybersecurity trends to strengthen security operations and advisory work.",
          "Collaborated with internal IT, application teams, and third-party vendors on digital forensics, vulnerability assessment, and web penetration testing activities.",
        ],
      },
      {
        heading: "Risk, Cloud, and Automation",
        items: [
          "Managed and reviewed privileged access activities using CyberArk PAM to support secure administration and compliance.",
          "Assessed security controls across infrastructure, applications, and cloud environments, then supported risk reporting and control evaluation.",
          "Secured Microsoft Azure environments through Network Security Group governance, certificate lifecycle tracking, and cloud control validation.",
          "Managed incident tracking and remediation workflows through Azure DevOps.",
          "Designed an automated risk assessment web portal to calculate risk scores and present findings to stakeholders and clients.",
          "Developed security automation, including a File Integrity Monitoring web defacement detection system for internal and intranet environments.",
          "Maintained architecture design documents, incident reports, playbooks, SOPs, security reports, and actionable recommendations.",
        ],
      },
    ],
  },
  ensign: {
    company: "Ensign InfoSecurity",
    role: "SOC Analyst",
    date: "Oct 2023 to Apr 2025",
    location: "Singapore",
    logo: "./images/Ensign.jpg",
    tags: ["SOC", "SIEM", "EDR", "Threat Intel", "MSSP"],
    sections: [
      {
        heading: "SOC Operations",
        items: [
          "Investigated security events using logs from SIEM, EDR, firewalls, endpoints, and authentication systems.",
          "Conducted initial incident analysis for network anomalies, endpoint threats, suspicious activity, policy violations, and data loss alerts.",
          "Supported threat hunting, vulnerability monitoring, customer incident liaison, mitigation advice, and remediation follow-up.",
          "Handled change requests, service requests, incident-related enquiries, and workflow coordination in a managed security environment.",
        ],
      },
      {
        heading: "Detection and Improvements",
        items: [
          "Assisted in improving incident response workflows, SOPs, and security use cases.",
          "Translated threat intelligence into actionable detection ideas and tuned logic in SIEM and EDR platforms.",
          "Produced CVE reports and security advisories based on emerging threats.",
          "Contributed to MSSP tender proposals covering SOC and detection capabilities.",
          "Built a sound-triggered alert system for critical events and developed a Query Converter tool for cross-platform detection queries.",
        ],
      },
    ],
  },
  asmart: {
    company: "A-Smart Holdings",
    role: "Augmented Reality Consultant",
    date: "Jul 2019 to Dec 2019",
    location: "Singapore",
    logo: "./images/a-smart.png",
    tags: ["AR", "IoT", "Smart Mirror", "Voice Control", "Testing"],
    sections: [
      {
        heading: "Immersive Technology",
        items: [
          "Assisted in the development and testing of augmented reality experiences, including smart mirror solutions for virtual clothing and visualisation.",
          "Supported interactive technology prototypes such as holographic displays and smart environment integrations.",
          "Collaborated with the team to prototype and demonstrate immersive retail and smart living concepts.",
        ],
      },
      {
        heading: "Smart Home Testing",
        items: [
          "Helped design and validate voice-controlled smart home interactions using Google Home Mini.",
          "Developed and tested structured voice prompts for responsive device control and automation.",
          "Performed functional testing, troubleshooting, optimisation, and user experience improvement for AR and smart home applications.",
          "Documented testing results, configurations, and implementation workflows for internal reference.",
        ],
      },
    ],
  },
  ncs: {
    company: "NCS",
    role: "Roving Technical Assistant",
    date: "Jul 2016 to Dec 2016",
    location: "Singapore",
    logo: "./images/NCS.png",
    tags: ["IT Support", "Endpoint Setup", "Network Troubleshooting", "Asset Handling", "User Support"],
    sections: [
      {
        heading: "Technical Support",
        items: [
          "Provided on-site technical support across multiple locations, troubleshooting hardware, software, and network issues.",
          "Assisted users with workstation setup, system configuration, and basic IT problem resolution.",
          "Performed installation, maintenance, and replacement of desktops, laptops, peripherals, operating systems, enterprise applications, and security updates.",
          "Escalated complex issues to specialised teams and followed up on resolution status.",
        ],
      },
      {
        heading: "Operations",
        items: [
          "Conducted routine system checks to ensure devices and network connectivity were functioning properly.",
          "Assisted with IT asset handling, inventory tracking, and equipment movement between sites.",
          "Documented service activities, incident details, and resolutions according to operational procedures.",
          "Provided user guidance on basic IT usage and best practices to reduce recurring issues.",
        ],
      },
    ],
  },
};

function initCareerModal() {
  const modal = document.getElementById("careerModal");
  const cards = document.querySelectorAll("[data-career-role]");

  if (!modal || !cards.length) return;

  const panel = modal.querySelector(".career-modal-panel");
  const closeButtons = modal.querySelectorAll("[data-career-modal-close]");
  const logo = document.getElementById("careerModalLogo");
  const meta = document.getElementById("careerModalMeta");
  const title = document.getElementById("careerModalTitle");
  const subtitle = document.getElementById("careerModalSubtitle");
  const tags = document.getElementById("careerModalTags");
  const body = document.getElementById("careerModalBody");
  const focusableSelector = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
  let lastFocusedCard = null;

  const isOpen = () => modal.classList.contains("active");

  const closeModal = () => {
    if (!isOpen()) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("career-modal-open");

    if (lastFocusedCard) {
      lastFocusedCard.focus();
    }
  };

  const openModal = (roleKey, trigger) => {
    const details = careerDetails[roleKey];

    if (!details) return;

    lastFocusedCard = trigger;
    logo.src = details.logo;
    logo.alt = `${details.company} logo`;
    meta.textContent = `${details.date} | ${details.location}`;
    title.textContent = details.company;
    subtitle.textContent = details.role;
    tags.innerHTML = details.tags.map((tag) => `<span>${tag}</span>`).join("");
    body.innerHTML = details.sections
      .map(
        (section) => `
          <section>
            <h4>${section.heading}</h4>
            <ul>
              ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        `,
      )
      .join("");

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("career-modal-open");
    requestAnimationFrame(() => panel.focus());
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.careerRole, card));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      openModal(card.dataset.careerRole, card);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = Array.from(panel.querySelectorAll(focusableSelector)).filter(
      (element) => !element.hasAttribute("disabled") && element.offsetParent !== null,
    );

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });
}

initCareerModal();
