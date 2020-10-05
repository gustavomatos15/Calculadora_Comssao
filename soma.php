<?php
    //pega os dados do JavaScript, do FormData
    $valor1 = isset($_POST['valor1']) ? $_POST['valor1'] : '';
    $valor2 = isset($_POST['valor2']) ? $_POST['valor2'] : '';

    $resultado = $valor1 + $valor2;
    echo json_encode($resultado);
?>