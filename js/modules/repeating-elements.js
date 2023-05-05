import { clearCart, updateCart} from "./cart.js";

export async function buildPage(){
	const footer = document.querySelector('.footer');
	const header = document.querySelector('.header');
	const body = document.querySelector('.body');
	const cartNotification = document.querySelector('.cart-notification');
	const cartPopUp = document.querySelector('.cart-popup');

	if(cartPopUp) {
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
			`

		document.querySelector('.cart-popup-clear').addEventListener('click', clearCart);
		
		await updateCart();
	}
	
	if(cartNotification) {
		cartNotification.innerHTML =
			`
			<div class="cart-notification-container">
				Товар успішно додано у корзину!
			</div>
			`
	}
	
	if(body) {
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
