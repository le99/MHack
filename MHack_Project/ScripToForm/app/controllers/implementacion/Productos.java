package controllers.implementacion;

import controllers.contratos.IProducto;
import models.Producto;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public class Productos implements IProducto {
    @Override
    public List<Producto> getProductos() {
        return JPA.em().createNamedQuery("Producto.findAll", Producto.class ).getResultList();
    }

    @Override
    public Producto getProductoById(long id) {
        return JPA.em().createNamedQuery("Producto.findById", Producto.class ).setParameter("id",id).getSingleResult();
    }

    @Transactional
    public Producto save(Producto producto) {
        EntityManager em = JPA.em();
        Producto productoTmp = new Producto();
        productoTmp.setNombre(producto.getNombre());
        productoTmp.setDescripcion(producto.getDescripcion());
        em.persist(productoTmp);

        return productoTmp;
    }

    @Transactional
    public Producto update(Producto producto) {
        EntityManager em = JPA.em();
        Producto productoTmp;
        productoTmp = em.find(Producto.class, producto.getId());
        if(productoTmp == null){
            //No existe
            return null;
        }
        productoTmp.setNombre(producto.getNombre());
        productoTmp.setDescripcion(producto.getDescripcion());
        productoTmp = em.merge(productoTmp);

        return productoTmp;
    }

    @Transactional
    public Producto delete(long id) {
        EntityManager em = JPA.em();
        Producto productoTmp =  em.find(Producto.class, id);
        if(productoTmp!=null) {
            em.remove(productoTmp);
        }
        return productoTmp;
    }
}
