const menuIcon = document.querySelector('.burger-menu_button');
const navigation = document.querySelector('.burger-menu_items');
const menuItems = document.querySelector('.burger-menu-item-container')

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