<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Оформлення замовлення</title>
        <?php include($_SERVER["DOCUMENT_ROOT"]."/include/head-info.php");?>
	</head>

	<body>
        <nav class="burger-menu_items">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/burger-menu.php");?>
		</nav>

		<header class="header">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.php");?>
		</header>
		
		<div class="make-order-body">
            <div class="make-order-cart">
            </div>
            <div class="make-order-delivery">
                <select class="select-oblast">
                    <option disabled="disabled" selected="selected"> --- Виберіть --- </option>
                    <option value="1">Івано-Франківська область</option>
                    <option value="2">Вінницька область</option>
                    <option value="3">Волинська область</option>
                    <option value="4">Дніпропетровська область</option>
                    <option value="5">Донецька область</option>
                    <option value="6">Житомирська область</option>
                    <option value="7">Закарпатська область</option>
                    <option value="8">Запорізька область</option>
                    <option value="9">Кіровоградська область</option>
                    <option value="10">Київська область</option>
                    <option value="11">Луганська область</option>
                    <option value="12">Львівська область</option>
                    <option value="13">Миколаївська область</option>
                    <option value="14">Одеська область</option>
                    <option value="15">Полтавська область</option>
                    <option value="16">Рівненська область</option>
                    <option value="17">Сумська область</option>
                    <option value="18">Тернопільська область</option>
                    <option value="19">Харківська область</option>
                    <option value="20">Херсонська область</option>
                    <option value="21">Хмельницька область</option>
                    <option value="22">Черкаська область</option>
                    <option value="23">Чернівецька область</option>
                    <option value="24">Чернігівська область</option>
                </select>
                <input type="text" class="order-input name">
                <input type="text" class="order-input surname">
                <input type="text" class="order-input input-city">
                <input type="text" class="order-input input-nova-post">
                <input type="text" class="order-input input-description">
            </div>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php");?>
		</footer>
		
		<script src="../js/app.js"></script>
	</body>
</html>