let mainGame = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.test')
let refresh = document.querySelector('.refresh')
// create a

// make a fuction to randomize the ships locations here
// let side = document
//   .querySelectorAll('.test')
//   .forEach((side) => (side.innerHTML = 'e'))

// make the click event function work proparly by checking the inside of the sides not the mainGame and see if there's a ship or not
// if there's a ship, make the box change color, if not, remove one life
mainGame.addEventListener('click', () => {
  if (side == 'e') {
    console.log('basinka')
  } else {
    console.log('somethin aint right')
  }
})
// add a small box to the side of the board for hints
// you get 3 hints that showes you a 2x2 with one ship part inside of them
refresh.addEventListener('click', () => {
  // change this to make the refresh button chnage the ship placese and refresh the life counter and hints (if we add hints to begin with)
  sides.forEach((side) => (side.innerText = '???'))
})
