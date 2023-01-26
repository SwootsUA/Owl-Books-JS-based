<!DOCTYPE html>

<?php 
    function customError($errno, $errstr) { echo "<b>Error:</b> [$errno] $errstr"; }
	set_error_handler("customError");
?>

<html lang="ua">
	<head>
		<title>Журнали</title>
		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head-info.html");?>
		<meta name="description" content="Найновіші випуски відомих журналів.">
	</head>

	<body>
		<nav class="burger-menu_items">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/burger-menu.html");?>
		</nav>

		<div class="cart-popup">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/cart-popup.html");?>
		</div>

		<div class="cart-notification">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/cart-notification.html");?>
		</div>

		<header class="header">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.html");?>
		</header>
		
		<div class="body">
			<div class="controls">
				<?php include($_SERVER["DOCUMENT_ROOT"]."/include/controls.html");?>
			</div>	

			<div class="new">
				<h2 class="new__tittle">
					Журнали
				</h2>
				<div class="new__row">
					<?php include($_SERVER["DOCUMENT_ROOT"]."/include/db/db-page.php");?>
				</div>
			</div>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.html");?>
		</footer>
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>