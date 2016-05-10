package controllers.implementacion;

import controllers.contratos.IProducto;
import models.Producto;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

public class Productos implements IProducto {

    @Transactional
    public List<Producto> getProductos(){
        return JPA.em().createNamedQuery("Producto.findAll", Producto.class ).getResultList();
    }
    
    @Transactional
    public Producto getProductoById(Long id){
        return JPA.em().createNamedQuery("Producto.findById", Producto.class ).setParameter("id",id).getSingleResult();
    }
    

    @Transactional
    public Producto save(Producto producto){
        EntityManager em = JPA.em();
        Producto productoTmp;
        productoTmp = new Producto();
        productoTmp.setDescripcion(producto.getDescripcion());
        productoTmp.setNombre(producto.getNombre());
        em.persist(productoTmp);
        return productoTmp;
    
    }

    @Transactional
    public Producto update(Producto producto){
        EntityManager em = JPA.em();
        Producto productoTmp;
        productoTmp = em.find(Producto.class, producto.getId());
        if(productoTmp == null){
            //Bodega no existe
            return null;
        }
        productoTmp.setDescripcion(producto.getDescripcion());
        productoTmp.setNombre(producto.getNombre());
        producto = em.merge(productoTmp);
        return producto;
    
    }

    @Transactional
    public Producto delete(Long id){
        EntityManager em = JPA.em();
        Producto productoTmp =  em.find(Producto.class, id);
        if(productoTmp!=null) {
            em.remove(productoTmp);
        }
        return productoTmp;
    
    }
    


}

