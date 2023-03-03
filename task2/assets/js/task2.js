left = document.querySelector(".left")
right = document.querySelector(".right")
line = document.querySelectorAll(".line")
imgs = document.querySelectorAll("img")

function rightSlider() {
    let activateImage = document.querySelector(".show");
    activateImage.classList.remove("show");
    if (activateImage.nextElementSibling != null) {
        activateImage.nextElementSibling.classList.add("show")
    } else {
        activateImage.parentNode.firstElementChild.classList.add("show")
    }
}

function leftSlider() {
    let activateImage = document.querySelector(".show");
    activateImage.classList.remove("show");
    if (activateImage.previousElementSibling != null) {
        activateImage.previousElementSibling.classList.add("show")
    } else {
        activateImage.parentNode.lastElementChild.classList.add("show")
    }
}
imgs.forEach(img => {
    line.forEach(element => {
        element.addEventListener("click", function () {
            if (this.getAttribute("data-id") == img.getAttribute("data-id")) {
                img.classList.add("show");
            }
            else {
                img.classList.remove("show");
            }
        })
    });
});
right.addEventListener("click", rightSlider);
left.addEventListener("click", leftSlider);