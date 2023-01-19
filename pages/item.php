<!DOCTYPE html>
<html lang="en">
	<head>
		<title>
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/db/db-item-tittle.php");?>
		</title>
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

			<div class="item" id="item_page">
                <?php
                    $itemId = $_GET["item-id"];  
                    include($_SERVER["DOCUMENT_ROOT"]."/include/db/db-item.php"); 
                ?>
            </div>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php");?>
		</footer>
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>