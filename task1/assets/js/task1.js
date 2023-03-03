let right = document.querySelector(".right")
let left = document.querySelector(".left")
let cards = document.querySelector(".cards")
let translate = 0;
function rightButton() {
    let showElement = document.querySelector(".show");
    if(showElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling != null){
        showElement.classList.remove("show");
        showElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("show");
        translate -= 260;
        cards.style.transform = `translate(${translate}px)`;
        left.style.opacity = "1"
    }
    else{
        right.disabled = true;
        right.style.opacity = "0.5"
    }

}
function leftButton() {
    let showElement = document.querySelector(".show");
    if(showElement.previousElementSibling != null){
        showElement.previousElementSibling.classList.add("show");
        showElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("show");
        translate += 260;
        cards.style.transform = `translate(${translate}px)`;
        right.style.opacity = "1"
    }
    else{
        left.disabled = true;
        left.style.opacity = "0.5"
    }
}
right.addEventListener("click", rightButton);
left.addEventListener("click", leftButton);