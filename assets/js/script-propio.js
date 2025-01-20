// función ajax
$.ajax({
    url: './assets/js/texto.txt',
    type: 'get',
    dataType: 'txt',
    success: function(respuesta){
        document.write(respuesta)
    },
    error: function(){
        document.write(error)
    }
});