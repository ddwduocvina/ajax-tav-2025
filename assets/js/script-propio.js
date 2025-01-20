// función ajax
$.ajax({
    url: './texto.txt',
    type: 'get',
    dataType: 'text',
    success: function(respuesta){
        document.getElementById('resultado').innerText = respuesta
    },
    error: function(){
        document.getElementById('resultado').innerText = 'No estoy logrando encontrar el documento.'
    }
});

// función get 
$.get({
    url: './gato.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('iframe').innerHTML = respuesta
        console.log(respuesta.status)
    },
    error: function(error){
        alert('Este es un error tipo ' + error.status)
        console.log(error.status)
    }
})
