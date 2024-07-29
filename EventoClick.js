$(document).ready(
    function() {

        $("#btn").on("click",function(){

            console.log("Click en el Botón");
            //Even = Impares
            // $("li").filter(":even").css("background-color","red");
            
            //Odd = Pares
            $("li").filter(":odd").css("background-color","red");
        });




    }
);