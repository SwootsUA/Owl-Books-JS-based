import { clearCart, updateCart} from "./cart.js";

function openSearch(isOpen) {
	var searchIcon = document.querySelector('.search__img');
	var searchCross = document.querySelector('.search__cross');
	var searchInput = document.querySelector('.search__input');
	var cartImg = document.querySelector('.cart__img');
	
	if (isOpen) {
		cartImg.classList.toggle('hidden');
		searchIcon.classList.toggle('hidden');
		searchCross.classList.toggle('hidden');
		searchInput.classList.toggle('active');
	} else {
		searchIcon.classList.toggle('hidden');
		searchCross.classList.toggle('hidden');
		searchInput.classList.toggle('active');
		setTimeout(() => {cartImg.classList.toggle('hidden')}, 350);
	}
}

function activateCart() {
	var cartImg = document.querySelector('.cart__img');
	var cartText = document.querySelector('.cart__text');
	var cartPopUp = document.querySelector('.cart-popup');
	var popUpContainer = document.querySelector('.cart-popup-container');

	cartImg.classList.toggle('active');
	cartText.classList.toggle('active');
	cartPopUp.classList.toggle('active');
	popUpContainer.classList.toggle('active');
}

export async function buildPage(){
	const footer = document.querySelector('.footer');
	const header = document.querySelector('.header');
	const body = document.querySelector('.body');
	const cartNotification = document.querySelector('.cart-notification');
	const cartPopUp = document.querySelector('.cart-popup');
	
	if(cartNotification) {
		cartNotification.innerHTML =
			`
			<div class="cart-notification-container">
				Товар успішно додано у корзину!
			</div>
			`
	}

	if(body) {
		cartPopUp.innerHTML =
			`
			<div class="background"></div>
			<div class="cart-popup-container">
				<div class="cart-popup-content">
					<div class="cart-header">
						<div class="cart-header-tittle"> Кошик </div>
						<div class="cart-header-cross">
							<img src="./img/cross.png" alt="close cart">
						</div>
					</div>
					<div class="cart-header">
						<div class="cart-popup-quantity"></div>
						<div class="cart-popup-clear"> Видалити все </div>
					</div>
					<div class="cart-summary">
						<div class="cart-summary-wrapper">
							<div class="cart-summary-group">
								<div class="cart-summary-title">
									Всього
								</div>
								<div class="cart-summary-price"></div>
							</div>
							<button type="button" onclick="window.location='./make-order.html';" class="cart-summary-button">
								Перейти до оформлення замовлення
							</button>
						</div>
					</div>
				</div>
			</div>
			`;

		document.querySelector('.cart-popup-clear').addEventListener('click', clearCart);
		
		await updateCart();

		body.innerHTML = 
			`
			<div class="controls">
				<form class="search" action="./search.html" method="get">
					<input class="search__input" type="search" name="s" placeholder="Пошук...">
					<img class="search__img" src="./img/search.png" alt="search">
					<img class="search__cross hidden" src="./img/cross.png" alt="close search">	
				</form>
				<div class="cart">
					<img class="cart__img" src="./img/cart.png" alt="cart">
					<div class="cart__text">Кошик</div>
				</div>
			</div>
			` + body.innerHTML;

		const searchIcon = document.querySelector('.search__img');
		const searchCross = document.querySelector('.search__cross');
		const cartImg = document.querySelector('.cart__img');
		const cartText = document.querySelector('.cart__text');
		const cartBackground = document.querySelector('.background');
		const cartCross = document.querySelector('.cart-header-cross');

		cartImg.addEventListener('click', () => { activateCart(); });
		cartText.addEventListener('click', () => { activateCart(); });
		cartCross.addEventListener('click', () => { activateCart(); });
		cartBackground.addEventListener('click', () => { activateCart(); });
		searchIcon.addEventListener('click', () => { openSearch(true); });
		searchCross.addEventListener('click', () => { openSearch(false); });
	}

	if(header) {
		header.innerHTML = 
			`
			<a href="./index.html" class="header__logo">
				<img src="./img/logo.png" alt="logo" height="80">
				<div>Owl Books</div>
			</a>
			`
	}
	
	if(footer) {
		footer.innerHTML = 
			`
			<div class="footer__copyright">© 2023 “Owl Books”</div>
			<div class="footer__about">
				<a class="footer__about__social" href="https://telegram.org">
					<img class="footer__about__social_img" src="./img/teleg.png" alt="telegram">
				</a>
				<a class="footer__about__social" href="https://instagram.com">
					<img class="footer__about__social_img" src="./img/insta.png" alt="instagram">
				</a>
				<a class="footer__about__social" href="https://facebook.com">
					<img class="footer__about__social__img" src="./img/faceb.png" alt="facebook">
				</a>
			</div>
			`
	}	
}  
