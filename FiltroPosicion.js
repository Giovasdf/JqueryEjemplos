$(document).ready(
    function() {
        //Selección de celdas con indice mayor a 5
        //Luego de la selección se cambia el color de fondo a Azul
        $("td:gt(5)").css("backgroundColor", "blue");
        //less than = menor que (indice)
        $("td:lt(3)").css("backgroundColor", "yellow");

        //Cambiar el color del texto de la primera fila a rojo
        $("tr:first").css("color","red");

        $("td:eq(5)").css("color", "red");

    }
);