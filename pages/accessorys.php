<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Аксесуари</title>
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
					Аксесуари
				</h2>
				<div class="new__row">
					<div class="item">
						<div class="item__content">
							<img src="../img/items/bookmark-for-books-just-reading.jpg">
							<div class="item__content__name">
								Аксесуар
							</div>
							<div class="item__content__row">
								<div class="item__content__collum">
									<div class="item__content__price">
										100грн
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