// 1. Get the element
const main = document.querySelector('main')
// 2, Add on event listener 
function onClick() {
  alert('i was clicked')
  console.log('i was clicked woah')
}

main.addEventListener('click', onClick)

const input = document
.querySelector('input')