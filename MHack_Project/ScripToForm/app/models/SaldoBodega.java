package models;

import javax.persistence.*;

@Entity
@NamedQueries({
        @NamedQuery(name = "SaldoBodega.findAll", query = "SELECT t FROM SaldoBodega t  "),
        @NamedQuery(name = "SaldoBodega.findById", query = "SELECT t FROM SaldoBodega t where id = :id ")
        ,@NamedQuery(name = "SaldoBodega.findByIdProducto", query = "SELECT t FROM SaldoBodega t where idProducto = :idProducto ")
        ,@NamedQuery(name = "SaldoBodega.findByIdBodega", query = "SELECT t FROM SaldoBodega t where idBodega = :idBodega ")
        
})
public class SaldoBodega {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "saldoBodegaGen")
    @SequenceGenerator(name = "saldoBodegaGen", sequenceName = "saldoBodega_seq")
    @Column
    private Long id;
    @Column
    private int cantidad;
    @Column
    private Long idProducto;
    @Column
    private Long idBodega;
	
    public Long getId() { return id; }
    public void setId(Long id){this.id= id;}
	
    public int getCantidad() { return cantidad; }
    public void setCantidad(int cantidad){this.cantidad= cantidad;}
	
    public Long getIdProducto() { return idProducto; }
    public void setIdProducto(Long idProducto){this.idProducto= idProducto;}
	
    public Long getIdBodega() { return idBodega; }
    public void setIdBodega(Long idBodega){this.idBodega= idBodega;}
}

