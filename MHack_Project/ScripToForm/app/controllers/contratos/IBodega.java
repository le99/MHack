package controllers.contratos;

import models.Bodega;

import java.util.List;

public interface IBodega {


    public List<Bodega> getBodegas();
    public Bodega getBodegaById(Long id);
    

    Bodega save(Bodega bodega);
    Bodega update(Bodega bodega);
    Bodega delete(Long id);
    


}

