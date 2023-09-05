/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 500
    }
});

/*===== Link Active Work =====*/



/*===== Work Popup =====*/
document.addEventListener('click', (e) =>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
    }
})
function togglePortfolioPopup(){
    document.querySelector('.portfolio_popup').classList.toggle("open");
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimoni_container", {
    spaceBetween: 30,
    loop:true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
        slidesPerView: 2,

        },
        768: {
        slidesPerView: 2,
        spaceBetween: 48,
        },
    },
});

/*=============== INPUT ANIMATION ===============*/
const input = document.querySelectorAll(".input");

function focusFun(){
    let parent = this.parentNode;
    parent.classList.add(".focus");
}

function blur(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

input.forEach((input)=>{
    input.addEventListener("focus", focusFun);
    input.addEventListener("blur", focusFun);
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
