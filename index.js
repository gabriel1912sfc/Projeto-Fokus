//seleciona os botões e altera o data-contexto a partir do clique
const html = document.querySelector('html');
const allBtns = document.querySelectorAll('button');
const image = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');
const strongText = document.getElementsByClassName('app__title-strong');


allBtns.forEach(btn => btn.addEventListener('click', () => {
  let buttonDataContext = btn.getAttribute('data-contexto');
  changeContext(buttonDataContext);
}))

function changeContext(buttonDataContext){
 //Evita que botões sem data-context sejam chamados.
    if (buttonDataContext != null){
      console.log(buttonDataContext)
      html.setAttribute('data-contexto', buttonDataContext); 
      //Troca a imagem de acordo com o contexto do botão clicado. 
      image.setAttribute('src', `/imagens/${buttonDataContext}.png`);
  }

  if(buttonDataContext == 'foco'){
    appTitle.innerHTML = `Otimize sua produtividade,<br>
                 <strong class="app__title-strong">mergulhe no que importa.</strong>`;
  } else if(buttonDataContext == 'short'){
       appTitle.innerHTML = `Que tal dar uma respirada?<br>
                 <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
  } else if(buttonDataContext == 'long'){
       appTitle.innerHTML = `Hora de voltar à superfície.<br>
                 <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
  }
}

