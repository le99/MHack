$(document).ready(function(){
 $.ajaxSetup({ cache: false ,headers: {
     'Cache-Control': 'no-cache'
  }});
  
  //Metodo pintar
  listar = function(){
        $.getJSON("http://localhost:9000/api/Producto/", function(data){
           
             var html ="<table class='table'><thead>" ;
             html+="<tr>";
 
                html+= "<th>id</th>"; 
 
                html+= "<th>descripcion</th>"; 
 
                html+= "<th>nombre</th>"; 
             html+="<th></th></tr>"
             html+="</thead>";
            
            for(i=0 ; i< data.length ;i++  ) {
               html += "<tr>";
                   html += "<td>"+data[i].id+"</td>";
                   html += "<td>"+data[i].descripcion+"</td>";
                   html += "<td>"+data[i].nombre+"</td>";
                html += "<td><div class='btn-group'><button class='btn btn-primary' data-toggle='modal' data-target='#editarBodega' onclick=\"setEditar("+data[i].id+")\"><span class='glyphicon glyphicon-edit'></span></button>";
                html += "<button class='btn btn-danger' onclick='borrar("+data[i].id+")'><span class='glyphicon glyphicon-remove'></span></button>";
                html += "</div></td></tr>"; 
            }
			if(data.length === 0)
			{
			  html+= "<tr><td> No existen datos !!!</td>";
			}
			html+= "</tbody></table>";
			$("#datos").html(html);
        });
    };
  
    crear = function()
    {
	    
	    var valores = ""; 
		valores = JSON.stringify(
		 {
			 id: $("#id").val(),
			 descripcion: $("#descripcion").val(),
			 nombre: $("#nombre").val(),
		 }
		 );
	    //alert (" responde crear ")
		$.ajax({url: "http://localhost:9000/api/Producto/",
		contentType:'application/json',
		data:valores,
		type:'POST',success: function(result){
		$("#id").val('');
		$("#descripcion").val('');
		$("#nombre").val('');
		   listar() ;
		}});
        
    }; 
  
    borrar = function(id)
    {
      if(confirm("Esta seguro de eliminar la bodega id "+id))
      {
        // invoco rest creacion bodega  :
          $.ajax({url: "http://localhost:9000/api/Producto/"+id,
          contentType:'application/json',
          type:'DELETE',success: function(result){
           listar() ;
          }});
      }

    };
    
    setEditar = function (id)
    {
        $.getJSON("http://localhost:9000/api/Producto/"+id, function(data){ 
 
          $("#id").val(data.id);
 
          $("#descripcion").val(data.descripcion);
 
          $("#nombre").val(data.nombre);
       
		});
    };
    
    editar = function ()
    {
        var valores = ""; 
        valores = JSON.stringify(
		 {
			 id: $("#id").val(),
			 descripcion: $("#descripcion").val(),
			 nombre: $("#nombre").val(),
		 }
		 );
		 $.ajax({url: "http://localhost:9000/api/Producto/"+$("#id").val(),
               contentType:'application/json',
               data:valores,
               type:'PUT',success: function(result){
				$("#id").val('');
				$("#descripcion").val('');
				$("#nombre").val('');
                listar() ;
               }});
		alert ("editar !!! ");
    }
  listar();
  //alert ("responde");
});