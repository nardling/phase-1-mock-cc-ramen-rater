class ramen {
    constructor(_id: number, _name: string, _restaurant: string, _image: string, _comment: string, _rating: number) {
        this.id = _id;
        this.name = _name;
        this.restaurant = _restaurant;
        this.comment = _comment;
        this.rating = _rating;
        this.image = _image;
    }

    id: number
    name: string
    restaurant: string
    comment: string
    rating: number
    image: string

    render: Function = () => {
        const ramenMenu = document.getElementById("ramen-menu")!
        const newImg = document.createElement("img")
        newImg.src = this.image
        newImg.setAttribute("data-name", this.name)
        newImg.setAttribute("data-restaurant", this.restaurant)
        newImg.setAttribute("data-rating", this.rating.toString())
        newImg.setAttribute("data-comment", this.comment)
        newImg.addEventListener("click", (e) => {
            const targetElement: HTMLImageElement = e.target as HTMLImageElement
            const ramenDetailImg: HTMLImageElement = document.getElementById("ramen-detail-image")! as HTMLImageElement
            ramenDetailImg.src = targetElement.src

            const ramenDetailRestaurant = document.getElementById("ramen-detail-restaurant")!
            ramenDetailRestaurant.textContent = targetElement.getAttribute("data-restaurant")

            const ramenDetailName = document.getElementById("ramen-detail-name")!
            ramenDetailName.textContent = targetElement.getAttribute("data-name")

            const ramenRating = document.getElementById("rating-display")!
            ramenRating.textContent = targetElement.getAttribute("data-rating")

            const ramenComment = document.getElementById("comment-display")!
            ramenComment.textContent = targetElement.getAttribute("data-comment")
        })
    
        ramenMenu.appendChild(newImg)
    }

}

const urlBase: string = "http://localhost:3000/ramens"

const getRamenObjFromDB = () => {
    console.log("Enter getRamenFromDB")
    fetch(urlBase).
        then(res => res.json()).
        then(ramens => {
            const ramensObj: ramen[] = ramens.map((r: any) => new ramen(
                r["id"],
                r["name"],
                r["resturant"],
                r["image"],
                r["comment"],
                r["rating"]
            ))
            ramensObj.forEach(ramen => {
                ramen.render()
            });
        }).
        catch(e => console.log(e))
}

getRamenObjFromDB()
// const newRamenForm = document.getElementById("new-ramen")
// newRamenForm.addEventListener("submit", addNewRamen)