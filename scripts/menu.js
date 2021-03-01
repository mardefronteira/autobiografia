let itensMenu;

function configurarMenu() {
  itensMenu = document.getElementsByClassName('item-menu');
  for (let item of itensMenu) {
    const id = item.id.slice(0,-5);
    item.addEventListener('click', (e) => selecionarItem(e.target.id));
  }
}

function selecionarItem(id) {
  // deselecionar itens do menu
  for (let item of itensMenu) item.classList.remove('negrito');
  // negritar item do menu
  document.querySelector(`#${id}`).classList.add('negrito');

  // esconder todas as páginas, mostrar a selecionada
  esconderTudo();
  mostrarPagina(id.slice(0,-5))
}

function esconderTudo() {
  // esconder todas as páginas
  const paginas = document.getElementsByClassName('pagina');
  for (let pagina of paginas) pagina.classList.add('esconder');

  // esconder todos os fundos
  const fundos = document.getElementsByClassName('fundo');
  for (let fundo of fundos) fundo.classList.add('esconder');

  // resetar mapeamento
   apagarMapa();
}

function mostrarPagina(id) {
  console.log(id);
  switch(id) {
    case 'inicial':
      document.querySelector('#menu').classList.remove('fundo-menu');
      break;
    case 'mapa':
      mapa();
      break;
    default:
      document.querySelector('#menu').classList.add('fundo-menu');
  }


  // localizar e mostrar página alvo e fundo
  const pagina = document.querySelector(`#${id}`);

  pagina.classList.remove('esconder');
  document.querySelector(`#${id}-fundo`).classList.remove('esconder');
}
