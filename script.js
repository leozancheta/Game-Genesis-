let order = [];
let clickedOrder =[];
let score = 0;



const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria order aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementColor = creatColorElement(order[i])
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
     number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkorder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break; 
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o click do usuáro

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
        checkorder();
    },250);  
}

//função que retorna a cor
let creatColorElement = (color) => {
    if(color == 0) {
        return green;
    }
    else if(color == 1) {
        return red;
    }
    else if(color == 2){
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
}

//funão para próximo lvl do jogo

let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//função caso perca o jogo

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perde o jogo!\n clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();

}
 //incia o jogo depois de perder

 let playGame =() => {
    alert('Bem vindo ao Genesis! Iniciando um novo jogo!')
    score = 0;

    nextLevel();
 }

 green.onclick = () => click(0);
 red.onclick = () => click(1);
 yellow.onclick = () => click(2);
 blue.onclick = () => click(3);

 playGame();