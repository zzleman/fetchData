const container = document.querySelector(".container")

fetch("https://dummyjson.com/products")
  .then((x) => x.json())
  .then((x) => renderAllItem(x.products));

function renderAllItem(allItem) {
    allItem.forEach((product) => {
    const card = document.createElement("div")
            const categorySpan=document.createElement("span")
            const priceSpan =document.createElement("span")
            const titleSpan =document.createElement("span")
            const imgSection=document.createElement("img")
            const envelopeIcon = document.createElement("i")
            const heartIcon = document.createElement("i")
            const forCall = document.createElement("span")
            const fakeLocation = document.createElement("span")
            const fakeDate=document.createElement("span")

            card.className="card"
            categorySpan.className="category"
            priceSpan.className="price"
            titleSpan.className="title"
            envelopeIcon.className = "fa-solid fa-envelope"
            heartIcon.className ="fa-solid fa-heart"
            forCall.className="call"
            fakeLocation.className="location"
            fakeDate.className="date"

            envelopeIcon.setAttribute("id", "icons")
            envelopeIcon.style.color="#bdbdbd"
            envelopeIcon.style.fontSize="25px"
            heartIcon.setAttribute("id", "icons")
            heartIcon.style.color="#bdbdbd"
            heartIcon.style.fontSize="25px"

            const image = product.images[0];
            const category=product.category
            const title=product.title
            const price = product.price
    
            categorySpan.innerText=`${category}`
            titleSpan.innerText=` ${title}`
            priceSpan.innerText=`${price} AZN`
            forCall.innerText = "Zəng edin"
            fakeLocation.innerText = "Bakı"
            fakeDate.innerText = "16.05.2023 / 10:22"
            
            imgSection.src = image;
    
            card.appendChild(titleSpan)
            card.appendChild(priceSpan)
            card.appendChild(imgSection)
            card.appendChild(envelopeIcon)
            card.appendChild(heartIcon)
            card.appendChild(forCall)
            card.appendChild(categorySpan)
            card.appendChild(fakeLocation)
            card.appendChild(fakeDate)
            container.appendChild(card)
  })
}
