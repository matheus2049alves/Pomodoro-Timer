

export function Countrols({playButton,pausebutton,stopButton,setButton}){
  function reset() {
    playButton.classList.remove('hide')
    pausebutton.classList.add('hide')
    stopButton.classList.toggle('hide')
    setButton.classList.toggle('hide')
  }

  function play() {
    playPauseToggle()
    setToStop()
  }

  function pause() {
    playPauseToggle()
  }

  function playPauseToggle() {
    playButton.classList.toggle('hide')
    pausebutton.classList.toggle('hide')
  }

  function setToStop() {
    stopButton.classList.remove('hide')
    setButton.classList.add('hide')
  }

  return {
    reset,
    play,
    pause
  }
}