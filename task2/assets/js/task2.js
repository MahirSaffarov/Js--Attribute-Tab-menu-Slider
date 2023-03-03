left = document.querySelector(".left")
right = document.querySelector(".right")
line = document.querySelectorAll(".line")
imgs = document.querySelectorAll("img")

function rightSlider() {
    let activateImage = document.querySelector(".show");
    let opa = document.querySelector(".opa")
    activateImage.classList.remove("show");
    opa.classList.remove("opa")
    if (activateImage.nextElementSibling != null) {
        activateImage.nextElementSibling.classList.add("show")
        opa.nextElementSibling.classList.add("opa")
    } else {
        activateImage.parentNode.firstElementChild.classList.add("show")
        opa.parentNode.firstElementChild.classList.add("opa")
    }
}

function leftSlider() {
    let activateImage = document.querySelector(".show");
    let opa = document.querySelector(".opa")
    activateImage.classList.remove("show");
    opa.classList.remove("opa")
    if (activateImage.previousElementSibling != null) {
        activateImage.previousElementSibling.classList.add("show")
        opa.previousElementSibling.classList.add("opa")
    } else {
        activateImage.parentNode.lastElementChild.classList.add("show")
        opa.parentNode.lastElementChild.classList.add("opa")
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
            let opa = document.querySelector(".opa");
            opa.classList.remove("opa")
            this.classList.add("opa")
        })
    });
});
setInterval(rightSlider, 5000);
right.addEventListener("click", rightSlider);
left.addEventListener("click", leftSlider);