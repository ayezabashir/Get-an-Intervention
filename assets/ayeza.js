const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelector('.menu-items');
const playVideo = document.querySelector('.play-video');
const playVideo1 = document.querySelector('.play-vid');
const popupVideo = document.querySelector('.bg-video-container');
const closePopUp = document.querySelector('.bg-video-container .close-icon')
const ellipses = document.querySelectorAll('.ellipses .ellipse');
const testimonials = document.querySelectorAll('.testimonial');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

openMenu.addEventListener('click', () => {
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
    menuItems.classList.add('active');
})
closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    menuItems.classList.remove('active');
})
playVideo.addEventListener('click', () => {
    popupVideo.style.display = 'block'
})
closePopUp.addEventListener('click', () => {
    popupVideo.style.display = 'none'
})
playVideo1.addEventListener('click', () => {
    popupVideo.style.display = 'block'

})

let currentIndex = 0;
function updateActiveTestimonial(index) {
    ellipses.forEach(el => el.classList.remove('active'));
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    ellipses[index].classList.add('active');
    testimonials[index].classList.add('active');
}

ellipses.forEach((ellipse, index) => {
    ellipse.addEventListener('click', () => {
        currentIndex = index;
        updateActiveTestimonial(currentIndex);
    });
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateActiveTestimonial(currentIndex);
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateActiveTestimonial(currentIndex);
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const inputs = document.querySelectorAll('.input-field input, .row select');
    inputs.forEach(input => {
        const tooltip = document.getElementById(input.id + '-error');
        if (!input.validity.valid) {
            tooltip.style.display = 'block';
            input.style.borderColor = '#ff6b6b';
            valid = false;
        } else {
            tooltip.style.display = 'none';
            input.style.borderColor = '';
        }
    });
    if (valid) {
        window.location.href = "/assets/thankyou.html";
    }
});

