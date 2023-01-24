<?php
    // $servername = "localhost";
    // $username = "root";
    // $password = "admin";
    // $dbname = "owl-books";
    
    $servername = "localhost";
    $username = "owlbooks";
    $password = "Swoots_2023";
    $dbname = "swoots";
    
    //error handler function
    function customError($errno, $errstr) {
      echo "<b>Error:</b> [$errno] $errstr";
    }
    //set error handler
    set_error_handler("customError");

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
      die("<b>Error:</b> " . mysqli_connect_error());
    }

    $currentFileName = basename($_SERVER['PHP_SELF']);

    $itemId = $_GET["item-id"];
    $sql = "SELECT _id, name FROM items WHERE _id = $itemId";
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);

    $f = mysqli_fetch_array($result);
    echo $f['name'];
?>