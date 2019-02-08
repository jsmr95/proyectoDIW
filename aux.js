function presentacion(){
    setTimeout(function(){
        var div = $(`<div id='divComienzo' style='display: none'></div>`);
        $(div).append(`<h1 class="titulo">Bienvenido al gestor de contenido de Gallego</h1>`);
        $(div).append(`<h1 class="titulo1">Proyecto DIW</h1>`);
        $(div).append(`<button> Comenzar </button>`);
        $(document.body).append(div);
        $(div).fadeIn(1000);
        $('button').click(function(){
            $('div').remove();
        });
    }, 3000);
}

function comenzar(){
    
}
