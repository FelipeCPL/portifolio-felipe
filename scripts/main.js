document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  });

  document.querySelectorAll("section:not(.inicio)").forEach(sec => {
    observer.observe(sec);
  });
});
/*Funcionalidade do botão para subir novamente a página*/
const topoBtn = document.getElementById("botaoTopo");
window.addEventListener("scroll", () => {
  topoBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topoBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/*Efeito estrelado na página*/
const canvas = document.getElementById("estrelas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const estrelaQtd = 200;
  const estrelas = [];

  for (let i = 0; i < estrelaQtd; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02
    });
  }

  function animarEstrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let estrela of estrelas) {
      estrela.alpha += estrela.delta;
      if (estrela.alpha <= 0 || estrela.alpha >= 1) estrela.delta *= -1;

      ctx.beginPath();
      ctx.arc(estrela.x, estrela.y, estrela.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${estrela.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(animarEstrelas);
  }

  animarEstrelas();

