const playButton = document.querySelector('.play')
const pausebutton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const modalInput = document.querySelector('.modal-input')
const defineMinutesButton = document.querySelector('.defineMinutesButton')
const inputMinutes = document.querySelector('#inputMinutes')
let minutes = Number(minutesDisplay.textContent);
let countDownInterval

playButton.addEventListener('click', ()=>{
  playPauseToggle();
  stopSetTpggle();
  countDown();

})

pausebutton.addEventListener('click', () => {
  playPauseToggle();
  clearInterval(countDownInterval)
})

stopButton.addEventListener('click', () => {
  stopToggle();
  updateTimerDisplay(minutes, 0)
  clearInterval(countDownInterval)

})

soundOnButton.addEventListener('click', () => {
  soundToggle();
})

soundOffButton.addEventListener('click', () => {
  soundToggle();
})

setButton.addEventListener('click', () => {
  modalToggle()
})

defineMinutesButton.addEventListener('click', (e) => {
  e.preventDefault()
  modalToggle()
  updateTimerDisplay(inputMinutes.value, 0)
})


function countDown() {
  countDownInterval = setInterval(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds === 0 && minutes > 0){
      seconds = 60
      updateTimerDisplay(--minutes, 60)
      
    }else if (seconds === 0 && minutes === 0){
      stopToggle()
      clearInterval(countDownInterval)
      return
    }
    updateTimerDisplay(minutes, --seconds)
  }, 1000);
}

function modalToggle() {
  modalInput.classList.toggle('hide')
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