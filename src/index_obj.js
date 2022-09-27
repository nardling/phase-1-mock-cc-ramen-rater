"use strict";
class ramen {
    constructor(_id, _name, _restaurant, _image, _comment, _rating) {
        this.render = () => {
            const ramenMenu = document.getElementById("ramen-menu");
            const newImg = document.createElement("img");
            newImg.src = this.image;
            newImg.setAttribute("data-name", this.name);
            newImg.setAttribute("data-restaurant", this.restaurant);
            newImg.setAttribute("data-rating", this.rating.toString());
            newImg.setAttribute("data-comment", this.comment);
            newImg.addEventListener("click", (e) => {
                const targetElement = e.target;
                const ramenDetailImg = document.getElementById("ramen-detail-image");
                ramenDetailImg.src = targetElement.src;
                const ramenDetailRestaurant = document.getElementById("ramen-detail-restaurant");
                ramenDetailRestaurant.textContent = targetElement.getAttribute("data-restaurant");
                const ramenDetailName = document.getElementById("ramen-detail-name");
                ramenDetailName.textContent = targetElement.getAttribute("data-name");
                const ramenRating = document.getElementById("rating-display");
                ramenRating.textContent = targetElement.getAttribute("data-rating");
                const ramenComment = document.getElementById("comment-display");
                ramenComment.textContent = targetElement.getAttribute("data-comment");
            });
            ramenMenu.appendChild(newImg);
        };
        this.id = _id;
        this.name = _name;
        this.restaurant = _restaurant;
        this.comment = _comment;
        this.rating = _rating;
        this.image = _image;
    }
}
const urlBase = "http://localhost:3000/ramens";
const getRamenObjFromDB = () => {
    console.log("Enter getRamenFromDB");
    fetch(urlBase).
        then(res => res.json()).
        then(ramens => {
        const ramensObj = ramens.map((r) => new ramen(r["id"], r["name"], r["resturant"], r["image"], r["comment"], r["rating"]));
        ramensObj.forEach(ramen => {
            ramen.render();
        });
    }).
        catch(e => console.log(e));
};
getRamenObjFromDB();
// const newRamenForm = document.getElementById("new-ramen")
// newRamenForm.addEventListener("submit", addNewRamen)
