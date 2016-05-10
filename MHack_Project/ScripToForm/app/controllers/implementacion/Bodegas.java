package controllers.implementacion;

import controllers.contratos.IBodega;
import models.Bodega;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

public class Bodegas implements IBodega {

    @Transactional
    public List<Bodega> getBodegas(){
        return JPA.em().createNamedQuery("Bodega.findAll", Bodega.class ).getResultList();
    }
    
    @Transactional
    public Bodega getBodegaById(Long id){
        return JPA.em().createNamedQuery("Bodega.findById", Bodega.class ).setParameter("id",id).getSingleResult();
    }
    

    @Transactional
    public Bodega save(Bodega bodega){
        EntityManager em = JPA.em();
        Bodega bodegaTmp;
        bodegaTmp = new Bodega();
        bodegaTmp.setNombre(bodega.getNombre());
        em.persist(bodegaTmp);
        return bodegaTmp;
    
    }

    @Transactional
    public Bodega update(Bodega bodega){
        EntityManager em = JPA.em();
        Bodega bodegaTmp;
        bodegaTmp = em.find(Bodega.class, bodega.getId());
        if(bodegaTmp == null){
            //Bodega no existe
            return null;
        }
        bodegaTmp.setNombre(bodega.getNombre());
        bodega = em.merge(bodegaTmp);
        return bodega;
    
    }

    @Transactional
    public Bodega delete(Long id){
        EntityManager em = JPA.em();
        Bodega bodegaTmp =  em.find(Bodega.class, id);
        if(bodegaTmp!=null) {
            em.remove(bodegaTmp);
        }
        return bodegaTmp;
    
    }
    


}

