package controllers.contratos;

import models.Bodega;

import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public interface IBodega {

    public List<Bodega> getBodegas();
    public Bodega getBodegaById(long id);

    Bodega save(Bodega bodega);
    Bodega update(Bodega bodega);
    Bodega delete(long id);

}
