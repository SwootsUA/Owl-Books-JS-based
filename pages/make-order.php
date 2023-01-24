<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Оформлення замовлення</title>
        <?php include($_SERVER["DOCUMENT_ROOT"]."/include/head-info.html");?>
	</head>

	<body>
        <nav class="burger-menu_items">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/burger-menu.html");?>
		</nav>

		<header class="header">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.html");?>
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
                            <div class="cart-popup-quantity"></div>
                            <div class="cart-popup-clear"> Видалити все </div>
                        </div>
                        <div class="cart-summary">
                            <div class="cart-summary-wrapper">
                                <div class="cart-summary-group">
                                    <div class="cart-summary-title">
                                        Всього
                                    </div>
                                    <div class="cart-summary-price"></div>
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
                        <div class="contacts-text-content np-margin">Відділення Нової Пошти *</div>
                        <div class="contacts-text-content">Коментар</div>
                    </div>
                    <div class="contacts-input">
                        <input type="text" class="order-input name" placeholder="Ім'я" required>
                        <input type="text" class="order-input surname" placeholder="Призвище" required>
                        <input type="number" class="order-input phone" placeholder="Телефон" required>
                        <input type="text" class="order-input email" placeholder="Електронна пошта" required>
                        <select class="order-input oblast" required>
                            <option value="" disabled selected> --- Виберіть область --- </option>
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
                        <input type="text" class="order-input city" placeholder="Місто" required>
                        <input type="text" class="order-input np-margin nova-post" id="nova-post" placeholder="Відділення Нової Пошти" required>
                        <textarea class="order-input description not_req" placeholder="Коментар"></textarea>
                    </div>
                </div>
            </div>
            <button type="submit" id="make-order" class="order-summary-button">Оформити замовлення</button>
        </div>

		<footer class="footer">
			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.html");?>
		</footer>
		
		<script type="module" src="../js/app.js"></script>
	</body>
</html>