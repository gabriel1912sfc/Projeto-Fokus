//seleciona os botões e altera o data-contexto a partir do clique
const html = document.querySelector('html');
const allBtns = document.querySelectorAll('button');
const image = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');
const strongText = document.getElementsByClassName('app__title-strong');
const music = new Audio('/sons/luna-rise-part-one.mp3');
const musicCheckbox = document.getElementById('alternar-musica');
const startPauseBtn = document.getElementById('start-pause');
music.loop = true;

let timeInSeconds = 5;
let intervalId = null;

//Ativa a musica com a mudança do toggle switch
musicCheckbox.addEventListener('change', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
})

allBtns.forEach(btn => btn.addEventListener('click', () => {
  let buttonDataContext = btn.getAttribute('data-contexto');
  changeContext(buttonDataContext);
  btn.classList.add("active");
}))

function changeContext(buttonDataContext) {
  allBtns.forEach((btn) => {
    btn.classList.remove("active");
  })
  //Evita que botões sem data-context sejam chamados.
  if (buttonDataContext != null) {
    html.setAttribute('data-contexto', buttonDataContext);
    //Troca a imagem de acordo com o contexto do botão clicado. 
    image.setAttribute('src', `/imagens/${buttonDataContext}.png`);
  }

  if (buttonDataContext == 'foco') {
    appTitle.innerHTML = `Otimize sua produtividade,<br>
                 <strong class="app__title-strong">mergulhe no que importa.</strong>`;
  } else if (buttonDataContext == 'short') {
    appTitle.innerHTML = `Que tal dar uma respirada?<br>
                 <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
  } else if (buttonDataContext == 'long') {
    appTitle.innerHTML = `Hora de voltar à superfície.<br>
                 <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
  }
}

//lógica da contagem regressiva.
function countDown() {
  if(timeInSeconds <= 0){
    clearTime();
    alert('Tempo Finalizado');
    //define o tempo como 5 segundos novamente. 
    timeInSeconds = 5;
    return
  }
  timeInSeconds -= 1;
  console.log(timeInSeconds);
}

startPauseBtn.addEventListener('click', startPause);
//inicia ou pausa a contagem regressiva.
function startPause() {
  if (intervalId) {
    clearTime()
    return
  }

  intervalId = setInterval(countDown, 1000);
}

function clearTime() {
  clearInterval(intervalId);
  intervalId = null;
}