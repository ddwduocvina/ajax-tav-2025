// función ajax
$.ajax({
    url: 'texto.txt',
    type: 'get',
    dataType: 'txt',
    success: function(respuesta){
        document.write(respuesta)
    },
    error: function(error){
        document.write(error)
    }
});
