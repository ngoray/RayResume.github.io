
function startMapAnimation() {
    var map = L.map('mappew').setView([0, 0], 1); // Adjust the zoom level here

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var originalWords = [
      "Html",
      "CSS",
      "JavaScript",
      "NodeJS",
      "TypeScript",
      "C++",
      "Python",
      "MySQL",
      "MongoDB",
      "Agile Methodology",
      "S.C.R.U.M",
      "Windows Batch Scripting",
      "Figma",
      "Cisco Packet Tracer",
      "Object-Oriented Programming",
      "IBM Qradar",
      "Cortex XSOAR",
      "CrowdStrike",
      "Splunk",
      "Me" // Added "Me" to the list
    ];

    var meMarker; // Reference to the current "Me" marker

    function getRandomLatLng() {
      var lat = (Math.random() - 0.5) * 180;
      var lng = (Math.random() - 0.5) * 360;
      return L.latLng(lat, lng);
    }

    function animateLine(fromLatLng, toLatLng, onComplete) {
      var line = L.polyline([fromLatLng, fromLatLng], {
        color: 'red',
        weight: 2,
      }).addTo(map);

      var animFraction = 0;
      var animation = setInterval(function () {
        animFraction += 0.02;
        var interpolatedLatLng = L.latLng(
          fromLatLng.lat + (toLatLng.lat - fromLatLng.lat) * animFraction,
          fromLatLng.lng + (toLatLng.lng - fromLatLng.lng) * animFraction
        );

        line.setLatLngs([fromLatLng, interpolatedLatLng]);

        if (animFraction >= 1.0) {
          clearInterval(animation);
          map.removeLayer(line);
          onComplete();
        }
      }, 20);
    }

    function displayWordPopup(word, latLng) {
      var popup = L.popup({
        className: 'word-popup',
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
      })
      .setLatLng(latLng)
      .setContent(word)
      .addTo(map);

      setTimeout(function () {
        popup.getElement().style.opacity = 0;
        setTimeout(function () {
          map.removeLayer(popup);
        }, 1000);
      }, 2000);
    }

    function logMessage(message) {
      var chatLog = document.getElementById('chatlog');
      var logEntry = document.createElement('div');
      logEntry.textContent = message;
      chatLog.appendChild(logEntry);

      // Move the scroll to the bottom after adding a new log entry
      setTimeout(function () {
        chatLog.scrollTop = chatLog.scrollHeight;
      }, 0);
    }

    function attackWordsFromMe() {
      var words = [...originalWords]; // Create a copy of the original array

      var meIndex = words.indexOf("Me");
      if (meIndex !== -1) {
        var meLatLng = getRandomLatLng();

        // Remove the old "Me" marker if it exists
        if (meMarker) {
          map.removeLayer(meMarker);
        }

        meMarker = L.marker([meLatLng.lat, meLatLng.lng], {
          icon: L.divIcon({
            className: 'my-div-icon',
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            html: '<div style="background-color: red; border-radius: 50%; width: 20px; height: 20px;"></div>'
          })
        }).addTo(map);

        map.panTo(meLatLng); // Pan the map to the new "Me" location

        words.splice(meIndex, 1); // Remove "Me" from the list

        function attackNextWord() {
          if (words.length > 0) {
            var nextWord = words.shift();
            var wordLatLng = getRandomLatLng();

            animateLine(meLatLng, wordLatLng, function () {
              displayWordPopup(nextWord, wordLatLng);
              logMessage('My New Skill is:  ' + nextWord);
              attackNextWord();
            });
          } else {
            // Restart the attack after a delay
            setTimeout(attackWordsFromMe, 2000);
          }
        }

        attackNextWord();
      }
    }

    attackWordsFromMe();
  };

function Reveal(){
    document.getElementById("rev").style.display = "none";
    document.getElementById("rev2").style.display = "block";

    startMapAnimation();
}


function toggleFullScreen() {
  var container = document.getElementById("containerpew");
  container.classList.toggle("full-screen-mode");
}
