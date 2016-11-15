<?php
//echo $resultado->fetch_assoc(); // MYSQLI_ASSOC
$servidor = "localhost";
$usuario = "root";
$clave = "";
$basededatos = "contacto";

$conn = new mysqli($servidor, $usuario, $clave, $basededatos);
// Check connection
if ($conn->connect_error) {
    echo json_encode($array = array(
        "estado" => "411",
        "mensaje" => "Error de servidor!",
    ));
    return;
}

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

$sql = "INSERT INTO mensaje (nombre, correo, telefono, mensaje) VALUES ($nombre, $correo, $telefono, $mensaje);";
$resultado = $conn->query($sql);
echo json_encode($array = array(
    "estado" => "200",
    "mensaje" => "Enviado con exito!",
));

$conn->close();
?>
