package controllers.contratos;

import models.SaldoBodega;

import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public interface ISaldoBodega {


    public List<SaldoBodega> getSaldoBodegas();
    public SaldoBodega getSaldoBodegaById(long id);

    public List<SaldoBodega> getSaldoBodegasByBodegaId(long bodegaId);
    public List<SaldoBodega> getSaldoBodegasByProductoId(long productoId);

    SaldoBodega save(SaldoBodega saldoBodega);
    SaldoBodega update(SaldoBodega saldoBodega);
    SaldoBodega delete(long id);


}
