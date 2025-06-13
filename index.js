const html = document.querySelector('html');
const allBtns = document.querySelectorAll('button');

allBtns.forEach(btn => btn.addEventListener('click', () => {
  let buttonDataContext = btn.getAttribute('data-contexto');
  console.log(buttonDataContext)
  html.setAttribute('data-contexto', buttonDataContext); 
}))