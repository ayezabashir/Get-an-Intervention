const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelector('.menu-items');
const playVideo = document.querySelector('.play-video');
const playVideo1 = document.querySelector('.play-vid');
const popupVideo = document.querySelector('.bg-video-container');
const closePopUp = document.querySelector('.bg-video-container .close-icon')

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