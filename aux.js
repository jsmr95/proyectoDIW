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
    //Creo el div de herramientas
    var div = $(`<div id='divComienzo'></div>`);
    $(document.body).append(div);
    div.draggable();
    div.append(`<p style='text-align:center;margin-top:5px'>Herramientas
    <span id='minimizar' class="glyphicon glyphicon-minus" aria-hidden="true"></span>
    </p>`);
    var alto = $('div').css('height');
    $('#minimizar').click(function(){
        if ($('#divComienzo').css('height') != '32px') {
            $('#divComienzo').css('height', '32px');
            $('#divComienzo .container').remove();
        }else {
            $('#divComienzo').css('height', `${alto}`);
            herramientas();
        }
    });
    herramientas();
    consejos();
}

function consejos()
{
    //Lo realizo con funciones callback, para que se ejecuten en serie

    var div1 = $(`<div class='consejo' style='display: none'><p>A su Izquierda
    podrás ver el panel de herramientas, donde podrás ir añadiendo, eliminando o
     modificando elementos de su página.</p></div>`);
    $(document.body).append(div1);
    $('.consejo').fadeIn(2000);

    setTimeout(function(){
        $('.consejo').fadeOut(2000,function(){
            $('.consejo').remove();
            var div1 = $(`<div class='consejo' style='display: none'><p>En la parte
            superior podrás encontrar un botón para acceder a la vista previa de la
            página (debes de haber incluido algún elemento).</p></div>`);
            $(document.body).append(div1);
            $('.consejo').fadeIn(2000);

            setTimeout(function(){
                $('.consejo').fadeOut(2000, function(){
                    $('.consejo').remove();
                    var div1 = $(`<div class='consejo' style='display: none'><p>Bienvenido!</p></div>`);
                    $(document.body).append(div1);
                    $('.consejo').fadeIn(2000);
                    setTimeout(function(){
                        $('.consejo').fadeOut(2000,function(){
                            $('.consejo').remove()

                        }) }
                        ,3000);
                })}
                ,6000);
        })}
        ,6000);
}

function herramientas()
{
    $('#divComienzo').append(`<div class='container'></div>`);
    $('.container').append(`<div class='row'>
                                <button class='col-xs-9'>Titulo</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Encabezado</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Pie Página</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Formulario</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Div</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Inputs</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Imagen</button>
                            </div>
                            <div class='row'>
                                <button class='col-xs-9'>Enlace</button>
                            </div>
                            `);
    botones();
}

function botones()
{
    $(':button').click(function(){
        switch ($(this)[0].innerHTML) {
            case 'Titulo':
                boton('Titulo');
                cuerpoTitulo();
                break;
            case 'Encabezado':
                boton('Encabezado');
                break;
            case 'Pie Página':
                boton('Pie Página');
                break;
            case 'Formulario':
                boton('Formulario');
                break;
            case 'Div':
                boton('Div');
                break;
            case 'Inputs':
                boton('Inputs');
                break;
            case 'Imagen':
                boton('Imagen');
                break;
            case 'Enlace':
                boton('Enlace');
                break;
        }
    });

}

function generarLabel(string)
{
    return $(`<p style='text-align:center;margin-top:5px'>${string} </p>`);
}

function boton(nombreDiv)
{
    var div = $(`<div class='div${nombreDiv}'></div>`);
    $(document.body).append(div);
    div.draggable();
    var p = generarLabel(`${nombreDiv}`);
    div.append(p);
}

function cuerpoTitulo()
{
    var div = $(`.divTitulo`);
    var cuerpo = $(`<span>Escoga su tamaño:</span> <select>
                        <option>h1</option>
                        <option>h2</option>
                        <option>h3</option>
                        <option>h4</option>
                        <option>h5</option>
                        <option>h6</option>
                    </select><br/><br>
                    <span>Texto:</span>
                    <input type="text" id="texto" style="margin-left:15px"/><br><br>
                    <button style="margin-left: 50px" id="confirmar">Confirmar</button>
                    <button id="cancelar">Cancelar</button>`);
    div.append(cuerpo);
    $('#cancelar').click(function(){
        $(this).parent().remove();

    });
}
