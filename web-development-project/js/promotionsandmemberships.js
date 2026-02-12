/* ---------- Promotions and Membership Page Functionality ---------- */

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const ticketCountElement = document.getElementById("ticket-count");

let ticketCount = 1;

decrementButton.addEventListener("click", () => {
    if(ticketCount > 1){
        ticketCount--;

        ticketCountElement.textContent = ticketCount;
    }
});

incrementButton.addEventListener("click", () => {
    ticketCount++;

    ticketCountElement.textContent = ticketCount;
});

flatpickr("#datepicker", {});

function togglePrices(){
    let checkBox = document.getElementById("checkbox");

    let standardPrices = document.querySelectorAll(".price-standard");
    let discountPrices = document.querySelectorAll(".price-discount");
    
    standardPrices.forEach((price, index) => {
        if(checkBox.checked){
            price.style.display = "block";

            discountPrices[index].style.display = "none";
        }
        else {
            price.style.display = "none";

            discountPrices[index].style.display = "block";
        }
    });
}

togglePrices();

let slideIndex = 1;

function showSlides(n){
    const slides = document.getElementsByClassName("slides");

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0, n = slides.length; i < n; i++){
        slides[i].classList.remove("active");
        slides[i].classList.remove("blur");
    }

    slides[slideIndex - 1].classList.add("active");

    if(slideIndex > 1){
        slides[slideIndex - 2].classList.add("blur");
    }
    else {
        slides[slides.length - 1].classList.add("blur");
    }

    if(slideIndex < slides.length){
        slides[slideIndex].classList.add("blur");
    }
    else {
        slides[0].classList.add("blur");
    }
}

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

setInterval(() => {
    plusSlides(1);
}, 20000);