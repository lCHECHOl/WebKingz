function conexion(){
  alert("si entro a la funcion js conexion");
    $.post("../php/conexion.php", {nombre: $("#nombre").val()}, {correo: $("#correo").val()}, {telefono: $("#telefono").val()}, {mensaje: $("#mensaje").val()},
    function(datos){
        var respuesta = $.parseJSON(datos);
        debugger;
        if (respuesta.estado == "200"){
            nombre = "#nombre";
            iniciar();
            debugger;
            innerHTML ("Registro completado")
        }
        else{
            alert(respuesta.mensaje);
        }
    }).error(function(datos){

    });
}
