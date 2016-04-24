package controllers.implementacion;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.contratos.IBodega;
import models.Bodega;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by JoséLuis on 03/04/2016.
 */
public class BodegasController extends Controller {
    private static IBodega bodegas = new Bodegas();

    @Transactional
    public Result getBodegas() {
        return ok(Json.toJson(bodegas.getBodegas()));
    }
    @Transactional
    public Result getBodegaById(Long id) {
        return ok(Json.toJson(bodegas.getBodegaById(id)));
    }

    @Transactional
    public Result save() {

        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en bodegas\"}");
        Bodega bodega = Json.fromJson(json,Bodega.class);
        if(bodega!=null){
            bodega= bodegas.save(bodega);
            respuesta=Json.toJson(bodega);
        }
        return ok(Json.toJson(respuesta));
    }

    @Transactional
    public Result update(Long id) {

        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en bodegas\"}");
        Bodega bodega = Json.fromJson(json,Bodega.class);
        bodega.setId(id);
        if(bodega!=null){
            bodega= bodegas.update(bodega);
            respuesta=Json.toJson(bodega);
        }
        return ok(Json.toJson(respuesta));
    }

    @Transactional
    public Result delete(Long id) {

        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en bodegas\"}");
        Bodega bodega= bodegas.delete(id);
        if(bodega!=null){
            respuesta=Json.toJson(bodega);
        }
        return ok(respuesta);
    }


}
