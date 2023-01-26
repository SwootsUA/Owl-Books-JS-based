<?php
    // $servername = "localhost";
    // $username = "root";
    // $password = "admin";
    // $dbname = "owl-books";
    
    $servername = "localhost";
    $username = "owlbooks";
    $password = "Swoots_2023";
    $dbname = "swoots";
    
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    if (!$conn) {
      die("<b>Error:</b> " . mysqli_connect_error());
    }

    $currentFileName = basename($_SERVER['PHP_SELF']);

    if($_GET["item-id"]) {
      $itemId = $_GET["item-id"];
      $sql = "SELECT _id, name, description FROM items WHERE _id = $itemId";
      $result = mysqli_query($conn, $sql);
      mysqli_close($conn);

      if($result) {
        $f = mysqli_fetch_array($result);
        echo 
        "
        <title>
          ".$f['name']."
        </title>
        <meta name=\"description\" content=\"".$f['description']."\">
        ";
      };
    };
?>