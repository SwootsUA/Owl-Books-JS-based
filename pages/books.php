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
				<?php include($_SERVER["DOCUMENT_ROOT"]."/include/controls.php");?>
			</div>

			<div class="new">
				<h2 class="new__tittle">
					Книги
				</h2>
				<div class="new__row">
					<div class="item">
						<div class="item__content">
							<img src="../img/items/astrophysics-for-people-in-a-hurry.png">
							<div class="item__content__name">
								Книга
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										300грн
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
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>