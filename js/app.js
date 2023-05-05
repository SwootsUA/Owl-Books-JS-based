/*jshint esversion: 6 */
import * as inputCheck from "./modules/input-check.js";
import { addToCart } from "./modules/cart.js";
import * as indexItems from "./modules/index.js";
import * as searchItems from "./modules/search.js"
import { buildPage } from "./modules/repeating-elements.js";
import { fetchItemData } from "./modules/item.js";

await buildPage();

const cartImg = document.querySelector('.cart__img');
const cartText = document.querySelector('.cart__text');
const cartPopUp = document.querySelector('.cart-popup');
const searchIcon = document.querySelector('.search__img');
const searchCross = document.querySelector('.search__cross');
const cartBackground = document.querySelector('.background');
const searchInput = document.querySelector('.search__input');
const cartCross = document.querySelector('.cart-header-cross');
const cartContainer = document.querySelector('.cart-popup-container');


if (document.getElementById('index_row')){
	await indexItems.fetchSearchData()

	const buyButtons = document.querySelectorAll('.button__buy');
	console.log(buyButtons);
	for (const buyButton of buyButtons){
		buyButton.onclick = addToCart;
	}
}

if (document.getElementById('search_row')){
	await searchItems.fetchSearchData();

	const buyButtons = document.querySelectorAll('.button__buy');
	console.log(buyButtons);
	for (const buyButton of buyButtons) {
	  buyButton.onclick = addToCart;
	}
}

if (document.querySelector('.item_page')) {
	await fetchItemData()

	const buyButtons = document.querySelectorAll('.button__buy');
	console.log(buyButtons);
	for (const buyButton of buyButtons){
		buyButton.onclick = addToCart;
	}
}


if (document.getElementById('make-order')) {
	inputCheck.inputCheck();
}

if (document.querySelector('.cart__img')) {
	cartImg.onclick = function() {
		cartImg.classList.toggle('active');
		cartText.classList.toggle('active');
		cartPopUp.classList.toggle('active');
		cartContainer.classList.toggle('active');
	};

	cartText.onclick = function() {
		cartImg.classList.toggle('active');
		cartText.classList.toggle('active');
		cartPopUp.classList.toggle('active');
		cartContainer.classList.toggle('active');
	};

	cartBackground.onclick = function() {
		cartImg.classList.toggle('active');
		cartText.classList.toggle('active');
		cartPopUp.classList.toggle('active');
		cartContainer.classList.toggle('active');
	};

	cartCross.onclick = function() {
		cartImg.classList.toggle('active');
		cartText.classList.toggle('active');
		cartPopUp.classList.toggle('active');
		cartContainer.classList.toggle('active');
	};
}

function revealCart() {
	cartImg.classList.toggle('hidden');
}

if (document.querySelector('.search__img')) {
	searchIcon.onclick = function() {
		cartImg.classList.toggle('hidden');
		searchIcon.classList.toggle('hidden');
		searchCross.classList.toggle('hidden');
		searchInput.classList.toggle('active');
	};

	searchCross.onclick = function() {
		searchIcon.classList.toggle('hidden');
		searchCross.classList.toggle('hidden');
		searchInput.classList.toggle('active');
		setTimeout(revealCart, 350);
	};
}