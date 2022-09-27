// write your code here
// script is deferred

const url = "http://localhost:3000/ramens"

const renderRamen = (ramen) => {
    console.log("Enter renderRamen " + ramen)
    const ramenMenu = document.getElementById("ramen-menu")
    const newImg = document.createElement("img")
    newImg.src = ramen["image"]
    newImg.setAttribute("data-name", ramen["name"])
    newImg.setAttribute("data-restaurant", ramen["restaurant"])
    newImg.setAttribute("data-rating", ramen["rating"])
    newImg.setAttribute("data-comment", ramen["comment"])
    newImg.addEventListener("click", (e) => {
        const ramenDetailImg = document.getElementById("ramen-detail-image")
        ramenDetailImg.src = e.target.src
        const ramenDetailRestaurant = document.getElementById("ramen-detail-restaurant")
        ramenDetailRestaurant.textContent = e.target.getAttribute("data-restaurant")
        const ramenDetailName = document.getElementById("ramen-detail-name")
        ramenDetailName.textContent = e.target.getAttribute("data-name")
        const ramenRating = document.getElementById("rating-display")
        ramenRating.textContent = e.target.getAttribute("data-rating")
        const ramenComment = document.getElementById("comment-display")
        ramenComment.textContent = e.target.getAttribute("data-comment")
    })

    ramenMenu.appendChild(newImg)
}

const renderRamens = (ramens) => {
    console.log(ramens)
    console.log("Enter renderRamens")
    ramens.forEach(ramen => {
        renderRamen(ramen)
    });
}

const getRamenFromDB = () => {
    console.log("Enter getRamenFromDB")
    fetch(url).
        then(res => res.json()).
        then(ramens => renderRamens(ramens)).
        catch(e => console.log(e))
}

const addNewRamen = (e) => {
    e.preventDefault()   
    console.log("New Form Submit")
    const newRamen = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "image": "assets/image-placeholder.jpg",
        // "image": e.target.image.value,
        "rating": e.target.rating.value,
        "comment": e.target["new-comment"].textContent
    }
    renderRamen(newRamen)
}

getRamenFromDB()
const newRamenForm = document.getElementById("new-ramen")
newRamenForm.addEventListener("submit", addNewRamen)