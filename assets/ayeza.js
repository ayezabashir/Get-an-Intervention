const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelector('.menu-items');
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

document.addEventListener('invalid', () => {
    var customText = $(this).get(0);
    customText.setCustomValidity('');
    if (!customText.validity.valid) {
        textfield.setCustomValidity('This field can’t be empty. Ayeza Please fill it in.');
    }
})


