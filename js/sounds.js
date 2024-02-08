
export default function() {
  const buttonPressed = new Audio('./sounds/buttonPressed.wav')
  const soundBg = new Audio('./sounds/defaultBg.mp3')
  const kitchenTime = new Audio('./sounds/kitchenTimer.mp3')

  function pressButton() {
    buttonPressed.play()
  }

  function timeEnd() {
    kitchenTime.play()
  }

  soundBg.loop = true



  return {
    pressButton,
    timeEnd,
    soundBg
  }
}