import { Timer } from "./timer.js"
import { Countrols } from "./controls.js"

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



const controls = Countrols({playButton,pausebutton,stopButton,setButton})
const timer = Timer({ minutesDisplay, secondsDisplay, resetControls : controls.reset, minutes })

playButton.addEventListener('click', () => {
  controls.play()
  timer.countDown();

})

pausebutton.addEventListener('click', () => {
  controls.pause();
  timer.StopTimer()
})

stopButton.addEventListener('click', () => {
  controls.reset();
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
  timer.updateMinutes(inputMinutes.value)
})

function modalToggle() {
  modalInput.classList.toggle('hide')
}


function soundToggle() {
  soundOffButton.classList.toggle('hide')
  soundOnButton.classList.toggle('hide')
}