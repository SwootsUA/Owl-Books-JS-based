<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Owl Books</title>
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
				<?php include($_SERVER["DOCUMENT_ROOT"]."/include/controls.php");?>
			</div>

			<div class="new">
				<h2 class="new__tittle">
					Новинки!
				</h2>
				<div class="new__row">
					<div class="item">
						<div class="item__content">
							<img src="img/items/item.png" alt="">
							<div class="item__content__name">
								Книга
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
							<img src="img/items/magazine.jpg" alt="">
							<div class="item__content__name">
								Журнал
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										200грн
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
							<img src="img/items/manga.jpg" alt="">
							<div class="item__content__name">
								Манга
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										350грн
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
							<img src="img/items/accessory.jpg" alt="">
							<div class="item__content__name">
								Аксесуар
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										100грн
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
		
		<script src="js/app.js"></script>
	</body>
</html>