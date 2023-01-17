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
		
        <div class="popup-order-succeed">
            <div class="popup-order-succeed__body">
                <div class="popup-order-succeed__text">
                    Замовлення успішне!<p>Деталі доставки будуть надіслані вам на пошту та у телеграм
                </div>
                <button class="order-summary-button">Закрити діалогове вікно</button>
            </div>
        </div>

		<div class="make-order-body">
            <div class="order-container">
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
                    <div class="contacts-text">
                        <div class="contacts-text-content">Ім'я *</div>
                        <div class="contacts-text-content">Прізвище *</div>
                        <div class="contacts-text-content">Телефон *</div>
                        <div class="contacts-text-content">Електронна пошта *</div>
                        <div class="contacts-text-content">Область *</div>
                        <div class="contacts-text-content">Місто *</div>
                        <div class="contacts-text-content input-nova-post">Відділення Нової Пошти *</div>
                        <div class="contacts-text-content">Коментар</div>
                    </div>
                    <div class="contacts-input">
                        <input type="text" class="order-input name" placeholder="Ім'я">
                        <input type="text" class="order-input surname" placeholder="Призвище">
                        <input type="number" class="order-input phone" placeholder="Телефон">
                        <input type="text" class="order-input email" placeholder="Електронна пошта">
                        <select class="order-input oblast">
                            <option value="0" disabled="disabled" selected="selected"> --- Виберіть --- </option>
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
                        <input type="text" class="order-input input-city" placeholder="Місто">
                        <input type="text" class="order-input input-nova-post" placeholder="Відділення Нової Пошти">
                        <textarea type="text" class="order-input input-description not_req" placeholder="Коментар"></textarea>
                    </div>
                </div>
            </div>
            <button id="make-order" class="order-summary-button">Оформити замовлення</button>
		</div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php");?>
		</footer>
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>