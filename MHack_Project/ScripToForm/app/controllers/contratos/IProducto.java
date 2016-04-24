package controllers.contratos;

import models.Producto;

import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public interface IProducto {
    public List<Producto> getProductos();
    public Producto getProductoById(long id);

    Producto save(Producto producto);
    Producto update(Producto producto);
    Producto delete(long id);


}
