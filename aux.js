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
    herramientas();
    var alto = $('#divComienzo').css('height');
    $('#minimizar').click(function(){
        if ($('#divComienzo').css('height') != '32px') {
            $('#divComienzo').css('height', '32px');
            $('#divComienzo .container').remove();
        }else {
            $('#divComienzo').css('height', `${alto}`);
            herramientas();
        }
    });
    // consejos(); Lo comento para ahorrar tiempo en desarrollo
    // coordRaton();
    botonCambioVista();
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

// function coordRaton()
// {
//     var cuerpo = $(window);
//     var output = $(`<div id="output" style="position:absolute; padding:5px;"></div>`);
//     $(document.body).append(output);
//     cuerpo.mousemove(function(evt) {
//       var mousePos = oMousePos(cuerpo, evt);
//       marcarCoords(output,mousePos.x, mousePos.y)
//     });
// }
//
// function marcarCoords(output, x, y) {
//   output.innerHTML = ("x: " + x + ", y: " + y);
//   output.style.top = (y + 10) + "px";
//   output.style.left = (x + 10) + "px";
//   output.style.backgroundColor = "#FFF";
//   output.style.border = "1px solid #d9d9d9"
//   canvas.style.cursor = "pointer";
// }
//
// function oMousePos(cuerpo, evt) {
//   var ClientRect = cuerpo.getBoundingClientRect();
//   return { //objeto
//     x: Math.round(evt.clientX - ClientRect.left),
//     y: Math.round(evt.clientY - ClientRect.top)
//   }
// }

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
                            <div class='row'>
                                <button class='col-xs-9'>Tabla</button>
                            </div>
                            `);
    botones();
}

function botones()
{
    $(':button').click(function(){
        switch ($(this)[0].innerHTML) {
            case 'Titulo':
                if ($('.divTitulo').length == 0) {
                    boton('Titulo');
                    cuerpoTitulo();
                    break;
                }
                break;
            case 'Encabezado':
                boton('Encabezado');
                cuerpoEncabezado();
                break;
            case 'Pie Página':
                boton('Pie Página');
                cuerpoPie();
                break;
            case 'Formulario':
                if ($('.divFormulario').length == 0) {
                    boton('Formulario');
                    cuerpoFormulario();
                    break;
                }
                break;
            case 'Div':
                if ($('.divDiv').length == 0) {
                    boton('Div');
                    cuerpoDiv();
                    break;
                }
                break;
            case 'Inputs':
                if ($('.divInputs').length == 0) {
                    boton('Inputs');
                    cuerpoInputs();
                    break;
                }
                break;
            case 'Imagen':
                if ($('.divImagen').length == 0) {
                    boton('Imagen');
                    cuerpoImagen();
                    break;
                }
                break;
            case 'Enlace':
                if ($('.divEnlace').length == 0) {
                    boton('Enlace');
                    cuerpoEnlace();
                    break;
                }
                break;
            case 'Tabla':
                if ($('.divTabla').length == 0) {
                    boton('Tabla');
                    cuerpoTabla();
                    break;
                }
                break;
        }
    });

}

function botonCambioVista()
{
    if ($(document.body)[0].children.length == 2) {
        var cuerpo = $(`<a id="vistaPreliminar" href='vista.html' class='btn btn-primary'>
        Vista Preliminar
        </a>`);
        $('#divComienzo').before(cuerpo);
    }
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
                    <input type="text" id="textoTitulo" style="margin-left:15px"/><br><br>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);
    div.append(cuerpo);
    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('button:contains("Confirmar")').click(function(){
        var sele = $(':selected').text();
        var text = $('#textoTitulo').val();
        var h = $(`<${sele}>${text}</${sele}>`);
        $(document.body).append(h);
        h.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function cuerpoDiv()
{
    var div = $(`.divDiv`);
    var cuerpo = $(`<span>Escoga su ancho(en px):<input type='text' name='ancho'></input></span><br/>
                    <span>Escoga su altura(en px):<input type='text' name='alto'></input></span><br/>
                    <span>Borde: </span><input type='checkbox' id='checkDiv'/><br/>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);
    div.append(cuerpo);
    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('#checkDiv').change(function(){
        if ($(this).prop('checked')) {
            var opciones = $(`<span><br>Tamaño del borde:
                        <select>
                            <option>1px</option>
                            <option>2px</option>
                            <option>3px</option>
                            <option>4px</option>
                            <option>5px</option>
                            <option>10px</option>
                            <option>15px</option>
                            <option>20px</option>
                        </select>
                    </span>`);
            $('#checkDiv').after(opciones);
        }else {
            $(this).next().remove();
        }
    });

    $('button:contains("Confirmar")').click(function(){
        var ancho = $(':text[name="ancho"]').val();
        var altura = $(':text[name="alto"]').val();
        if ($('#checkDiv').prop('checked')) {
            var tam = $(':selected').text();
            var div = $(`<div style='border:solid ${tam};width:${ancho};height:${altura};
                position:absolute'></div>`);
        }else {
            var div = $(`<div style="width:${ancho};height:${altura}
                        ; position:absolute"></div>`);
        }
        $(document.body).append(div);
        div.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function cuerpoInputs()
{
    var div = $(`.divInputs`);
    var cuerpo = $(`<span><br>Seleccione tipo:
                <select>
                    <option>text</option>
                    <option>button</option>
                    <option>password</option>
                    <option>submit</option>
                    <option>reset</option>
                    <option>checkbox</option>
                </select>
            </span><br>
            <span>Label:</span>
            <input type="text" id="textoInput" style="margin-left:15px"/><br><br>
            <button style="margin-left: 50px">Confirmar</button>
            <button>Cancelar</button>`);
    div.append(cuerpo);

    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('button:contains("Confirmar")').click(function(){
        var sele = $(':selected').text();
        var text = $('#textoInput').val();
        var input = $(`<span>${text}<input type='${sele}'></input></span>`);
        $(document.body).append(input);
        input.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function cuerpoEncabezado()
{
    $(`.divEncabezado`).remove();
    var cuerpo = $(`<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>`);
    if ($('nav').length > 0) {
        alert('No se puede crear, ya existe un encabezado!');
    }else if ($(document.body)[0].children.length != 1) {
        $('#divComienzo').prev().before(cuerpo);
        botonCambioVista();
    }else{
        $('#divComienzo').before(cuerpo);
        botonCambioVista();
    }
}

function cuerpoPie()
{
    $(`.divPie`).remove();
    var cuerpo = $(`<footer class="footer">
		<div class="container-fluid">
			<p>Place sticky footer content here.</p>
		</div>
	</footer>`);
    if ($('footer').length > 0) {
        alert('No se puede crear, ya existe un pie de página!');
    }else {
        $('#divComienzo').after(cuerpo);
        botonCambioVista();
    }
}

function cuerpoTabla()
{
    var div = $(`.divTabla`);
    var cuerpo = $(`<span>Escoga sus filas:<input type='number' name='filas'></input></span><br/>
                    <span>Escoga sus columnas:<input type='number' name='columnas'></input></span><br/>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);

    $(div).append(cuerpo);

    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('button:contains("Confirmar")').click(function(){
        var filas = $('input[name="filas"]').val();
        var columnas = $('input[name="columnas"]').val();
        var tabla = `<table border='1'><tbody>`;
        for (var i = 0; i < filas; i++) {
            tabla = tabla +`<tr>`;
            for (var j = 0; j < columnas; j++) {
                tabla = tabla + `<th> Col:${j}, Fila:${i}</th>`;
            }
            tabla = tabla + `</tr>`;
        }
        tabla = tabla + `</tbody></table>`;
        var tablaJ = $(tabla);

        $(document.body).append(tablaJ);
        tablaJ.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function cuerpoEnlace()
{
    var div = $(`.divEnlace`);
    var cuerpo = $(`<span>Introduzca su url:<input type='text' name='url'></input></span>
                    <span>(http://www.google.es)</span><br>
                    <span>Escoga el nombre del enlace:<input type='text' name='nombre'></input></span><br/>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);

    $(div).append(cuerpo);

    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('button:contains("Confirmar")').click(function(){
        var url = $('input[name="url"]').val();
        var nombre = $('input[name="nombre"]').val();
        var a = $(`<a href='${url}'>${nombre}<a>`);

        $(document.body).append(a);
        a.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function cuerpoImagen()
{
    var div = $(`.divImagen`);
    var cuerpo = $(`<span>Introduzca su url de la imagen:<input type='text' name='url'></input></span><br>
                    <span>Ancho:<input type="range" name="ancho" min="10" max="999" onchange='calcula()'></span><br>
                    <div name='pAncho'></div>
                    <span>Alto:<input type="range" name="alto" min="10" max="999" onchange='calcula()'></span><br>
                    <div name='pAlto'></div>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);

    $(div).append(cuerpo);

    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();

    });
    $('button:contains("Confirmar")').click(function(){
        var url = $('input[name="url"]').val();
        var ancho = $('input[name="ancho"]').val();
        var alto = $('input[name="alto"]').val();
        var img = $(`<img src='imagenes/${url}' height='${alto}px' width='${ancho}px'><a>`);

        $(document.body).append(img);
        img.draggable();
        $(this).parent().remove();
        botonCambioVista();
    });
}

function calcula()
{
    $('p[name="x"]').remove();
    var ancho = $('input[name="ancho"]').val();
    var alto = $('input[name="alto"]').val();
    $('div[name="pAncho"]').append(`<p name='x'>${ancho}px</p>`);
    $('div[name="pAlto"]').append(`<p name='x'>${alto}px</p>`);

}

function cuerpoFormulario()
{
    var div = $(`.divFormulario`);
    var cuerpo = $(`<span>Introduzca un titulo:<input type='text' name='titulo'></input></span><br><br>
                    <center><span><table border=1>
                    <thead> <tr><td>Nombre</td><td>Tipo</td></tr></thead>
                    <tbody id='inputs'>
                    <tr><td><input type='text' name='nombre'></td><td><input type='text' name='tipo'></td></tr>
                    <tr><td><input type='text' name='nombre'></td><td><input type='text' name='tipo'></td></tr>
                    </tbody>
                    </table></span></center>
                    <button type="button" class="btn-xs btn-default" onclick="insertarFila()">
                      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button><br>
                    <p>Tipos: 'text', 'button', 'checkbox', 'password', 'number' </p><br>
                    <button style="margin-left: 50px">Confirmar</button>
                    <button>Cancelar</button>`);

    $(div).append(cuerpo);

    $('button:contains("Cancelar")').click(function(){
        $(this).parent().remove();
    });

    $('button:contains("Confirmar")').click(function(){
        var form = `<div style='border: solid 1px' class='formulario'><form>`;
        $('#inputs tr td input').each(function(i){
            // if ($(this).attr('name') == 'tipo' && $(this).val() != '') {
            //     console.log($(this).parent().next());
                // form = form + `${$(this).val()}<input type='${$(this).val()}'></br></br>`;
            // }
        });
        form = form + `<input type='submit' value='Enviar'><input type='reset' value='Reestablecer'></form></div>`;
        $(document.body).append(form);
        $('.formulario').draggable();
        $(this).parent().remove();
    });
}

function insertarFila()
{
    $('tbody').append("<tr><td><input type='text'name='nombre'></td><td><input type='text'name='tipo'></td></tr>");
    $('.divFormulario').css('height','auto');
}
