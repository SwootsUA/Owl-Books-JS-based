<?php
    $servername = "localhost";
    $username = "root";
    $password = "admin";
    $dbname = "owl-books";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $cartIds = $_REQUEST["q"];

    $sql = "SELECT items._id, image_name, name, price, made_by FROM items WHERE items._id IN (" . $cartIds . ")";
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);

    for($i = 0; $i < mysqli_num_rows($result); $i++) {
        $f = mysqli_fetch_array($result);
        echo 
        "
        <li class=\"cart-product\">
	        <div class=\"about-product\">
		        <div class=\"product-image-container\">
			        <img class=\"product-image\" src=\"../img/items/".$f['image_name']."\">
		        </div>
		        <div class=\"product-details\">
                    <div id=\"".$f['_id']."\" class=\"product-name\">".$f['name']."</div>
                    <div class=\"product-author\">".$f['made_by']."</div>
                    <div class=\"product-price\">".$f['price']." грн</div>
		        </div>
	        </div>
            <div class=\"product-actions\">
                <div class=\"product-action-remove\">Видалити</div>
                <div class=\"product-quantity-input-container\">
                    <input type=\"number\" min=\"1\" max=\"100\" value=\"1\" class=\"product-quantity-input\">
                </div>
            </div>
        </li>
        ";
    }
?>