<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inicio PHP</title>
</head>
<?php 
    $title = 'Hola mundo desde otraEmpresa';
?>
<body>
    <header>
        <h1>
        <?php 
            echo $title
        ?>
        </h1>
    </header>
    <p>Otra forma de interpolar variables en php</p>
    <header>
        <h1>
        <?= $title?>
        </h1>
    </header>
    <p>En GoLive no sale, porque no tiene la extensión .html por lo que se baja el fichero.</p>
<p>SOLUCION: Tener un servidor de php. </p>
</body>
</html>