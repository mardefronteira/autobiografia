window.addEventListener("load", iniciar);

let mouse = {
  x: 0,
  y: 0,
};

let primeiroLoad = true;

function iniciar() {
  // configurarMenu();
  configurarVideos();
  configurarTextos();

  mapa();

  window.addEventListener("mousemove", (e) => {
    e = e || window.event;

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (mouse.x === undefined) {
      mouse.x =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      mouse.y =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    let etiqueta = document.querySelector("#etiqueta-mapa");
    if (!document.querySelector("#mapa").classList.contains("esconder")) {
      etiqueta.style.top = `${mouse.y}px`;
      etiqueta.style.left = `${mouse.x}px`;
    }
  });

  const videoApresentação = document.querySelector("#apresentacao");

  videoApresentação.addEventListener("ended", () => {
    videoApresentação.load();
  });

  primeiroLoad = false;
}
