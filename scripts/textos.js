function mostrarTexto(texto) {

  // imagem
  document.querySelector("#img-texto").src = `img/posters/${texto.img}`;
  document.querySelector("#img-texto").alt = texto.legenda;
  document.querySelector("#legenda-texto").innerHTML = texto.legenda;

  // título
  document.querySelector("#titulo-texto").innerHTML = texto.titulo;

  // autora
  document.querySelector(
    "#autora-texto"
  ).innerHTML = `Escrito por: ${texto.autora}`;

  // player de áudio
  if (texto.audio !== "") {
    document.querySelector("#src-audio-texto").src = `audios/${texto.audio}`;
    document.querySelector("#audio-texto").load();
    document.querySelector("#div-audio-texto").style = "display:block"
  } else {
    document.querySelector("#div-audio-texto").style = "display:none"
  }

  // resumo
  document.querySelector("#resumo-texto").innerHTML = texto.resumo;

  // artigo (corpo do texto)
  document.querySelector("#corpo-texto").innerHTML = texto.texto;

  // mostrar página do texto
  mostrarPagina("texto");
  
}
