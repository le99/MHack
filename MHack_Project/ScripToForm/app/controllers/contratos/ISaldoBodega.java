package controllers.contratos;

import models.SaldoBodega;

import java.util.List;

public interface ISaldoBodega {


    public List<SaldoBodega> getSaldoBodegas();
    public SaldoBodega getSaldoBodegaById(Long id);
    public List<SaldoBodega> getSaldoBodegasByIdProducto(Long idProducto);
    public List<SaldoBodega> getSaldoBodegasByIdBodega(Long idBodega);
    

    SaldoBodega save(SaldoBodega saldoBodega);
    SaldoBodega update(SaldoBodega saldoBodega);
    SaldoBodega delete(Long id);
    


}

