const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add(
      "shadow-lg",
      "bg-white",

      "bg-transparent"
    );
  } else {
    header.classList.remove(
      "shadow-lg",
      "bg-white",

      "bg-transparent"
    );
  }
});

const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const lanBtnVal = document.getElementById("lanBtnVal");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

langMenu.addEventListener("click", (e) => {
  lanBtnVal.textContent = e.target.innerText;
  langMenu.classList.toggle("show");
});

// Burger Menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = burger.classList.contains("active")
    ? "hidden"
    : "";
});

overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  // Asosiy sozlamalar
  loop: true,
  speed: 600,

  // Hamma ekranlarda 5 ta rasm ko'rinsin (sizning asosiy talabingiz)
  slidesPerView: 2,

  // MUHIM: Hamma ekranlarda pagination ko'rinishi uchun!
  slidesPerGroup: 2, // Har bir slaydni alohida sahifa deb hisoblashga majbur qiladi.

  // loop: true to'g'ri ishlashi uchun zarur (rasmlar soniga teng)
  loopedSlides: 5,

  spaceBetween: 30,
  // centeredSlides: true,

  pagination: {
    el: ".pag2",
    clickable: true,
  },

  // Kichik ekranlarda 3 ta ko'rinadigan qismni ham breakpointga qo'shamiz (ixtiyoriy)
  breakpoints: {
    // 768px dan kichik ekranlar uchun
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1, // Kichik ekranda ham har bir slayd alohida hisoblansin
      spaceBetween: 20,
    },
    // 1024px dan yuqori ekranlar uchun
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});

// -------------------   Agar paginatsiya chiziqlari faqat 3 tagina chiqsin deyilsa pastdagini ishlatamiz     -------------------

// var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     speed: 600,
//     slidesPerView: 2,
//     slidesPerGroup: 2,
//     spaceBetween: 30,

//     pagination: {
//         el: ".pag2",
//         clickable: true,
//         renderBullet: function (index, className) {
//             // Faqat 3 ta pagination bullet chiqadi
//             if (index < 3) {
//                 return '<span class="' + className + '"></span>';
//             }
//             return ''; // qolganlarini yashiramiz
//         },
//     },

//     breakpoints: {
//         768: {
//             slidesPerView: 3,
//             slidesPerGroup: 1,
//             spaceBetween: 20
//         },
//         1024: {
//             slidesPerView: 5,
//             slidesPerGroup: 1,
//             spaceBetween: 30
//         }
//     }
// });

// ------------------------------||||||||||||||||||||||||||||||||----------------------

// Fancybox

Fancybox.bind("[data-fancybox]", {
  Carousel: {
    Video: {
      autoplay: false,
    },
  },
});



const thumbs = new Swiper('.thumb-slider', {
  spaceBetween: 16,
  freeMode: true,
  watchSlidesProgress: true,
  grabCursor: true,
  slidesPerView: 2,

  breakpoints: {
    320: {
      slidesPerView: 2, // juda kichik ekranlar
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 48,
    },
  },
});


  const main = new Swiper('.main-slider', {
    spaceBetween: 10,
    loop: false,
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
    thumbs: {
      swiper: thumbs,
    },
  });


// portfolio
 
    document.addEventListener('DOMContentLoaded', () => {
        // 1. Elementlarni tanlab olamiz
        const showMoreBtn = document.querySelector('.showPortfolio'); // Tugmani href="#" orqali tanladik
        const cardContainer = document.getElementById('card-container');
        
        // Dastlab yashirin bo'lgan barcha cardlar
        const hiddenCards = cardContainer.querySelectorAll('.card-item.hidden');
        
        // Har safar nechta card ko'rsatilishi
        const cardsToShowPerClick = 2; 
        let currentHiddenIndex = 0; // Yashirin cardlar qatoridagi joriy indeks
        
        // Tugmani bog'lash
        showMoreBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Sahifaning tepaga qaytishini oldini oladi (chunki href="#")

            let cardsShown = 0;
            
            // cardsToShowPerClick miqdordagi cardlarni ko'rsatamiz
            for (let i = 0; i < cardsToShowPerClick && currentHiddenIndex < hiddenCards.length; i++) {
                // Carddan 'hidden' klassini o'chiramiz
                hiddenCards[currentHiddenIndex].classList.remove('hidden');
                
                // Cardlarni birin-ketin chiqishi uchun qisqa animatsiya qo'shish (ixtiyoriy)
                // hiddenCards[currentHiddenIndex].style.opacity = '0';
                // setTimeout(() => {
                //    hiddenCards[currentHiddenIndex].style.opacity = '1';
                //    hiddenCards[currentHiddenIndex].style.transition = 'opacity 0.5s ease-in-out';
                // }, 10);
                
                currentHiddenIndex++;
                cardsShown++;
            }

            // Agar barcha yashirin cardlar ko'rsatilgan bo'lsa, tugmani yashiramiz
            if (currentHiddenIndex >= hiddenCards.length) {
                showMoreBtn.style.display = 'none';
            }
        });
        
        // Agar boshidanoq yashirin cardlar bo'lmasa, tugmani yashirib qo'yamiz (loyihaning kelajagi uchun)
        if (hiddenCards.length === 0) {
             showMoreBtn.style.display = 'none';
        }
    });

    // news

      document.addEventListener('DOMContentLoaded', () => {
        // 1. Elementlarni tanlab olamiz
        const showMoreBtn = document.querySelector('.showNews'); // Tugmani href="#" orqali tanladik
        const cardContainer = document.getElementById('news-container');
        
        // Dastlab yashirin bo'lgan barcha cardlar
        const hiddenCards = cardContainer.querySelectorAll('.news-item.hidden');
        
        // Har safar nechta card ko'rsatilishi
        const cardsToShowPerClick = 3; 
        let currentHiddenIndex = 0; // Yashirin cardlar qatoridagi joriy indeks
        
        // Tugmani bog'lash
        showMoreBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Sahifaning tepaga qaytishini oldini oladi (chunki href="#")

            let cardsShown = 0;
            
            // cardsToShowPerClick miqdordagi cardlarni ko'rsatamiz
            for (let i = 0; i < cardsToShowPerClick && currentHiddenIndex < hiddenCards.length; i++) {
                // Carddan 'hidden' klassini o'chiramiz
                hiddenCards[currentHiddenIndex].classList.remove('hidden');
                
                // Cardlarni birin-ketin chiqishi uchun qisqa animatsiya qo'shish (ixtiyoriy)
                // hiddenCards[currentHiddenIndex].style.opacity = '0';
                // setTimeout(() => {
                //    hiddenCards[currentHiddenIndex].style.opacity = '1';
                //    hiddenCards[currentHiddenIndex].style.transition = 'opacity 0.5s ease-in-out';
                // }, 10);
                
                currentHiddenIndex++;
                cardsShown++;
            }

            // Agar barcha yashirin cardlar ko'rsatilgan bo'lsa, tugmani yashiramiz
            if (currentHiddenIndex >= hiddenCards.length) {
                showMoreBtn.style.display = 'none';
            }
        });
        
        // Agar boshidanoq yashirin cardlar bo'lmasa, tugmani yashirib qo'yamiz (loyihaning kelajagi uchun)
        if (hiddenCards.length === 0) {
             showMoreBtn.style.display = 'none';
        }
    });
