const playButton = document.querySelector('.play')
const pausebutton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let inputMinutes = Number(minutesDisplay.textContent);
let countDownInterval

playButton.addEventListener('click', ()=>{
  playPauseToggle();
  stopSetTpggle();
  countDown();

})

pausebutton.addEventListener('click', () => {
  playPauseToggle();
  updateTimerDisplay(inputMinutes, 0)
  clearInterval(countDownInterval)
})

stopButton.addEventListener('click', () => {
  stopToggle();
  updateTimerDisplay(inputMinutes, 0)
  clearInterval(countDownInterval)

})

soundOnButton.addEventListener('click', () => {
  soundToggle();
})

soundOffButton.addEventListener('click', () => {
  soundToggle();
})

setButton.addEventListener('click', () => {
  inputMinutes = prompt('digite a quantidade de minutos')
  minutesDisplay.textContent = inputMinutes.padStart(2,'0')

})

function countDown() {
  countDownInterval = setInterval(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds === 0 && minutes > 0){
      seconds = 10
      updateTimerDisplay(--minutes, 60)
      
    }else if (seconds === 0 && minutes === 0){
      stopToggle()
      clearInterval(countDownInterval)
      return
    }
    updateTimerDisplay(minutes, --seconds)
  }, 1000);
}


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function playPauseToggle() {
  playButton.classList.toggle('hide')
  pausebutton.classList.toggle('hide')
}

function stopSetTpggle(){
  stopButton.classList.remove('hide')
  setButton.classList.add('hide')
}

function stopToggle() {
  playButton.classList.remove('hide')
  pausebutton.classList.add('hide')
  stopButton.classList.toggle('hide')
  setButton.classList.toggle('hide')
}

function soundToggle() {
  soundOffButton.classList.toggle('hide')
  soundOnButton.classList.toggle('hide')
}