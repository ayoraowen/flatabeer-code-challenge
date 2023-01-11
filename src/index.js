// Code here
function handleReviewClickEvents() {
  let form = document.querySelector('#review-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newReview = e.target.review.value
    let revTextnode = document.createTextNode(newReview)
    let newReviewLi = document.createElement('li')
    newReviewLi.append(revTextnode)
    console.log(newReview)
    let reviewsList = document.querySelector('#review-list')
    reviewsList.appendChild(newReviewLi)
    form.reset()
  })
}


function renderOhSoFlattening(beer) {
  let beerName = document.querySelector('#beer-name')
  beerName.textContent = beer.name
  let description = document.querySelector('#beer-description')
  description.textContent = beer.description
  let beerimg = document.querySelector('img')
  beerimg.src = beer.image_url

  let reviewList = beer.reviews
  reviewList.forEach(element => {
    let x = document.createElement('li')
    x.append(element)
    let reviews = document.querySelector('#review-list')
    reviews.append(x)

  })
}

function renderMenuBeers(navBeer) {
  let menubeer = document.getElementsByTagName('ul')[0]
  let c = document.createElement('li')
  c.innerHTML = navBeer.name
  menubeer.append(c)

}

function getAllBeers() {
  fetch('https://my-json-server.typicode.com/ayoraowen/flatabeer-code-challenge/beers')
    .then(res => res.json())
    .then(beers => {
      beers.forEach(element => {
        renderMenuBeers(element)
      });

    })

}

function getOhSoFlatteningBeer() {
  fetch('https://my-json-server.typicode.com/ayoraowen/flatabeer-code-challenge/beers/1')
    .then(res => res.json())
    .then(beer => {
      renderOhSoFlattening(beer)
    })
}

getOhSoFlatteningBeer()
getAllBeers()
handleReviewClickEvents()
