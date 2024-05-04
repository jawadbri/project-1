let mainGame = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.test')
let refresh = document.querySelector('.refresh')

// make a fuction to randomize the ships locations here
// let side = document
//   .querySelectorAll('.test')
//   .forEach((side) => (side.innerHTML = 'e'))

// make the click event function work proparly by checking the inside of the sides not the mainGame and see if there's a ship or not
// if there's a ship, make the box change color, if not, remove one life

// make a fuction that adds a new class (randomly)to [i = i + 5] to use the columns and [i = i + 1 ] for rows
sides.forEach((side, index) => {
  side.addEventListener('click', () => {
    if (side.classList.contains('shipClass')) {
      console.log('you hit a ship')
    }
  })
})
// add a small box to the side of the board for hints
// you get 3 hints that showes you a 2x2 with one ship part inside of them
refresh.addEventListener('click', () => {
  // change this to make the refresh button chnage the ship placese and refresh the life counter and hints (if we add hints to begin with)
  sides.forEach((side) => (side.innerText = '???'))
})
