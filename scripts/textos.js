function configurarTextos() {
  for (let texto of textos) {
    const i = textos.indexOf(texto);
    console.log(i, texto.titulo);
    const alvo = document.querySelector(`#texto-${i}`);
    alvo.addEventListener("click", () => {
      document.querySelector("#src-audio-texto").src = `audios/${texto.audio}`;
      document.querySelector("#audio-texto").load();
      document.querySelector("#img-texto").src = `img/posters/${texto.img}`;
      document.querySelector("#img-texto").alt = texto.legenda;
      document.querySelector("#legenda-texto").innerHTML = texto.legenda;
      document.querySelector("#titulo-texto").innerHTML = texto.titulo;
      document.querySelector(
        "#autora-texto"
      ).innerHTML = `Escrito por: ${texto.autora}`;
      document.querySelector("#resumo-texto").innerHTML = texto.resumo;
      document.querySelector("#corpo-texto").innerHTML = texto.texto;

      // mostrar página do vídeo
      esconderTudo();
      document.querySelector("#texto").classList.remove("esconder");
      document.querySelector("#texto-fundo").classList.remove("esconder");
    });
  }
}
