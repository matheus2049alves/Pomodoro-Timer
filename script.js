import { Timer } from "./timer.js"

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


const timer = Timer({minutesDisplay,secondsDisplay,stopToggle,minutes})

playButton.addEventListener('click', ()=>{
  playPauseToggle();
  stopSetTpggle();
  timer.countDown();

})

pausebutton.addEventListener('click', () => {
  playPauseToggle();
  timer.StopTimer()
})

stopButton.addEventListener('click', () => {
  stopToggle();
  timer.resetTimer()

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

  timer.updateTimerDisplay(inputMinutes.value, 0)
})

function modalToggle() {
  modalInput.classList.toggle('hide')
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