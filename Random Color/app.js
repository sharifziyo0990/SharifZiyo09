const colorBox = document.querySelector('#color-box')
const box = document.querySelector('#box')
const colorText = document.querySelector('#color-text')
const btn = document.querySelector('#btn')
const values = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

// random color function
function getGradient() {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length)
    color += values[randomNumber]
  }

  return color
}

// set color to colorBox
function setGradient() {
  const color1 = getGradient()
  const color2 = getGradient()
  const randomDeg = Math.trunc(Math.random() * 360)
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`
  colorBox.style.background = bgColor
  colorText.textContent = bgColor
}

setGradient()

box.addEventListener('click', setGradient)

btn.addEventListener('click', ()=>{
  colorText.textContent = '#000000'
  colorBox.style.background = 'black'
})