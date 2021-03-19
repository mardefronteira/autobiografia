function configurarVideos() {
  // for (let video of videos) {
  //   const i = videos.indexOf(video);
  //   const alvo = document.querySelector(`#video-${i}`);
  //
  //   alvo.addEventListener("click", () => {
  //     mostrarVideo(video);
  //   });
  // }
}

function mostrarVideo(video) {
  console.log(video);
  document.querySelector("#src-video").src = `videos/${video.src}`;
  document.querySelector("#legenda-video").src = `videos/${video.legenda}`;
  document.querySelector("#elem-video").poster = `img/posters/${video.poster}`;
  document.querySelector("#titulo-video").innerHTML = video.titulo;
  document.querySelector("#desc-video").innerHTML = video.desc;

  // mostrar página do vídeo
  esconderTudo();
  document.querySelector("#video").classList.remove("esconder");
  document.querySelector("#video-fundo").classList.remove("esconder");
}
