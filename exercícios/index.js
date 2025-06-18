// ex1) Inserindo estilos dos botões com JavaScript
// Crie uma página HTML simples que inclua três botões: "Foco", "Descanso Curto" e "Descanso Longo" (o layout não precisa ser muito complexo). Cada botão deve inicialmente ter um estilo básico. Utilize o JavaScript para inserir a classe active entre esses botões, de modo que, ao clicar em um botão, ele receba um estilo destacado (por exemplo, cor de fundo e borda diferenciada). Certifique-se de aplicar os conceitos de manipulação de classes com JavaScript aprendidos, alterando dinamicamente a classe active para indicar o botão selecionado.

// ex2) Alternando o estilo dos botões com JavaScript
// Com o método para aplicar a classe active nos três botões definidos no exercício anterior, repare no seguinte: sempre quando um botão é clicado, o estilo é inserido. Para corrigir isso, aplique, na função alterarContexto, um método para retirar a classe active de modo que ela seja inserida apenas no último botão clicado.

const allBtns = document.querySelectorAll('button');

allBtns.forEach(btn => btn.addEventListener('click', () => {
  allBtns.forEach(btn => btn.classList.remove('active'));
  btn.classList.add("active");
} ))


// 3)Controlando a reprodução de música com um Checkbox
// Desenvolva, no projeto Fokus, um input do tipo checkbox para controlar a reprodução de um arquivo de música. O arquivo de áudio, luna-rise-part-one.mp3, deve começar a tocar quando o checkbox for marcado e parar quando for desmarcado. Implemente essa lógica usando o JavaScript, criando um objeto Audio para o arquivo de música e um EventListener para o checkbox que verifica o estado da propriedade paused do objeto Audio, alternando entre os métodos play e pause conforme o estado do checkbox.

// 4) Reproduzindo arquivo de Audio em modo infinito
// Você já aprendeu como inserir arquivos de Audio em um projeto utilizando JavaScript, e também aplicou métodos para reproduzir e pausar esse tipo de arquivo. Nesse momento, você deve utilizar das técnicas aplicadas nesta aula para fazer um arquivo de Audio ser reproduzido em modo de loop, ou seja, iniciando automaticamente sempre que finalizado.


const checkbox = document.getElementById('alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true

checkbox.addEventListener('change', () =>{
  if(musica.paused){
    musica.play();
  }else{
    musica.pause();
  }
})

