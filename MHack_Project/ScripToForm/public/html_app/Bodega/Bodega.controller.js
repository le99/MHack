$(document).ready(function(){
 $.ajaxSetup({ cache: false ,headers: {
     'Cache-Control': 'no-cache'
  }});
  
  listarCombo = function () {
  }
  
  //Metodo pintar
  listar = function(){
        $.getJSON("http://localhost:9000/api/Bodega/", function(data){
           
             var html ="<table class='table'><thead>" ;
             html+="<tr>";
 
                html+= "<th>id</th>"; 
 
                html+= "<th>nombre</th>"; 
             html+="<th></th></tr>"
             html+="</thead>";
            
            for(i=0 ; i< data.length ;i++  ) {
               html += "<tr>";
                   html += "<td>"+data[i].id+"</td>";
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
			 nombre: $("#nombre").val(),
		 }
		 );
	    //alert (" responde crear ")
		$.ajax({url: "http://localhost:9000/api/Bodega/",
		contentType:'application/json',
		data:valores,
		type:'POST',success: function(result){
		$("#id").val('');
		$("#nombre").val('');
		   listar() ;
		}});
        
    }; 
  
    borrar = function(id)
    {
      if(confirm("Esta seguro de eliminar la bodega id "+id))
      {
        // invoco rest creacion bodega  :
          $.ajax({url: "http://localhost:9000/api/Bodega/"+id,
          contentType:'application/json',
          type:'DELETE',success: function(result){
           listar() ;
          }});
      }

    };
    
    setEditar = function (id)
    {
        $.getJSON("http://localhost:9000/api/Bodega/"+id, function(data){ 
 
          $("#id").val(data.id);
 
          $("#nombre").val(data.nombre);
           $("#btnCrear").attr('disabled','disabled'); 
           $("#btnEditar").removeAttr('disabled'); 
		});
    };
    
    editar = function ()
    {
        var valores = ""; 
        valores = JSON.stringify(
		 {
			 id: $("#id").val(),
			 nombre: $("#nombre").val(),
		 }
		 );
		 $.ajax({url: "http://localhost:9000/api/Bodega/"+$("#id").val(),
               contentType:'application/json',
               data:valores,
               type:'PUT',success: function(result){
				$("#id").val('');
				$("#nombre").val('');
				 $("#btnCrear").removeAttr('disabled'); 
				 $("#btnEditar").attr('disabled','disabled'); 
                listar() ;
               }});
    }
  listar();
  listarCombo ();
  //alert ("responde");
});