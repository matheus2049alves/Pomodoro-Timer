
export function Timer({minutesDisplay,secondsDisplay,resetControls,minutes}){
  let returTime
  let countDownInterval

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearInterval(countDownInterval)
    
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
    returTime = newMinutes
  }

  function StopTimer (){
    clearInterval(countDownInterval)
  }


  function countDown() {

    countDownInterval = setInterval(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (seconds === 0 && minutes > 0){
        seconds = 60
        updateTimerDisplay(--minutes, 60)
        
      }else if (seconds === 0 && minutes === 0){
        resetControls()
        clearInterval(countDownInterval)
        updateTimerDisplay(returTime,0)
        return
      }
      updateTimerDisplay(minutes, --seconds)
    }, 1000);
  }


  return {
    updateTimerDisplay,
    countDown,
    resetTimer,
    StopTimer,
    updateMinutes
  }
}