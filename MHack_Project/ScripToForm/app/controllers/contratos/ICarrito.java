package controllers.contratos;

import models.Carrito;

import java.util.List;

/**
 * Created by JoséLuis on 19/03/2016.
 */
public interface ICarrito {

    public List<Carrito> getCarritos();

    Carrito save(Carrito carrito);
    Carrito delete(Carrito carrito);

}
