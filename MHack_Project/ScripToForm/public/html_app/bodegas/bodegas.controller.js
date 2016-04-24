/**
 * Created by felix on 16/04/2016.
 */
$(document).ready(function(){
    $.ajaxSetup({ cache: false ,headers: {
     'Cache-Control': 'no-cache'
}  });
    // jQuery methods go here...
    //Metodo pinta bodegas
    listarBodega = function(){
        $.getJSON("http://localhost:9000/api/bodega/", function(data){
            console.log(data);
            var html ="<table class='table'><thead><tr> <th>id</th><th>Nombre</th> <th></th> </tr> </thead>";
            console.log("Total datos "+(data.length));
            html +="<tbody>";
            for(i=0 ; i< data.length ;i++  ) {
                html += "<tr><td><a onclick=\"consultarSaldo("+data[i].id+",'"+data[i].nombre+"')\">"+data[i].id+"</a></td><td>"+data[i].nombre+"</td>";
                html += "<td><div class='btn-group'><button class='btn btn-primary' data-toggle='modal' data-target='#editarBodega' onclick=\"setEditar("+data[i].id+",'"+data[i].nombre+"')\"><span class='glyphicon glyphicon-edit'></span></button>";
                html += "<button class='btn btn-danger' onclick='borrarBodega("+data[i].id+")'><span class='glyphicon glyphicon-remove'></span></button>";
                html += "</div></td></tr>";
            }
            if(data.length === 0)
            {
              html+= "<tr><td> No existen datos !!!</td>";
            }
            html+= "</tbody></table>";
            //alert (" id "+data[1].id +" nombre " +  data[1].nombre) ;
            $("#datos").html(html);
        });
    };

    crearBodega = function()
    {
        // Valido Que exista el nombre :
        if (!$("#inputNombre").val())
        {
          //alert (" Debe ingresar el nombre de la bodega ");
          $("#inputNombre").focus();
        }else {
            var nombre = JSON.stringify({ nombre: $("#inputNombre").val() });
            // invoco rest creacion bodega  :
            $.ajax({url: "http://localhost:9000/api/bodega/",
              contentType:'application/json',
              data:nombre,
              type:'POST',success: function(result){
               //alert (" insercion correcta :  ");
               $('#crearBodega').modal('hide');
               $("#inputNombre").val('');
               listarBodega() ;
             }});
        }
    };

    borrarBodega = function(id)
    {
      if(confirm("Esta seguro de eliminar la bodega id "+id))
      {
        // invoco rest creacion bodega  :
          $.ajax({url: "http://localhost:9000/api/bodega/"+id,
          contentType:'application/json',
          type:'DELETE',success: function(result){
           //alert (" Se elimino correctamente ");
           listarBodega() ;
          }});
      }

    };

    editarBodega = function ()
    {
       var ajax_data =JSON.stringify({id:$("#editId").val(),nombre: $("#editNombre").val() });
       $.ajax({url: "http://localhost:9000/api/bodega/"+$("#editId").val(),
               contentType:'application/json',
               data:ajax_data,
               type:'PUT',success: function(result){
                //alert (" Edicion correcta ");
                $('#editarBodega').modal('hide');
                listarBodega() ;
               }});

    }

    setEditar = function (id,nombre)
    {
        //alert(" id "+ id);
        //alert (" Responde setEditar id  "+id+" nombre "+nombre) ;
        $("#editId").val(id);
        $("#editNombre").val(nombre);
    };

    consultarSaldo = function (idBodega,nombreBodega) {
        //alert (" idbodega "+idBodega+"  nombre "+nombreBodega) ;
        $("#inputBodegaSaldo").val(idBodega);
        $("#inputBodegaBodegaSaldo").val(idBodega);
        $("#inputBodegaSaldoNombre").val(nombreBodega);
        listarSaldoBodega(idBodega);
    };

    listarSaldoBodega = function(idBodega){
        $.getJSON("http://localhost:9000/api/bodega/"+idBodega+"/saldos/" , function(data){
            console.log(data);
            var html ="<table class='table'><thead><tr><th>id</th><th>Producto</th><th>Cantidad</th><th></th></tr></thead>";
            console.log("Total datos "+(data.length));
            html +="<tbody>";
            for(i=0 ; i< data.length ;i++  ) {
                html += "<tr><td>"+data[i].id+"</td><td>"+data[i].idProducto+"</td><td>"+data[i].cantidad+"</td>";
                html += "<td><div id='borrasaldosbtn'  class='btn-group'><button id='borrasaldos' class='btn btn-danger' onclick=\"borrarSaldos("+data[i].id+","+data[i].idBodega+")\"><span id='borrasaldospa' class='glyphicon glyphicon-remove'></span></button>";
                html += "</div></td></tr>";
            }
            if(data.length === 0)
            {
              html+= "<tr><td> No existen datos !!!</td></tr>";
            }
            html+= "</tbody></table>";
            $("#datosSaldos").html(html);
        });
    };

    borrarSaldos = function (id,idBodega) {
      if(confirm("Esta seguro de eliminar saldo id "+id))
      {
         $.ajax({url: "http://localhost:9000/api/bodega/"+idBodega+"/saldos/"+id,
          contentType:'application/json',
          type:'DELETE',success: function(result){
           //alert (" Se elimino correctamente ");
           listarSaldoBodega(idBodega);
          }});
      }
    };


    crearSaldoBodega = function()
    {
        // Valido Que exista el nombre :
        if(!$("#inputBodegaSaldo").val()){
          //alert (" Debe Seleccionar una bodega ");
          $("#inputSaldBodega").focus();
        }else if (!$("#inputProductoSaldo").val())
        {
          //alert (" Debe ingresar un producto ");
          $("#inputProductoSaldo").focus();
        }else if (!$("#inputCantidadSaldo").val())
        {
          //alert (" Debe ingresar la cantidad  ");
          $("#inputCantidadSaldo").focus();
        }else {
            var valores = JSON.stringify({cantidad: $("#inputCantidadSaldo").val(),idBodega: $("#inputBodegaSaldo").val(),idProducto : $("#inputProductoSaldo").val() });

            // invoco rest creacion bodega  :
            $.ajax({url: "http://localhost:9000/api/saldo/",
              contentType:'application/json',
              data:valores,
              type:'POST',success: function(result){
               //alert (" insercion correcta :  ");
               $('#crearSaldo').modal('hide');
               listarSaldoBodega($("#inputBodegaSaldo").val());
             }});
        }
    };

    listarBodega() ;
});
