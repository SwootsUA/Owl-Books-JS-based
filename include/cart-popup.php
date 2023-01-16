<div class="background"></div>
<div class="cart-popup-container">
	<div class="cart-popup-content">
		<div class="cart-header">
			<div class="cart-header-tittle"> Кошик </div>
			<div class="cart-header-cross">
				<img src="../img/cross.png" alt="">
			</div>
		</div>
		<div class="cart-header">
			<div class="cart-popup-quantity">2 шт.</div>
			<div class="cart-popup-clear"> Видалити все </div>
		</div>
		<ul class="cart-products">
			<li class="cart-product">
				<div class="about-product">
					<div class="product-image-container">
						<img class="product-image" src="../img/items/manga.jpg" alt="alt">
					</div>
					<div class="product-details">
						<div class="product-name">Манга fewrfwewefw</div>
						<div class="product-author">Кен Вакуі</div>
						<div class="product-price">350 грн</div>
					</div>
				</div>
				<div class="product-actions">
					<div class="product-action-remove">Видалити</div>
					<div class="product-quantity-input-container">
						<input type="number" min="1" max="9999" value="1" class="product-quantity-input">
					</div>
				</div>
			</li>
			<li class="cart-product">
				<div class="about-product">
					<div class="product-image-container">
						<img class="product-image" src="../img/items/magazine.jpg" alt="alt">
					</div>
					<div class="product-details">
						<div class="product-name">Журнал</div>
						<div class="product-author">Forbes</div>
						<div class="product-price">200 грн</div>
					</div>
				</div>
				<div class="product-actions">
					<div class="product-action-remove">Видалити</div>
					<div class="product-quantity-input-container">
						<input type="number" min="1" max="9999" value="1" class="product-quantity-input">
					</div>
				</div>
			</li>
		</ul>
		<div class="cart-summary">
			<div class="cart-summary-wrapper">
				<div class="cart-summary-group">
					<div class="cart-summary-title">
						Всього
					</div>
					<div class="cart-summary-price">
						550 грн
					</div>
				</div>
				<button type="button" onclick="window.location='../pages/make-order.php';" class="cart-summary-button">
					Перейти до оформлення замовлення
				</button>
			</div>
		</div>
	</div>
</div>
