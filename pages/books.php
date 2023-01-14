<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Книги</title>
		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head-info.php");?>
	</head>

	<body>
		<nav class="burger-menu_items">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/burger-menu.php");?>
		</nav>

		<div class="cart-popup">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/cart-popup.php");?>
		</div>

		<header class="header">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.php");?>
		</header>
		
		<div class="body">
			<div class="controls">
				<div class="search">
					<div class="search__border">
						<input type="search" id="search" placeholder="Пошук...">
					</div>
					<img class="search__img" src="../img/search.png" alt="">
					<img class="search__cross hidden" src="../img/cross.png" alt="">	
				</div>
				<div class="cart">
					<img class="cart__img" src="../img/cart.png" alt="">
					<div class="cart__text">Кошик</div>
				</div>
			</div>

			<div class="new">
				<h2 class="new__tittle">
					Книги
				</h2>
				<div class="new__row">
					<div class="item">
						<div class="item__content">
							<img src="../img/items/item.png" alt="book">
							<div class="item__content__name">
								Книга 1
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										300грн
									</div>
									<div class="item__content__accessibility">
										В наявності
									</div>
								</div>
								<button class="button__buy">
									Купити
								</button>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item__content">
							<img src="../img/items/item.png" alt="book">
							<div class="item__content__name">
								Книга 2
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										300грн
									</div>
									<div class="item__content__accessibility">
										В наявності
									</div>
								</div>
								<button class="button__buy">
									Купити
								</button>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item__content">
							<img src="../img/items/item.png" alt="book">
							<div class="item__content__name">
								Книга 3
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										300грн
									</div>
									<div class="item__content__accessibility">
										В наявності
									</div>
								</div>
								<button class="button__buy">
									Купити
								</button>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="item__content">
							<img src="../img/items/item.png" alt="book">
							<div class="item__content__name">
								Книга 4
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										300грн
									</div>
									<div class="item__content__accessibility">
										В наявності
									</div>
								</div>
								<button class="button__buy">
									Купити
								</button>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php");?>
		</footer>
		
		<script src="../js/app.js"></script>
	</body>
</html>