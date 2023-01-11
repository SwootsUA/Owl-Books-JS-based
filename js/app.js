const menuIcon = document.querySelector('.burger-menu_button');
const navigation = document.querySelector('.burger-menu_items');

menuIcon.onclick = function () {
    menuIcon.classList.toggle('active');
    navigation.classList.toggle('active');
}

navigation.onclick = function () {
    menuIcon.classList.remove('active');
    navigation.classList.remove('active');
}