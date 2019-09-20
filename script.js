// - Fetch more articles when an user clicks 'see more' button on Mobile.
// - Remove the 'see more' button when an user clicks it on Desktop since there is no article left to display
const seeMoreBtn = document.querySelector('.seemore-btn')
seeMoreBtn.onclick = () => {
  const remainCards = Array.from(document.querySelectorAll('.article-card.desktop'))
  remainCards.forEach(element => {
    element.classList.remove('desktop')
  })
  seeMoreBtn.remove()
}

// Switching between categories on 'Recommended' section
const recommendedCategories = Array.from(document.querySelectorAll('.recommended-category span'))
recommendedCategories.forEach(element => {
  element.onclick = e => {
    recommendedCategories.forEach(element => {
      element.classList.remove('active')
    })
    e.target.classList.add('active')
  }
})
