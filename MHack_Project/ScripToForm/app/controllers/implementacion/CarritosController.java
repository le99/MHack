package controllers.implementacion;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import controllers.contratos.ICarrito;
import models.Carrito;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

/**
 * Created by JoséLuis on 19/03/2016.
 */
public class CarritosController extends Controller {
    private static ICarrito carritos= new Carritos();
    DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
    ObjectMapper objectMapper = new ObjectMapper();

    @Transactional
    public Result getCarritos() {
        return ok(Json.toJson(carritos.getCarritos()));
    }

    @Transactional
    public Result save() {

        objectMapper.setDateFormat(df);
        Json.setObjectMapper(objectMapper);
        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"El producto de la calificación no existe\"}");
        Carrito carrito = Json.fromJson(json,Carrito.class);
        if(carrito!=null){
            carrito= carritos.save(carrito);
            respuesta=Json.toJson(carrito);
        }
        return ok(Json.toJson(respuesta));
    }


}
