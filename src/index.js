
// Code here
function renderOneBeer(beer1, beer2) {
    console.log(beer1)
    let beerName = document.querySelector('#beer-name')
    beerName.textContent = beer1.name
    console.log(beerName)
    let description = document.querySelector('#beer-description')
    description.textContent = beer1.description
    let reviews = document.querySelector('#review-list li')
    reviews.textContent = beer1.reviews
    let menubeer1 = document.getElementsByTagName('li')[0]
    menubeer1.textContent = beer1.name
    let menubeer2 = document.getElementsByTagName('li')[1]
    // console.log(menubeer2)
    menubeer2.textContent = beer2.name
    let beerimg = document.querySelector('img')
    console.log(beerimg)
    beerimg.src = beer1.image_url
}
  
function getAllBeers(id1, id2) {
    fetch('http://localhost:3000/beers')
      .then(res => res.json())
      .then(beers => renderOneBeer(beers[id1], beers[id2]))
  
}

getAllBeers(0, 1)