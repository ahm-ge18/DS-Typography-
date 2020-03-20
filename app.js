var input = document.getElementById('search-input')
var cards = document.getElementsByClassName('card')

var titleBtn = document.getElementById('title-btn')
var sizeBtn = document.getElementById('size-btn')
var weightBtn = document.getElementById('weight-btn')
var heightBtn = document.getElementById('height-btn')

var tabs = document.getElementsByClassName('btn')

var hiddenCards = document.getElementsByClassName('hidden-card')

var searchResults = document.getElementById('no-results')

// check if the cards are all hidden
// document.addEventListener('click', () => {
//   console.log(hiddenCards.length);
//   if(hiddenCards.length >= 22) {
//     searchResults.classList.remove('hidden')
//   } else {
//     searchResults.classList += ' hidden'
//   }
  
// })

function titleSearch() {
  var inputValue = document.getElementById('search-input').value.toUpperCase()

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
    cards[i].classList += ' hidden-card'

    if (cards[i].childNodes[1].innerText.toUpperCase().includes(inputValue)) {
      cards[i].style.display = 'block'
      cards[i].classList.remove('hidden-card')
    }
  }
}

function specSearch(spec) {
  var inputValue = document.getElementById('search-input').value.toUpperCase()

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = 'none'
    cards[i].classList += ' hidden-card'
    if (
      cards[i].children[1].children[0].children[spec].children[0].innerText
        .toUpperCase()
        .includes(inputValue)
    ) {
      cards[i].style.display = 'block'
      cards[i].classList.remove('hidden-card')
    }
  }
}

// adds class to input when a btn clicked
titleBtn.addEventListener('click', () => {
  input.classList.remove()
  input.classList = 'title-search'
  searchResults.classList += ' hidden'
})
sizeBtn.addEventListener('click', () => {
  input.classList.remove()
  input.classList = 'size-search'
  searchResults.classList += ' hidden'
})
weightBtn.addEventListener('click', () => {
  input.classList.remove()
  input.classList = 'weight-search'
  searchResults.classList += ' hidden'
})
heightBtn.addEventListener('click', () => {
  input.classList.remove()
  input.classList = 'height-search'
  searchResults.classList += ' hidden'
})

// checkes which class the input has, to preform the right search
input.addEventListener('keyup', () => {
  if (input.classList.contains('title-search')) {
    titleSearch()
  } else if (input.classList.contains('size-search')) {
    specSearch(0)
  } else if (input.classList.contains('weight-search')) {
    specSearch(1)
  } else if (input.classList.contains('height-search')) {
    specSearch(2)
  }

  if(hiddenCards.length >= 22) {
    searchResults.classList.remove('hidden')
  } else {
    searchResults.classList += ' hidden'
  }
})

// adds active class to the tab button we click
document.addEventListener('click', e => {
  if (e.target.classList.contains('btn')) {
    // clear input
    input.value = ''
    // show all cards
    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = 'block'
    }
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
    }
    e.target.classList += ' active'
  }
})

//show the example when the card clicked
document.addEventListener('click', e => {
  if (e.target.classList.contains('show-eample-btn')) {
    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove('show-example')
    }

    e.target.parentNode.parentNode.classList += ' show-example'
  }
})