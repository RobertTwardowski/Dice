const dice1 = document.querySelector('.img1')
const dice2 = document.querySelector('.img2')
const btn = document.querySelector('.btn-1')
const h = document.querySelector('h1')

const roll = (number1,number2) => {
    dice1.src = `images/dice${number1}.png`
    dice2.src = `images/dice${number2}.png`
    if(number1 < number2){
        h.textContent = "Player 2 Win"
    }
    if(number1 > number2){
        h.textContent = 'Player 1 Win'
    }
   if(number1===number2){
    h.textContent = 'Draw'
   }
}

const randomNumber = () => {
    let number1 = Math.floor(Math.random()*6)+1
    let number2 = Math.floor(Math.random()*6)+1
    roll(number1,number2)
}

btn.addEventListener('click',randomNumber)

