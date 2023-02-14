let startToGame = +prompt('How many seconds do you want to play')
let complexity = prompt('What difficulty do you want 1, 2, 3, 4 . Enter the required number in the field below')

if(complexity == '1') {
  setInterval(()=> {
    setLocationToSquare()
  }, 3000)

  
} else if(complexity == '2') {
  setInterval(()=> {
    setLocationToSquare()
  }, 2000)

}else if(complexity == '3') {
  setInterval(()=> {
    setLocationToSquare()
  }, 1000)
}else if(complexity == '4') {
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
}



setTimeout(() => {
  alert( 'вы набрали:  '    + counter + '  Очков' )
}, startToGame * 1000)




const audio = new Audio("./audio/score.mp3");
const buttons = document.querySelectorAll(".kauvec_adelon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  })});




  let timer; // пока пустая переменная
  let x = startToGame; // стартовое значение обратного отсчета
  countdown(); // вызов функции
  function countdown(){  // функция обратного отсчета
    document.getElementById('rocket').innerHTML = x;
    x--; // уменьшаем число на единицу
    if (x<0){
      clearTimeout(timer); // таймер остановится на нуле
    
    }
    else {
      timer = setTimeout(countdown, 1000);
    }
  } 



  const musicAudio = new Audio("./audio/Sean&Bobo.mp3");
  const music = document.querySelectorAll(".music");
  
  music.forEach(music => {
    music.addEventListener("click", () => {
    musicAudio.play();
    })});