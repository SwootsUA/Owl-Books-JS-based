<?php
    $servername = "localhost";
    $username = "root";
    $password = "admin";
    $dbname = "owl-books";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $searchType = "";
    $currentFileName = basename($_SERVER['PHP_SELF']);
    if ($currentFileName == 'books.php') {
      $searchType = "WHERE types.type = \"book\"";
    }
    if ($currentFileName == 'mangas.php') {
      $searchType = "WHERE types.type = \"manga\"";
    }
    if ($currentFileName == 'magazines.php') {
      $searchType = "WHERE types.type = \"magazine\"";
    }
    if ($currentFileName == 'accessorys.php') {
      $searchType = "WHERE types.type = \"accessory\"";
    }
    if ($currentFileName == 'index.php') {
      $searchType = "";
    }
    
    $sql = "SELECT items._id, items.image_name, items.name, items.price, items.type, items.made_by, items.description, types.type FROM items JOIN types on items.type = types._id " . $searchType;
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);
    
    for($i = 0; $i < mysqli_num_rows($result); $i++) {
        $f = mysqli_fetch_array($result);
        echo 
        "
        <div class=\"item\">
						<div class=\"item__content\">
							<img class=\"item_image\"src=\"../img/items/".$f['image_name']."\">
							<div class=\"item__content__name\">
								".$f['name']."
							</div>
							<div class=\"item__content__row\">
								<div class=\"item__content__collum\">
									<div class=\"item__content__price\">
										".$f['price']." грн
									</div>
								</div>
								<button class=\"button__buy\">
									Купити
								</button>
							</div>
						</div>
					</div>
        ";
    }

?>