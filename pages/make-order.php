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
                <div class="cart-popup-content">
                    <div class="cart-header">
                        <div class="cart-header-tittle"> Кошик </div>
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
                                    <div class="product-name">Манга</div>
                                    <div class="product-author">Кен Вакуі</div>
                                    <div class="product-price">350 грн</div>
                                </div>
                            </div>
                            <div class="product-actions">
                                <div class="product-action-remove">Видалити</div>
                                <div class="product-quantity-input-container">
                                    <input id="noStyleSearch" type="number" min="1" max="9999" value="1" class="product-quantity-input">
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
                                    <input id="noStyleSearch" type="number" min="1" max="9999" value="1" class="product-quantity-input">
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
                        </div>
                    </div>
                </div>
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