let board = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.cell')
let refresh = document.querySelector('#refresh')
let results = document.querySelector('.results')
let ships = document.querySelectorAll('.shipClass')
let health = document.querySelector('.hp')
let rng = Math.floor(Math.random() * sides.length)
// make a fuction to randomize the ships locations here
// let side = document
//   .querySelectorAll('.test')
//   .forEach((side) => (side.innerHTML = 'e'))
const shipPlace = () => {
  sides.forEach((side) => {
    let randomValue = Math.random()
    if (randomValue < 0.6) {
      side.classList.add('shipClass')
    }
  })
}

shipPlace()
// make the click event function work proparly by checking the inside of the sides not the mainGame and see if there's a ship or not
// if there's a ship, make the box change color, if not, remove one life

// make a fuction that adds a new class (randomly)to [i = i + 5] to use the columns or (||) [i = i + 1 ] for rows. with the conditon of not going over the size of the box. so no (i === 4 && 9 && 14 && 19 && 24) for rows and (i === 20 && 21 && 22 && 23 && 24)
sides.forEach((side) => {
  side.addEventListener('click', () => {
    if (side.classList.contains('shipClass')) {
      side.style.backgroundColor = 'green'
      results.innerText = 'u got one, happy?'
      console.log('ss')
    } else {
      side.style.backgroundColor = 'red'
      results.innerText = 'you need to get gud'
      console.log('S')
      // make every click remove one point at a time
    }
  })
})

refresh.addEventListener('click', () => {
  sides.forEach((side) => {
    side.style.backgroundColor = ''
    results.innerText = ''
    side.classList.remove('shipClass')
  })
  shipPlace()
})
