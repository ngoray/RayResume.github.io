function move() {
    var i = 0;
    var x = document.getElementById("Loading");
    var y = document.getElementById("Home");
    var z = document.getElementById("Start");
    // document.body.style.backgroundImage = "url('./images/matrixtunnel1.gif')";   
    if (i == 0) {
      z.style.display = "none";
      x.style.display = "block";
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 20;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          x.style.display = "none";
          y.style.display = "block";
          document.body.style.backgroundImage = "url('./images/matrix.gif')";
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }