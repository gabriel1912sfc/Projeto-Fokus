//seleciona os botões e altera o data-contexto a partir do clique
const html = document.querySelector('html');
const allBtns = document.querySelectorAll('button');

allBtns.forEach(btn => btn.addEventListener('click', () => {
  let buttonDataContext = btn.getAttribute('data-contexto');
  //Evita que botões sem data-context sejam chamados
  if (buttonDataContext != null){
      console.log(buttonDataContext)
      html.setAttribute('data-contexto', buttonDataContext); 
  }
}))