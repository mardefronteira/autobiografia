function mapa() {
  for (let perfil of perfis) {
    // criar imagem de perfil
    const imagem = document.createElement("IMG");
    imagem.src = `img/perfis/${perfil.id}/${perfil.fotos[0]}`;
    imagem.id = `pessoa-${perfil.id}`;
    imagem.classList.add("img-mapa");

    // configurar clique
    imagem.addEventListener("click", (e) => {
      mostrarPessoa(e.target.id);
    });

    // configurar etiqueta
    imagem.addEventListener("mouseenter", (e) => {
      mostrarEtiqueta(e.target.id);
    });

    imagem.addEventListener("mouseout", () => {
      const etiqueta = document.querySelector("#etiqueta-mapa");
      etiqueta.classList.add("esconder");
      etiqueta.innerHTML = "";
    });

    document.querySelector("#fotos-mapa").appendChild(imagem);
  }

  mapaAberto = true;
}

function mostrarPessoa(id) {
  // encontrar perfil alvo
  let perfil = perfis[id.split("-")[1]];

  // apagar fotos do perfil anterior
  document.querySelector("#fotos-perfil").innerHTML = "";

  // atualizar informações
  // document.querySelector(`#${id}`).classList.add('perfil-selecionado');
  document.querySelector("#nome-pessoa").innerHTML = perfil.nome;
  document.querySelector("#pronome-pessoa").innerHTML = `(${perfil.pronomes})`;
  document.querySelector(
    "#funcao-pessoa"
  ).innerHTML = `Funções: ${perfil.funcao}`;
  document.querySelector("#sobre-pessoa").innerHTML = perfil.bio;

  perfil.citacao !== ""
    ? (document.querySelector("#citacao-pessoa").innerHTML = perfil.citacao)
    : "";

  perfil.contato !== ""
    ? (document.querySelector(
        "#contato-pessoa"
      ).innerHTML = `Contato: ${perfil.contato}`)
    : "";

  perfil.portfolio !== ""
    ? (document.querySelector(
        "#portfolio-pessoa"
      ).innerHTML = `Portfolio: ${perfil.portfolio}`)
    : "";

  // caso existam, mostrar fotos
  for (let foto of perfil.fotos) {
    if (foto !== perfil.fotos[0]) {
      const img = document.createElement("IMG");
      img.src = `img/perfis/${perfil.id}/${foto}`;
      img.classList.add("foto-perfil");
      document.querySelector("#fotos-perfil").appendChild(img);
    }
  }

  // mostrar fundo perfil
  document.querySelector("#luz-mapa-2").classList.remove("esconder");

  // mostrar perfil e rolar até ele
  let elementoPerfil = document.querySelector("#perfil");
  elementoPerfil.classList.remove("esconder");
  elementoPerfil.scrollIntoView();
}

function mostrarEtiqueta(id) {
  const perfil = perfis[id.split("-")[1]];
  const etiqueta = document.querySelector("#etiqueta-mapa");
  etiqueta.innerHTML = perfil.nome;
  etiqueta.classList.remove("esconder");
}
