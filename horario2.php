<?php 
 
// Horas del horario
$tiempo = array( 
    0 => "Hora", 
    1 => "8:15 - 9:10", 
    2 => "9:10 - 10:05", 
    3 => "10:05 - 11:00", 
    4 => "11:30 - 12:25", 
    5 => "12:25 - 13:20", 
    6 => "13:20 - 14:15", 
    7 => "14:15 - 15:00" 
); 
 
// Días de la semana
$dias = array( 
    "l" => "lunes", 
    "m" => "martes", 
    "x" => "miercoles", 
    "j" => "jueves", 
    "v" => "viernes" 
); 
 
$horario = array(); 
 
$horario[1]["l"] = "IPP2"; 
$horario[1]["m"] = "DWESV"; 
$horario[1]["x"] = "DWESV"; 
$horario[1]["j"] = "DWESV"; 
$horario[1]["v"] = "DWESV"; 
 
$horario[2]["l"] = "DWESV"; 
$horario[2]["m"] = "DWESV"; 
$horario[2]["x"] = "IPP2"; 
$horario[2]["j"] = "PIMOD"; 
$horario[2]["v"] = "DEAPW"; 
 
$horario[3]["l"] = "IPP2"; 
$horario[3]["m"] = "DWENC"; 
$horario[3]["x"] = "DWENC"; 
$horario[3]["j"] = "DWESV"; 
$horario[3]["v"] = "PIMOD"; 
 
$horario[4]["l"] = "PIMOD"; 
$horario[4]["m"] = "DWENC"; 
$horario[4]["x"] = "IPP2"; 
$horario[4]["j"] = "DWESV"; 
$horario[4]["v"] = "DEAPW"; 
 
$horario[5]["l"] = "DEAPW"; 
$horario[5]["m"] = "DWESV"; 
$horario[5]["x"] = "DWESV"; 
$horario[5]["j"] = "SASP"; 
$horario[5]["v"] = "OPT 1"; 
 
$horario[6]["l"] = "DWENC"; 
$horario[6]["m"] = "OPT2A"; 
$horario[6]["x"] = "OPT2I"; 
$horario[6]["j"] = "DWESV"; 
$horario[6]["v"] = "DWESV"; 
 
$horario[7]["l"] = "DWENC"; 
$horario[7]["m"] = ""; 
$horario[7]["x"] = ""; 
$horario[7]["j"] = ""; 
$horario[7]["v"] = ""; 
 
// Color de cada asignatura
$colores = array( 
    "IPP2" => "rgba(255, 182, 193, 0.4)", 
    "DWESV" => "rgba(173, 216, 230, 0.4)", 
    "DWENC" => "rgba(144, 238, 144, 0.4)", 
    "PIMOD" => "rgba(255, 223, 150, 0.4)", 
    "DEAPW" => "rgba(255, 190, 140, 0.4)", 
    "SASP" => "rgba(200, 170, 240, 0.4)", 
    "OPT 1" => "rgba(180, 210, 255, 0.4)", 
    "OPT2A" => "rgba(220, 190, 220, 0.4)", 
    "OPT2I" => "rgba(180, 230, 220, 0.4)" 
); 
 
?> 
<!DOCTYPE html> 
<html lang="es"> 
    <head> 
        <meta charset="UTF-8"> 
        <title>Horario 2DAW</title> 
        <link rel="stylesheet" href="horario.css"> 
    </head> 
    <body> 
        <header> 
            <h1>Horario 2DAW</h1> 
            <p>2º Desarrollo de Aplicaciones Web</p> 
        </header> 
        <main> 
            <section class="horario"> 
                <h2>Horario semanal</h2> 
                <table> 
                    <?php 
                    // Cabecera con los días
                    echo '<tr>'; 
                    echo '<td>'.$tiempo[0].'</td>'; 

                    foreach($dias as $dia){ 
                        echo '<td>'.$dia.'</td>'; 
                    } 

                    echo '</tr>'; 

                    // Filas del horario
                    foreach($horario as $horas => $hora){ 
                        echo '<tr>'; 
                        echo '<td>'.$tiempo[$horas].'</td>'; 
 
                        foreach($hora as $dia => $asignatura){ 
                            if($asignatura == ""){ 
                                echo '<td></td>'; 
                            }else{ 
                                echo '<td style="background-color: '.$colores[$asignatura].';">'.$asignatura.'</td>'; 
                            } 
                        } 

                        echo '</tr>'; 
                    } 
                    ?> 
                </table> 
            </section> 
            <section class="informacion"> 
                <h2>Profesores</h2> 
                <ul> 
                    <li>ARL — Álvarez Recio, Luis Miguel</li> 
                    <li>GTE — González Trives, Ernesto</li> 
                    <li>VAS — Vázquez Aguilar, Santiago</li> 
                    <li>DLA — Domínguez Lebrato, Alberto</li> 
                    <li>MDI — Muñoz Domínguez, Isabel</li> 
                </ul> 
            </section> 
        </main> 
        <footer> 
            <p>2DAW — 2º Desarrollo de Aplicaciones Web</p> 
        </footer> 
    </body> 
</html>