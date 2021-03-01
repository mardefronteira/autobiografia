function mapa() {
  for (let i = 1; i < 11; i++) {
    // criar imagem de perfil
    const imagem = document.createElement('IMG');
    imagem.src = `perfis/${i}/perfil.jpg`;
    imagem.id = `pessoa-${i}`;
    imagem.classList.add('img-mapa');

    // configurar clique
    imagem.addEventListener('click', (e)=>{mostrarPessoa(e.target.id)});

    // configurar etiqueta
    imagem.addEventListener('hover', (e)=>{mostrarEtiqueta(e.target.id)});

    document.querySelector('#fotos-mapa').appendChild(imagem);
  }
}

function mostrarPessoa(id) {
  // document.querySelector(`#${id}`).classList.add('perfil-selecionado');
  document.querySelector('#nome-pessoa').innerHTML = `NOME ${id}`;
  document.querySelector('#pronome-pessoa').innerHTML = `(pronome / ${id})`;
  document.querySelector('#funcao-pessoa').innerHTML = `Funções que a ${id} desempenha`;
  document.querySelector('#sobre-pessoa').innerHTML = `Falando um monte sobre a ${id}! Bla bla blaaaaaaaa`;
}

function apagarMapa() {
  document.querySelector('#fotos-mapa').innerHTML = '';
  document.querySelector('#perfil').innerHTML = `
    <h2 id="nome-pessoa" class="subtitulo"></h2>
    <p id="pronome-pessoa" class="subtitulo"></p>
    <p id="funcao-pessoa" class="negrito corpo"></p>
    <p id="sobre-pessoa" class="corpo"></p>
  `;
}

function mostrarEtiqueta(id) {
  const etiqueta = document.querySelector('#etiqueta-mapa');
  etiqueta.innerHTML = id;
}
