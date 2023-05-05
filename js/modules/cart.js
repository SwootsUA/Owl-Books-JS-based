/*jshint esversion: 6 */
export async function clearCart() {
	localStorage.setItem("cart", "[]");
	await updateCart();
}

function removeFromCart() {
	var itemId = this.closest('.cart-product').querySelector('.product-name').id;
	let cart;

	cart = JSON.parse(localStorage.getItem("cart"));
	cart = cart.filter(item => item.id != itemId);

	localStorage.setItem("cart", JSON.stringify(cart));

	updateCart();
}

function plusQuantity() {
	let input = this.closest('.product-quantity-input-container').querySelector('.product-quantity-input');
	if (parseInt(input.value) < parseInt(document.getElementById('item_quantity').innerText)) {
		input.value = parseInt(input.value) + 1;
		updatePrice();
		let id = parseInt(this.closest('.cart-product').querySelector('.product-name').id);
		let cart = JSON.parse(localStorage.getItem("cart"));
		let res = cart.find(element => element.id == id);
		res.quantity = parseInt(input.value);
		localStorage.setItem("cart", JSON.stringify(cart));
	}
}

function minusQuantity() {
	let input = this.closest('.product-quantity-input-container').querySelector('.product-quantity-input');
	if (parseInt(input.value) > 1) {
		input.value = parseInt(input.value) - 1;
		updatePrice();
		let id = parseInt(this.closest('.cart-product').querySelector('.product-name').id);
		let cart = JSON.parse(localStorage.getItem("cart"));
		let res = cart.find(element => element.id == id);
		res.quantity = parseInt(input.value);
		localStorage.setItem("cart", JSON.stringify(cart));
	}
}

export async function updateCart() {
	const cartPopUp = document.querySelector('.cart-popup-content');
	const cartSummary = document.querySelector('.cart-summary');

	var cart;

	if (!localStorage.getItem("cart")) {
		localStorage.setItem("cart", "[]");
	}

	cart = JSON.parse(localStorage.getItem("cart"));
	const response = await fetch(`http://localhost:2210/cart?ids=${cart.map(obj => obj.id).join(',')}`);
	const products = await response.json();

	if (document.getElementById("ul-body")) {
		document.getElementById("ul-body").remove();
	}

	const node = document.createElement("ul");
	node.classList.add("cart-products");
	node.id = "ul-body";

	var result = '';
	var image;

	for(var i=0; i<products.length; i++){
		let response = await fetch(`http://localhost:2210/image?imgName=${products[i].image}`);
		let blob = await response.blob();
		image = URL.createObjectURL(blob);
			
		result += `
		<li class="cart-product">
			<div class="about-product">
			<div class="product-image-container">
				<img class="product-image" src="${image}" alt="${products[i].name}">
			</div>
			<div class="product-details">
				<div id="${products[i].book_id}" class="product-name">${products[i].name}</div>
				<div class="product-price">${products[i].price} грн</div>
			</div>
			</div>
			<div class="product-actions">
			<div class="product-action-remove">Видалити</div>
			<div class="product-quantity-input-container">
				<img src="./img/minus.png" alt="minus" class="quantity-button minus">
				<input type="number" min="1" max="100" class="product-quantity-input">
				<img src="./img/plus.png" alt="plus" class="quantity-button plus">
			</div>
			</div>
		</li>
		`
	}

	node.innerHTML = result;

	cartPopUp.insertBefore(node, cartSummary);
	
	const produtsQuantitys = document.querySelectorAll('.product-quantity-input');

	for (const input of produtsQuantitys) {
		input.addEventListener('change', rememberQuantity);
	}

	const minuses = document.querySelectorAll('.quantity-button.minus');
	const pluses = document.querySelectorAll('.quantity-button.plus');

	var productActionRemove = document.querySelectorAll('.product-action-remove');
	for (const removeBtn of productActionRemove) {
		removeBtn.onclick = removeFromCart;
	}

	for (const minus of minuses) {
		minus.onclick = minusQuantity;
	}

	for (const plus of pluses) {
		plus.onclick = plusQuantity;
	}

	const allCartProduct = document.querySelectorAll('.cart-product');
	for (const product of allCartProduct) {
		let second_cart = JSON.parse(localStorage.getItem('cart'));
		let itemId = parseInt(product.querySelector('.product-name').id);
		let itemQuantity = second_cart.find(element => element.id == itemId);
		product.querySelector('.product-quantity-input').setAttribute('value', itemQuantity.quantity);
	}

	const cartQuantity = document.querySelector('.cart-popup-quantity');
	cartQuantity.textContent = allCartProduct.length + " шт.";
	if (allCartProduct.length > 0) {
		cartSummary.classList.remove('hidden');
	} else {
		cartSummary.classList.add('hidden');
	}

	addPriceUpdater();
}

export function addToCart() {
	let cart = JSON.parse(localStorage.getItem("cart"));
	let itemId;
	let itemQuantity;

	let notification = document.querySelector('.cart-notification-container');
	notification.classList.toggle('active');
	setTimeout(function () {notification.classList.toggle('active');}, 2000);

	if (this.id == 'item_page') {
		itemId = parseInt(this.closest('.item_page__info_container').querySelector('.item_page__name').id);
		itemQuantity = parseInt(this.parentElement.querySelector('.item_page-product-quantity-input').value);
	} else {
		itemId = parseInt(this.closest('.item__content').querySelector('.item__content__name').id);
		itemQuantity = 1;
	}

	let item = {
		id: itemId,
		quantity: itemQuantity
	};

	if (cart.length === 0) {
		cart.push(item);
	} else {
		let res = cart.find(element => element.id == itemId);
		if (res === undefined) {
			cart.push(item);
		} else {
			res.quantity += itemQuantity;
		}
	}
	localStorage.setItem("cart", JSON.stringify(cart));

	updateCart();
}

function updatePrice() {
	const summaryPrice = document.querySelector('.cart-summary-price');
	const produtsQuantitys = document.querySelectorAll('.product-quantity-input');
	let value = 0;
	for (const input of produtsQuantitys) {
		checkQuantity(input);
		value += parseInt(input.value) * parseInt(input.closest('.cart-product').querySelector('.product-price').textContent.slice(0, 4));
	}

	summaryPrice.textContent = value + " грн";
}

function rememberQuantity() {
	updatePrice();
	let id = parseInt(this.closest('.cart-product').querySelector('.product-name').id);
	let quantity = parseInt(this.value);
	let cart = JSON.parse(localStorage.getItem("cart"));
	let res = cart.find(element => element.id == id);
	res.quantity = quantity;
	localStorage.setItem("cart", JSON.stringify(cart));
}

function checkQuantity(input) {
	try {
		if (input.value < 1) {
			input.value = 1;
		} else if (input.value > parseInt(document.getElementById('item_quantity').innerText)){
			input.value = parseInt(document.getElementById('item_quantity').innerText);
			console.log('Забагато');
		}
	} catch (error) {
		console.log('Error')
	}
}

function addPriceUpdater() {
	updatePrice();

	var itemPagequantity = document.querySelector('.item_page-product-quantity-input');
	if (itemPagequantity) {
		itemPagequantity.onchange = checkQuantity(itemPagequantity);
	}	
}