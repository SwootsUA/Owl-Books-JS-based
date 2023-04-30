<?php
    // $servername = "localhost";
    // $username = "root";
    // $password = "admin";
    // $dbname = "owl-books";
    
    $servername = "localhost";
    $username = "owlbooks2";
    $password = "Swoots_2023";
    $dbname = "swoots2";

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
      die("<b>Error:</b> " . mysqli_connect_error());
    }

    $search = $_GET['search'];

    $sql = "SELECT items._id, image_name, name, price, type_id, type FROM items JOIN types ON type_id = types._id WHERE name like \"%" . $search . "%\"";
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);

    for($i = 0; $i < mysqli_num_rows($result); $i++) {
        $f = mysqli_fetch_array($result);
        echo 
        "
        <div class=\"item\">
          <div class=\"item__content\">
            <div class=\"item__href\">
              <img class=\"item_image\" src=\"../img/items/".$f['image_name']."\" alt=\"".$f['name']."\">
              <div id=\"".$f['_id']."\" class=\"item__content__name\">
                ".$f['name']."
              </div>
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