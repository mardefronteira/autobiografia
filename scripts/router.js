function displayHash() {
  primeiroLoad ? iniciar() : "";

  var hash = window.location.hash.slice(1);

  if (["mapa", "videos", "textos", "sobre"].includes(hash)) {
    selecionarItem(`${hash}-menu`);
    mostrarPagina(hash);
  } else if (hash.startsWith("video")) {
    mostrarVideo(videos[hash.split("-")[1]]);
  } else if (hash.startsWith("texto")) {
    mostrarTexto(textos[hash.split("-")[1]]);
  } else {
    selecionarItem(false);
    mostrarPagina("inicial");
  }
}

window.addEventListener("hashchange", function () {
  // console.log("hashchange event");
  displayHash();
});

window.addEventListener("DOMContentLoaded", function (ev) {
  // console.log("DOMContentLoaded event");
  displayHash();
});
