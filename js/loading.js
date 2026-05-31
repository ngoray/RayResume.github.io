function move() {
  const loading = document.getElementById("Loading");
  const home = document.getElementById("Home");
  const start = document.getElementById("Start");
  const progress = document.getElementById("myBar");
  let width = 20;

  start.style.display = "none";
  loading.style.display = "block";

  const timer = setInterval(() => {
    if (width >= 100) {
      clearInterval(timer);
      loading.style.display = "none";
      home.style.display = "block";
      return;
    }

    width++;
    progress.style.width = `${width}%`;
    progress.textContent = `${width}%`;
  }, 20);
}
