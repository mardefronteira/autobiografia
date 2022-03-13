function mostrarVideo(video) {
  if (video.src !== "") {
    document.querySelector("#elem-video").poster = `img/posters/${video.poster}`;
    document.querySelector("#src-video").src = `videos/${video.src}`;
    video.legenda !== ""
      ? (document.querySelector("#legenda-video").src = `videos/${video.legenda}`)
      : (document.querySelector("#legenda-video").src = ``);
    document.querySelector("#elem-iframe").style = "display: none;"
    document.querySelector("#elem-video").style = "display:block";
  } else {
    document.querySelector("#elem-iframe").src = `https://www.youtube-nocookie.com/embed/${video.idYoutube}`;
    document.querySelector("#elem-iframe").style = "display: block;"
    document.querySelector("#elem-video").style = "display: none";
  }
  
  document.querySelector("#titulo-video").innerHTML = video.titulo;
  document.querySelector("#desc-video").innerHTML = video.desc;


  // mostrar página do vídeo
  esconderTudo();
  document.querySelector("#video").classList.remove("esconder");
  document.querySelector("#video-fundo").classList.remove("esconder");
}
