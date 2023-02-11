let startToGame = +prompt('сколько секунд вы хотите играть')
let complexity = prompt('Какую сложность вы хотите Легко, Нормально, Сложно, Эксперт')

if(complexity == 'Легко') {
  setInterval(()=> {
    setLocationToSquare()
  }, 3000)

  

} else if(complexity == 'Нормально') {
  setInterval(()=> {
    setLocationToSquare()
  }, 2000)

}else if(complexity == 'Сложно') {
  setInterval(()=> {
    setLocationToSquare()
  }, 1000)
}else if(complexity == 'Эксперт') {
  setInterval(()=> {
    setLocationToSquare()
  }, 500)
const color = document.querySelector('.square')
color.style.background = 'brown'
  
}


let counter = 0;
const counterAttr = document.querySelector('#counter')
const square = document.querySelector('#square')
counterAttr.innerHTML = counter
square.addEventListener('click', () => {
  counter++
counterAttr.innerHTML = counter
setLocationToSquare()
})

function setRandomNumbers() {
  return{left: Math.floor(Math.random() * 380),
         right: Math.floor(Math.random() * 380),
         bottom: Math.floor(Math.random() * 380),
         top: Math.floor(Math.random() * 380)
}
}

function setLocationToSquare() {
  const {left, right, top, bottom} =  setRandomNumbers()
  square.style.left = left +'px'
  square.style.bottom = bottom + 'px'
  square.style.top = top + 'px'
  square.style.right = right + 'px'
  square.style.background = generateRandomColor()
}


function generateRandomColor(){
  let maxVal = 0xFFFFFF; 
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`
}


setTimeout(() => {
  alert( 'вы набрали:  '    + counter + '  Очков' )
}, startToGame * 1000)




const audio = new Audio("./audio/score.mp3");
const buttons = document.querySelectorAll(".kauvec_adelon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});