import { buildPage } from "./modules/repeating-elements.js";
import { addInputsCheck } from "./modules/input-check.js";
import { addToCart, updateCart } from "./modules/cart.js";
import { fetchItemData as getItemFromDB } from "./modules/item.js";
import { fetchSearchData as getAllItemsFromDB } from "./modules/index.js";
import { fetchSearchData as getSearchItemsFromDB } from "./modules/search.js"

// Будуємо структуру сторінки та додаємл обробники подій
await buildPage();

if (document.getElementById('index_row')){
	// Отримуємо всі елементи з бази даних для головної сторінки
	await getAllItemsFromDB();
}

if (document.getElementById('search_row')){
	// Отримуємо елементи пошуку з бази даних для сторінки пошуку
	await getSearchItemsFromDB();
}

if (document.querySelector('.item_page')) {
	// Отримуємо дані елемента з бази даних для сторінки елемента
	await getItemFromDB();
}

if (document.getElementById('make-order')) {
	// Додаємо перевірку введених даних для сторінці оформлення замовлення та оновлюємо вміст кошика для цієї сторінки
	addInputsCheck();
	await updateCart();
} else {
	const buyButtons = document.querySelectorAll('.button__buy');
	// Додаємо обробники подій до кнопок купівлі для додавання товарів до кошика
	for (const buyButton of buyButtons){
		buyButton.addEventListener('click', addToCart);
	}
}