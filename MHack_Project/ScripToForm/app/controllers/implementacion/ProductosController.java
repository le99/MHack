package controllers.implementacion;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.contratos.IProducto;
import models.Producto;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class ProductosController extends Controller {
    private static IProducto productos = new Productos();

    @Transactional
    public Result getProductos(){
        return ok(Json.toJson(productos.getProductos()));
    }

    @Transactional
    public Result getProductoById(Long id){
        return ok(Json.toJson(productos.getProductoById(id)));
    }
    

    @Transactional
    public Result save(){
        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en productos\"}");
        Producto producto = Json.fromJson(json,Producto.class);
        if(producto!=null){
            producto= productos.save(producto);
            respuesta=Json.toJson(producto);
        }
        return ok(Json.toJson(respuesta));
    
    }

    @Transactional
    public Result update(Long id){
        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en productos\"}");
        Producto producto = Json.fromJson(json,Producto.class);
        producto.setId(id);
        if(producto!=null){
            producto= productos.update(producto);
            respuesta=Json.toJson(producto);
        }
        return ok(respuesta);
    
    }

    @Transactional
    public Result  delete(Long id){
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en productos\"}");
        Producto producto= productos.delete(id);
        if(producto!=null){
            respuesta=Json.toJson(producto);
        }
        return ok(respuesta);
    
    }
    



}