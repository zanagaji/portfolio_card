/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
/*=============== DARKMODE ===============*/


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
/*=============== TYPING ANIMATION ===============*/
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hi, I'am","Web developer","App Developer","Hi, I'am Ahmad"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });
