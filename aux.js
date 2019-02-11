function presentacion(){
    setTimeout(function(){
        var div = $(`<div id='divPresentacion' style='display: none'></div>`);
        $(div).append(`<h1 class="titulo">Bienvenido al gestor de contenido de Gallego</h1>`);
        $(div).append(`<h1 class="titulo1">Proyecto DIW</h1>`);
        $(div).append(`<button class='col-md-4 col-md-offset-4'> Comenzar </button>`);
        $(document.body).append(div);
        $(div).fadeIn(1000);
        $('button').click(function(){
            $('div').remove();
            comenzar();
        });
    }, 1);
}

function comenzar(){
    var div = $(`<div id='divComienzo'></div>`);
    $(document.body).append(div);
    div.draggable();
    div.append(`<p style='text-align:center;margin-top:5px'>Herramientas
    <span id='minimizar' class="glyphicon glyphicon-minus" aria-hidden="true"></span>
    </p>`);
    var alto = $('div').css('height');
    $('#minimizar').click(function(){
        if ($('div').css('height') != '32px') {
            $('div').css('height', '32px');
        }else {
            $('div').css('height', `${alto}`);
        }
    });

}
