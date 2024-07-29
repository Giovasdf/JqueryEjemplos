$(document).ready(
    function() {
        $("#pais").change(
            function(){
                let paisSeleccionado = $(this).children("option:selected").val();
                $(".resultado").text(paisSeleccionado);
            }
        );
    }
);