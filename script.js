let board = document.querySelector('#mainGame')
let sides = document.querySelectorAll('.cell')
let refresh = document.querySelector('#refresh')
let results = document.querySelector('.results')
// make a fuction to randomize the ships locations here
// let side = document
//   .querySelectorAll('.test')
//   .forEach((side) => (side.innerHTML = 'e'))

// make the click event function work proparly by checking the inside of the sides not the mainGame and see if there's a ship or not
// if there's a ship, make the box change color, if not, remove one life

// make a fuction that adds a new class (randomly)to [i = i + 5] to use the columns or (||) [i = i + 1 ] for rows. with the conditon of not going over the size of the box. so no (i === 4 && 9 && 14 && 19 && 24) for rows and (i === 20 && 21 && 22 && 23 && 24)
sides.forEach((side, index) => {
  side.addEventListener('click', () => {
    if (side.classList.contains('shipClass')) {
      side.style.backgroundColor = 'green'
      results.innerText = 'u got one, happy?'
    } else {
      side.style.backgroundColor = 'red'
      results.innerText = 'you need to get gud'
    }
  })
})
// add a small box to the side of the board for hints
// you get 3 hints that showes you a 2x2 with one ship part inside of them
refresh.addEventListener('click', () => {
  // change this to make the refresh button chnage the ship placese and refresh the life counter and hints (if we add hints to begin with) // sides.forEach((side) => (
  //   // make it add class to divs with the index of [i=i+5] || [i=i+1] 2 times for 1 ship, 3 for another, 4 for the biggest ship
  // ))
  sides.forEach((side) => {
    side.style.backgroundColor = ''
    results.innerText = ''
  })
})
