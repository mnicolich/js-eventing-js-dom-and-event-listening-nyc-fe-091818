// 1. Get the element
const main = document.querySelector('main')
// 2, Add on event listener 
function onClick(event) {
  alert('i was clicked')
  console.log('i was clicked woah')
}

main.addEventListener('click', onClick)
function onKeyDown(event) {
 if (event.which === 74)
 event.preventDefault()
  }
  
}

const input = document.querySelector('input')

input.addEventListener('keydown', onKeyDown)

const divs = document.querySelectorAll('div')
