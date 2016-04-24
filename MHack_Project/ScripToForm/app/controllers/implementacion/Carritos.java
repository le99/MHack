package controllers.implementacion;

import controllers.contratos.ICarrito;
import models.Carrito;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

/**
 * Created by JoséLuis on 19/03/2016.
 */
public class Carritos implements ICarrito {
    @Transactional
    public List<Carrito> getCarritos() {
        return JPA.em().createNamedQuery("Carrito.findAll", Carrito.class ).getResultList();
    }

    @Transactional
    public Carrito save(Carrito carrito) {
        EntityManager em = JPA.em();
        Carrito carritoTmp;
        carritoTmp = em.find(Carrito.class, carrito.getIdCarrito());
        if(carritoTmp == null){
            carrito.setEstado("A");
            carrito.setFechaCreacion(new Date(System.currentTimeMillis()));
            em.persist(carrito);
        }else{
            carritoTmp.setEstado(carrito.getEstado());
            carritoTmp.setFechaActualizacion(new Date(System.currentTimeMillis()));
            carrito = em.merge(carritoTmp);
        }

        return carrito;
    }

    @Override
    public Carrito delete(Carrito carrito) {
        EntityManager em = JPA.em();
        Carrito carritoTmp = new Carrito();
        carritoTmp.setIdCarrito(carrito.getIdCarrito());
        carritoTmp = em.find(Carrito.class, carritoTmp);
        if(carritoTmp!=null) {
            em.remove(carritoTmp);
        }
        return carritoTmp;
    }
}
