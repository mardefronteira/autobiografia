function mapa() {
  for (let perfil of perfis) {
    // criar imagem de perfil
    const imagem = document.createElement('IMG');
    imagem.src = `img/perfis/${perfil.id}/${perfil.fotos[0]}`;
    imagem.id = `pessoa-${perfil.id}`;
    imagem.classList.add('img-mapa');

    // configurar clique
    imagem.addEventListener('click', (e)=>{mostrarPessoa(e.target.id)});

    // configurar etiqueta
    imagem.addEventListener('mouseenter', (e)=>{mostrarEtiqueta(e.target.id)});

    imagem.addEventListener('mouseout', () => {
      const etiqueta = document.querySelector('#etiqueta-mapa');
      etiqueta.classList.add('esconder');
      etiqueta.innerHTML = '';
    });

    document.querySelector('#fotos-mapa').appendChild(imagem);
  }

  mapaAberto = true;
}

function mostrarPessoa(id) {
  // encontrar perfil alvo
  let perfil = perfis[id.split('-')[1]];

  // apagar perfil anterior
  document.querySelector('#corpo-perfil').innerHTML = '<p id="sobre-pessoa" class="corpo"></p>'

  // atualizar informações
  // document.querySelector(`#${id}`).classList.add('perfil-selecionado');
  document.querySelector('#nome-pessoa').innerHTML = perfil.nome;
  document.querySelector('#pronome-pessoa').innerHTML = `(${perfil.pronomes})`;
  document.querySelector('#funcao-pessoa').innerHTML = `Funções: ${perfil.funcao}`;
  document.querySelector('#sobre-pessoa').innerHTML = perfil.desc;

  // caso existam, mostrar fotos
  for (let foto of perfil.fotos) {
    if (foto !== perfil.fotos[0]) {
      const img = document.createElement('IMG');
      img.src = `img/perfis/${perfil.id}/${foto}`;;
      img.classList.add('foto-perfil');
      document.querySelector('#corpo-perfil').appendChild(img);
    }
  }

  // rolar página até perfil
  document.querySelector('#perfil').scrollIntoView();
}

// function apagarMapa() {
//   document.querySelector('#fotos-mapa').innerHTML = '';
//   document.querySelector('#perfil').innerHTML = `
//     <h2 id="nome-pessoa" class="subtitulo"></h2>
//     <p id="pronome-pessoa" class="subtitulo"></p>
//     <p id="funcao-pessoa" class="negrito corpo"></p>
//     <p id="sobre-pessoa" class="corpo"></p>
//   `;
// }

function mostrarEtiqueta(id) {
  const perfil = perfis[id.split('-')[1]];
  const etiqueta = document.querySelector('#etiqueta-mapa');
  etiqueta.innerHTML = perfil.nome;
  etiqueta.classList.remove('esconder');
}
