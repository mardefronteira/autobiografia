const videos = [
  {
    src: "entrevista_lucri.mp4",
    poster: "entrevista_lucri.jpg",
    legenda: "entrevista_lucri.vtt",
    titulo: "Bate Papo com a Iluminadora Lucri Reggiani de Curitiba PR",
    desc: `entrevistadora NINA ROSA SÁ<br/>
    apoio CAROL WINTER<br/>
    edição NADJA NAIRA<br/>
    entrevista gravada via zoom em janeiro de 2021<br/>
    duração 20 minutos
    `,
  },
  {
    src: "entrevista_semy.mp4",
    poster: "entrevista_semy.jpg",
    legenda: "entrevista_semy.vtt",
    titulo: "Bate Papo com a iluminadora Semy Monastier de Curitiba PR",
    desc: `entrevistadora NINA ROSA SÁ<br/>
    apoio CAROL WINTER<br/>
    edição NADJA NAIRA<br/>
    entrevista gravada via zoom em janeiro de 2021<br/>
    duração 35 minutos
    `,
  },
];

function configurarVideos() {
  for (let video of videos) {
    const i = videos.indexOf(video);
    const alvo = document.querySelector(`#video-${i}`);
    alvo.addEventListener("click", () => {
      document.querySelector("#src-video").src = `videos/${video.src}`;
      document.querySelector("#legenda-video").src = `videos/${video.legenda}`;
      document.querySelector(
        "#elem-video"
      ).poster = `img/posters/${video.poster}`;
      document.querySelector("#titulo-video").innerHTML = video.titulo;
      document.querySelector("#desc-video").innerHTML = video.desc;

      // mostrar página do vídeo
      esconderTudo();
      document.querySelector("#video").classList.remove("esconder");
      document.querySelector("#video-fundo").classList.remove("esconder");
    });
  }
}
