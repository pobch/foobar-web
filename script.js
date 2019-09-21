// Recommended section:
// - When an user clicks 'see more' button on Mobile --> Fetch more articles
// - When an user clicks 'see more' button on Desktop --> Remove the 'see more' button
const seeMoreBtn = document.querySelector('.seemore-btn')
seeMoreBtn.onclick = () => {
  const remainCards = Array.from(document.querySelectorAll('.article-card.desktop'))
  remainCards.forEach(element => {
    element.classList.remove('desktop')
  })
  seeMoreBtn.remove()
}

// Switch active category on 'Recommended' section
const recommendedCategories = Array.from(document.querySelectorAll('.recommended-category span'))
recommendedCategories.forEach(element => {
  element.onclick = e => {
    recommendedCategories.forEach(element => {
      element.classList.remove('active')
    })
    e.target.classList.add('active')
  }
})

// Create carousel using glide.js
new window.Glide('.glide', {
  type: 'slider',
  rewind: false,
  peek: 0,
  perView: 4,
  breakpoints: {
    1300: {
      perView: 3,
      peek: {
        before: 0,
        after: 50
      }
    },
    1000: {
      perView: 2,
      peek: {
        before: 0,
        after: 50
      }
    },
    700: {
      perView: 1,
      peek: {
        before: 0,
        after: 50
      }
    },
    390: {
      perView: 1,
      peek: {
        before: 0,
        after: 30
      }
    }
  }
}).mount()
