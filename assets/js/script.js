let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImagem = 'dice' + randomNumber1 + '.png';

let randomImagemSource = 'assets/img/images/' + randomDiceImagem;

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImagemSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImagemSource2 = 'assets/img/images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImagemSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 jogador 1 ganhou'
} else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = '🏆 jogador 2 ganhou'
} else {
    document.querySelector('h1').innerHTML ='Empate';
}

document.getElementById('refreshbtn').addEventListener('click', function () {
   location.reload();
})
