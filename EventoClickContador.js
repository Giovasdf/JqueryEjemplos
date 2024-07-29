//id = ejemplo

// $(function(){
        
//     }
// );

$(document).ready(
    function(){

        function formatDate(date) {
            return (date.getHours() < 10 ? '0' : '') +
           date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') +
           date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '')
           + date.getSeconds() + '.' + (date.getMilliseconds() < 10 ?
           '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
           date.getMilliseconds();
           };


        let contador = 0;
        $("#ejemplo").on("click",function(){
            //contador = contador + 1
            contador ++;
            // console.log(formatDate(new Date())+" "+"---> Click: "+contador);
            console.log(formatDate(new Date()));

        })
    }
);