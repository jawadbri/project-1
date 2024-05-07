let board = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.cell')
let refresh = document.querySelector('#refresh')
let results = document.querySelector('.results')
let ships = document.querySelectorAll('.shipClass')
let life = document.querySelector('.life')
let rng = Math.floor(Math.random() * sides.length)
let score = document.querySelector('.score')
let hp = 3
life.innerText = 'you have ' + hp + ' left'
score.innerText = 0

// make a fuction to randomize the ships locations here
// let side = document
//   .querySelectorAll('.test')
//   .forEach((side) => (side.innerHTML = 'e'))
const shipPlace = () => {
  sides.forEach((side) => {
    let randomValue = Math.random()
    if (randomValue < 0.57) {
      side.classList.add('shipClass')
    }
  })
}

shipPlace()
// make the click event function work proparly by checking the inside of the sides not the mainGame and see if there's a ship or not
// if there's a ship, make the box change color, if not, remove one life

// make a fuction that adds a new class (randomly)to [i = i + 5] to use the columns or (||) [i = i + 1 ] for rows. with the conditon of not going over the size of the box. so no (i === 4 && 9 && 14 && 19 && 24) for rows and (i === 20 && 21 && 22 && 23 && 24)

// Attach the click event listener to each side element to check if it's a hit or miss. hit give you points and miss detuct them. you can't get - points so you lose life points
let bommbedShips = 0
let clickListenerEnabled = true // Flag to track whether clickIt event listener is enabled

const clickedHandle = (event) => {
  if (!clickListenerEnabled) return // Check if click listener is enabled
  const side = event.target
  if (side.classList.contains('shipClass')) {
    side.style.backgroundColor = 'green'
    results.innerText = 'You got one, happy?'
    score.innerText = parseInt(score.innerText) + 10

    bommbedShips++

    if (bommbedShips === document.querySelectorAll('.shipClass').length) {
      sides.forEach((side) => {
        side.style.backgroundColor = 'yellow'
      })
      // Disable click listener
      clickListenerEnabled = false
    }
  } else {
    side.style.backgroundColor = 'red'
    results.innerText = 'You need to get gud'
    if (score.innerText <= 0) {
      while (score.innerText <= 0) {
        hp -= 1
        life.innerText = 'you have ' + hp + ' left'
        if (hp <= 0) {
          score.innerHTML = 'you lost'
        }
        break
      }
    } else {
      if (score.innerText > 0) {
        score.innerText = parseInt(score.innerText) - 10
      } else {
        score.innerText = 'something broke'
        console.log('something went wrong')
      }
    }
  }
  side.removeEventListener('click', clickedHandle)
}

const clickIt = () => {
  if (!clickListenerEnabled) return // Check if click listener is enabled
  sides.forEach((side) => {
    side.addEventListener('click', clickedHandle)
  })
}

const nexLevel = () => {
  sides.forEach((side) => {
    side.style.backgroundColor = ''
    results.innerText = ''
    side.classList.remove('shipClass')
    results.innerText = 'hit or miss you ask?'
    life.innerText = 'you have ' + hp + ' left'
  })

  if (hp <= 0) {
    // Reset the ship sides clicked count
    refresh.removeEventListener('click', refreshHandler)
  } else {
    bommbedShips = 0
    shipPlace()
    clickIt()
  }
}

// bring the el again
const refreshHandler = () => {
  if (hp > 0) {
    clickListenerEnabled = true
    nexLevel()
  }
}

refresh.addEventListener('click', refreshHandler)
