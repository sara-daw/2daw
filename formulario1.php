<?php

$profesor = $_GET["profesor"];
$horas = $_GET["horas"];
$informacion = $_GET["informacion"];
print_r($_GET);
echo "<br><br>";
var_dump($_GET);
echo '<h1>Datos recibidos</h1>';

if(isset($_GET["asignatura"])){
    echo 'Asignatura: ' . $_GET["asignatura"] . '<br>';
}
echo 'Profesor: ' . $profesor . '<br>';
echo 'Horas: ' . $horas . '<br>';
echo 'Información: ' . $informacion. '<br>';
echo 'Días que se imparte: ';
if(isset($_GET["dias"])){
    foreach ($_GET["dias"] as $dia) {
        echo $dia.' ';
    }
}


?>
