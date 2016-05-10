package controllers.contratos;

import models.Producto;

import java.util.List;

public interface IProducto {


    public List<Producto> getProductos();
    public Producto getProductoById(Long id);
    

    Producto save(Producto producto);
    Producto update(Producto producto);
    Producto delete(Long id);
    


}

