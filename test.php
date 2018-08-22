<?php
// error_reporting(E_ALL);
include('src/DataBase.php');


// $DatabaseChild = new DataBase.getAverageSize();

$DatabaseChild = new DataBase;

$getSize = $DatabaseChild -> getAverageSize();
echo "Taille Moyenne : ";
print($getSize);
echo "\n Croissance Moyenne : ";
$getGrowth = $DatabaseChild -> getAverageGrowth();
print($getGrowth);
echo "\n Esperance de vie Moyenne : ";
$getLifespan = $DatabaseChild -> getAverageLifespan();
print($getLifespan);
echo "\n Pourcentage femme : ";
$getSexRatio = $DatabaseChild -> getSexRatio();
print($getSexRatio);





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Human Evolution</title>
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" media="screen" href="evolution.css">
</head>
<body>
    <div class="chrono row">
        1900
    </div>

    <div class="wrapper">
        
    </div>

    <button onclick="chrono()" class="btn">Démarrer</button>
    
    <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script src="js/chrono.js"></script>
</body>
</html>