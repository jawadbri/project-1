let board = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.cell')
let refresh = document.querySelector('#refresh')
let results = document.querySelector('.results')
let ships = document.querySelectorAll('.shipClass')
let life = document.querySelector('.life')
let rng = Math.floor(Math.random() * sides.length)
let score = document.querySelector('.score')
let hp = 3
let win = document.querySelector('.winningTheRound')
life.innerText = 'you have ' + hp + ' life /s left'
score.innerText = 0
win.innerHTML = 0
let restart = document.querySelector('.restart')
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
// to make the first play correct insted of ""
let finished = true

const scorePoints = (event) => {
  if (!finished) return // Check if click listener is on to play
  const side = event.target
  if (side.classList.contains('shipClass')) {
    side.style.backgroundColor = 'green'
    results.innerText = 'You got one, happy?'
    score.innerText = parseInt(score.innerText) + 10
    win.innerText =
      document.querySelectorAll('.shipClass').length - 1 - bommbedShips++

    if (bommbedShips === document.querySelectorAll('.shipClass').length) {
      sides.forEach((side) => {
        win.style.color = 'yellow'
        win.innerHTML = 'congrats, you won'
      })
      // Disable click listener to stop the game to not lose points
      finished = false
    }
  } else {
    side.style.backgroundColor = 'red'
    results.innerText = 'You need to get gud'
    if (score.innerText <= 0) {
      while (score.innerText <= 0) {
        // lose life when u miss
        hp -= 1
        life.innerText = 'you have ' + hp + ' life/s sleft'
        if (hp <= 0) {
          results.innerText = 'ouch...'
          results.style.color = 'honeydew'
          // when life is lost
          // score.innerHTML = 'you lost'
          score.style.color = 'hotpink'
          life.style.color = 'red'
          life.innerText = 'you have no lifes. GG'
          // remove the el to endecate that you lost
          finished = false
        }
        break
      }
    } else {
      if (score.innerText > 0) {
        // remove point when u miss
        score.innerText = parseInt(score.innerText) - 10
      } else {
      }
    }
  }
  side.removeEventListener('click', scorePoints)
}
// Check if click listener is enabled
const stopClicking = () => {
  if (!finished) return
  sides.forEach((side) => {
    side.addEventListener('click', scorePoints)
  })
}
stopClicking()

const refreshAndEnd = () => {
  sides.forEach((side) => {
    side.style.backgroundColor = ''
    results.innerText = ''
    side.classList.remove('shipClass')
    results.innerText = 'hit or miss you ask?'
    life.innerText = 'you have ' + hp + ' life/s left'
    win.innerText = document.querySelectorAll('.shipClass').length
  })
  if (hp <= 0) {
    // // to check for game over
    finished = false
  } else {
    // when no game over accures. continue the game
    bommbedShips = 0
    shipPlace()
    stopClicking()
  }
}

// bring the el again after it's removed
const refreshHandler = () => {
  if (hp > 0) {
    finished = true
    refreshAndEnd()
  }
}
// make function to reset like an f5 insted of refresh the board for the next level
const reset = () => {
  if (hp === 0) {
    finished = true
    bommbedShips = 0
    sides.forEach((side) => {
      side.style.backgroundColor = ''
      side.classList.remove('shipClass')
    })
    hp = 3
    results.innerText = 'hit or miss you ask?'
    life.innerText = 'you have ' + hp + ' life/s left'
    life.style.color = ''
    shipPlace()
    stopClicking()
  }
}
restart.addEventListener('click', reset)
refresh.addEventListener('click', refreshHandler)
