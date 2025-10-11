// ICON
feather.replace();

// NAVBAR ANIMATION
const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('solid');
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
            navbar.classList.add('solid');
        }
    });


// SECTION ANIMATION
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);


// SLIDE CARD
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper("#img-product-content", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            centerSlide: 'true',
            fade: 'true',
            grabCursor: 'true',
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints:{
                0: {
                    slidesPerView: 2,
                },
                900: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
// POP UP IMAGE
function openPopup(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = img.src;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
        