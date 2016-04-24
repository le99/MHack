package controllers.implementacion;

import controllers.contratos.ISaldoBodega;
import models.SaldoBodega;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public class SaldoBodegas implements ISaldoBodega {
    @Override
    public List<SaldoBodega> getSaldoBodegas() {
        return JPA.em().createNamedQuery("SaldoBodega.findAll", SaldoBodega.class ).getResultList();
    }

    @Override
    public SaldoBodega getSaldoBodegaById(long id) {
        return JPA.em().createNamedQuery("SaldoBodega.findById", SaldoBodega.class ).setParameter("id",id).getSingleResult();
    }

    @Override
    public List<SaldoBodega> getSaldoBodegasByBodegaId(long bodegaId) {
        return JPA.em().createNamedQuery("SaldoBodega.findByIdBodega", SaldoBodega.class ).setParameter("idBodega",bodegaId).getResultList();
    }

    @Override
    public List<SaldoBodega> getSaldoBodegasByProductoId(long productoId) {
        return JPA.em().createNamedQuery("SaldoBodega.findByIdProducto", SaldoBodega.class ).setParameter("idProducto",productoId).getResultList();
    }

    @Transactional
    public SaldoBodega save(SaldoBodega saldoBodega) {
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp;
        saldoBodegaTmp = new SaldoBodega();
        saldoBodegaTmp.setCantidad(saldoBodega.getCantidad());
        saldoBodegaTmp.setIdBodega(saldoBodega.getIdBodega());
        saldoBodegaTmp.setIdProducto(saldoBodega.getIdProducto());
        em.persist(saldoBodegaTmp);
        return saldoBodegaTmp;
    }

    @Transactional
    public SaldoBodega update(SaldoBodega saldoBodega) {
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp;
        saldoBodegaTmp = em.find(SaldoBodega.class, saldoBodega.getId());
        if(saldoBodegaTmp == null){
            //Bodega no existe
            return null;
        }
        saldoBodegaTmp.setCantidad(saldoBodega.getCantidad());
        saldoBodegaTmp.setIdBodega(saldoBodega.getIdBodega());
        saldoBodegaTmp.setIdProducto(saldoBodega.getIdProducto());
        saldoBodega = em.merge(saldoBodegaTmp);
        return saldoBodega;
    }

    @Transactional
    public SaldoBodega delete(long id) {
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp =  em.find(SaldoBodega.class, id);
        if(saldoBodegaTmp!=null) {
            em.remove(saldoBodegaTmp);
        }
        return saldoBodegaTmp;
    }
}
