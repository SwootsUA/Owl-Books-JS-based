const menuIcon = document.querySelector('.burger-menu_button');
const navigation = document.querySelector('.burger-menu_items');
const menuItems = document.querySelector('.burger-menu-item-container');

menuIcon.onclick = function () {
    menuIcon.classList.toggle('active');
    navigation.classList.toggle('active');
    menuItems.classList.toggle('active');
}

navigation.onclick = function () {
    menuIcon.classList.remove('active');
    navigation.classList.remove('active');
    menuItems.classList.remove('active');
}

const searchIcon = document.querySelector('.search__img');
const searchBorder = document.querySelector('.search__border');
const searchCross = document.querySelector('.search__cross');
const cartImg = document.querySelector('.cart__img');

function revealCart() {
    cartImg.classList.toggle('hidden');
}

searchIcon.onclick = function () {
    searchBorder.classList.toggle('active');
    searchIcon.classList.toggle('hidden');
    searchCross.classList.toggle('hidden');
    cartImg.classList.toggle('hidden');
}

searchCross.onclick = function () {
    searchBorder.classList.toggle('active');
    searchIcon.classList.toggle('hidden');
    searchCross.classList.toggle('hidden');
    setTimeout(revealCart, 350);
}

