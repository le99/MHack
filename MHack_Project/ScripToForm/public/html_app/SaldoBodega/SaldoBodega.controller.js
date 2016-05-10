$(document).ready(function(){
 $.ajaxSetup({ cache: false ,headers: {
     'Cache-Control': 'no-cache'
  }});
  
  //Metodo pintar
  listar = function(){
        $.getJSON("http://localhost:9000/api/SaldoBodega/", function(data){
           
             var html ="<table class='table'><thead>" ;
             html+="<tr>";
 
                html+= "<th>id</th>"; 
 
                html+= "<th>cantidad</th>"; 
 
                html+= "<th>idProducto</th>"; 
 
                html+= "<th>idBodega</th>"; 
             html+="<th></th></tr>"
             html+="</thead>";
            
            for(i=0 ; i< data.length ;i++  ) {
               html += "<tr>";
                   html += "<td>"+data[i].id+"</td>";
                   html += "<td>"+data[i].cantidad+"</td>";
                   html += "<td>"+data[i].idProducto+"</td>";
                   html += "<td>"+data[i].idBodega+"</td>";
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
			 cantidad: $("#cantidad").val(),
			 idProducto: $("#idProducto").val(),
			 idBodega: $("#idBodega").val(),
		 }
		 );
	    //alert (" responde crear ")
		$.ajax({url: "http://localhost:9000/api/SaldoBodega/",
		contentType:'application/json',
		data:valores,
		type:'POST',success: function(result){
		$("#id").val('');
		$("#cantidad").val('');
		$("#idProducto").val('');
		$("#idBodega").val('');
		   listar() ;
		}});
        
    }; 
  
    borrar = function(id)
    {
      if(confirm("Esta seguro de eliminar la bodega id "+id))
      {
        // invoco rest creacion bodega  :
          $.ajax({url: "http://localhost:9000/api/SaldoBodega/"+id,
          contentType:'application/json',
          type:'DELETE',success: function(result){
           listar() ;
          }});
      }

    };
    
    setEditar = function (id)
    {
        $.getJSON("http://localhost:9000/api/SaldoBodega/"+id, function(data){ 
 
          $("#id").val(data.id);
 
          $("#cantidad").val(data.cantidad);
 
          $("#idProducto").val(data.idProducto);
 
          $("#idBodega").val(data.idBodega);
       
		});
    };
    
    editar = function ()
    {
        var valores = ""; 
        valores = JSON.stringify(
		 {
			 id: $("#id").val(),
			 cantidad: $("#cantidad").val(),
			 idProducto: $("#idProducto").val(),
			 idBodega: $("#idBodega").val(),
		 }
		 );
		 $.ajax({url: "http://localhost:9000/api/SaldoBodega/"+$("#id").val(),
               contentType:'application/json',
               data:valores,
               type:'PUT',success: function(result){
				$("#id").val('');
				$("#cantidad").val('');
				$("#idProducto").val('');
				$("#idBodega").val('');
                listar() ;
               }});
		alert ("editar !!! ");
    }
  listar();
  //alert ("responde");
});