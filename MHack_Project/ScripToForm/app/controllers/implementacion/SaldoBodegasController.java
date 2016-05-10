package controllers.implementacion;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.contratos.ISaldoBodega;
import models.SaldoBodega;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class SaldoBodegasController extends Controller {
    private static ISaldoBodega saldoBodegas = new SaldoBodegas();

    @Transactional
    public Result getSaldoBodegas(){
        return ok(Json.toJson(saldoBodegas.getSaldoBodegas()));
    }

    @Transactional
    public Result getSaldoBodegaById(Long id){
        return ok(Json.toJson(saldoBodegas.getSaldoBodegaById(id)));
    }
    @Transactional
    public Result getSaldoBodegasByIdProducto(Long idProducto){
        return ok(Json.toJson(saldoBodegas.getSaldoBodegasByIdProducto(idProducto)));
    }
    @Transactional
    public Result getSaldoBodegasByIdBodega(Long idBodega){
        return ok(Json.toJson(saldoBodegas.getSaldoBodegasByIdBodega(idBodega)));
    }
    

    @Transactional
    public Result save(){
        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en saldoBodegas\"}");
        SaldoBodega saldoBodega = Json.fromJson(json,SaldoBodega.class);
        if(saldoBodega!=null){
            saldoBodega= saldoBodegas.save(saldoBodega);
            respuesta=Json.toJson(saldoBodega);
        }
        return ok(Json.toJson(respuesta));
    
    }

    @Transactional
    public Result update(Long id){
        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en saldoBodegas\"}");
        SaldoBodega saldoBodega = Json.fromJson(json,SaldoBodega.class);
        saldoBodega.setId(id);
        if(saldoBodega!=null){
            saldoBodega= saldoBodegas.update(saldoBodega);
            respuesta=Json.toJson(saldoBodega);
        }
        return ok(respuesta);
    
    }

    @Transactional
    public Result  delete(Long id){
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en saldoBodegas\"}");
        SaldoBodega saldoBodega= saldoBodegas.delete(id);
        if(saldoBodega!=null){
            respuesta=Json.toJson(saldoBodega);
        }
        return ok(respuesta);
    
    }
    



}