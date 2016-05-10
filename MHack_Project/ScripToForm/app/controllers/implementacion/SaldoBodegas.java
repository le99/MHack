package controllers.implementacion;

import controllers.contratos.ISaldoBodega;
import models.SaldoBodega;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

public class SaldoBodegas implements ISaldoBodega {

    @Transactional
    public List<SaldoBodega> getSaldoBodegas(){
        return JPA.em().createNamedQuery("SaldoBodega.findAll", SaldoBodega.class ).getResultList();
    }
    
    @Transactional
    public SaldoBodega getSaldoBodegaById(Long id){
        return JPA.em().createNamedQuery("SaldoBodega.findById", SaldoBodega.class ).setParameter("id",id).getSingleResult();
    }
    @Transactional
    public List<SaldoBodega> getSaldoBodegasByIdProducto(Long idProducto){
        return JPA.em().createNamedQuery("SaldoBodega.findByIdProducto", SaldoBodega.class ).setParameter("idProducto",idProducto).getResultList();
    }
    @Transactional
    public List<SaldoBodega> getSaldoBodegasByIdBodega(Long idBodega){
        return JPA.em().createNamedQuery("SaldoBodega.findByIdBodega", SaldoBodega.class ).setParameter("idBodega",idBodega).getResultList();
    }
    

    @Transactional
    public SaldoBodega save(SaldoBodega saldoBodega){
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp;
        saldoBodegaTmp = new SaldoBodega();
        saldoBodegaTmp.setCantidad(saldoBodega.getCantidad());
        saldoBodegaTmp.setIdProducto(saldoBodega.getIdProducto());
        saldoBodegaTmp.setIdBodega(saldoBodega.getIdBodega());
        em.persist(saldoBodegaTmp);
        return saldoBodegaTmp;
    
    }

    @Transactional
    public SaldoBodega update(SaldoBodega saldoBodega){
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp;
        saldoBodegaTmp = em.find(SaldoBodega.class, saldoBodega.getId());
        if(saldoBodegaTmp == null){
            //Bodega no existe
            return null;
        }
        saldoBodegaTmp.setCantidad(saldoBodega.getCantidad());
        saldoBodegaTmp.setIdProducto(saldoBodega.getIdProducto());
        saldoBodegaTmp.setIdBodega(saldoBodega.getIdBodega());
        saldoBodega = em.merge(saldoBodegaTmp);
        return saldoBodega;
    
    }

    @Transactional
    public SaldoBodega delete(Long id){
        EntityManager em = JPA.em();
        SaldoBodega saldoBodegaTmp =  em.find(SaldoBodega.class, id);
        if(saldoBodegaTmp!=null) {
            em.remove(saldoBodegaTmp);
        }
        return saldoBodegaTmp;
    
    }
    


}

