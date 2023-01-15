const cartImg = document.querySelector('.cart__img');
const cartText = document.querySelector('.cart__text');
const cartPopUp = document.querySelector('.cart-popup');
const searchIcon = document.querySelector('.search__img');
const searchCross = document.querySelector('.search__cross');
const cartBackground = document.querySelector('.background');
const searchInput = document.querySelector('.search__input');
const menuIcon = document.querySelector('.burger-menu_button');
const cartCross = document.querySelector('.cart-header-cross');
const navigation = document.querySelector('.burger-menu_items');
const cartContainer = document.querySelector('.cart-popup-container');
const menuItems = document.querySelector('.burger-menu-item-container');

function revealCart() {
    cartImg.classList.toggle('hidden');
}

menuIcon.onclick = function () {
    menuIcon.classList.toggle('active');
    menuItems.classList.toggle('active');
    navigation.classList.toggle('active');
}

navigation.onclick = function () {
    menuIcon.classList.remove('active');
    menuItems.classList.remove('active');
    navigation.classList.remove('active');
}

cartImg.onclick = function () {
    cartImg.classList.toggle('active');
    cartText.classList.toggle('active');
    cartPopUp.classList.toggle('active');
    cartContainer.classList.toggle('active');
}

cartText.onclick = function () {
    cartImg.classList.toggle('active');
    cartText.classList.toggle('active');
    cartPopUp.classList.toggle('active');
    cartContainer.classList.toggle('active');
}

cartBackground.onclick = function () {
    cartImg.classList.toggle('active');
    cartText.classList.toggle('active');
    cartPopUp.classList.toggle('active');
    cartContainer.classList.toggle('active');
}

cartCross.onclick = function () {
    cartImg.classList.toggle('active');
    cartText.classList.toggle('active');
    cartPopUp.classList.toggle('active');
    cartContainer.classList.toggle('active');
}

searchIcon.onclick = function () {
    cartImg.classList.toggle('hidden');
    searchIcon.classList.toggle('hidden');
    searchCross.classList.toggle('hidden');
    searchInput.classList.toggle('active');
}

searchCross.onclick = function () {
    searchIcon.classList.toggle('hidden');
    searchCross.classList.toggle('hidden');
    searchInput.classList.toggle('active');
    setTimeout(revealCart, 350);
}
