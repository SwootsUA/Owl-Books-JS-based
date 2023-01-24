<!DOCTYPE html>

<?php 
    function customError($errno, $errstr) { echo "<b>Error:</b> [$errno] $errstr"; }
	set_error_handler("customError");
?>

<html lang="en">
	<head>
		<title>
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/db/db-item-tittle.php");?>
		</title>
		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head-info.html");?>
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

			<div class="item item_page">
                <?php
                    $itemId = $_GET["item-id"];  
                    include($_SERVER["DOCUMENT_ROOT"]."/include/db/db-item.php"); 
                ?>
            </div>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.html");?>
		</footer>
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>