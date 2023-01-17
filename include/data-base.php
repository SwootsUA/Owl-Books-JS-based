<?php
    $servername = "localhost";
    $username = "root";
    $password = "admin";
    $dbname = "owl-books";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM `items` ORDER BY `_id` ASC";
    $result = mysqli_query($conn, $sql);
    for($i = 0; $i < mysqli_num_rows($result); $i++) {
        $f = mysqli_fetch_array($result);
        echo $f['_id']." ".$f['name']." ".$f['price']." ".$f['type']." ".$f['made_by']."<br>";
    }
?>