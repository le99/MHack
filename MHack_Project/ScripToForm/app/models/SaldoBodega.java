package models;

import javax.persistence.*;

/**
 * Created by JoséLuis on 02/04/2016.
 */
@Entity
@NamedQueries({
        @NamedQuery(name = "SaldoBodega.findAll", query = "SELECT t FROM SaldoBodega t  "),
        @NamedQuery(name = "SaldoBodega.findById", query = "SELECT t FROM SaldoBodega t where id = :id "),
        @NamedQuery(name = "SaldoBodega.findByIdBodega", query = "SELECT t FROM SaldoBodega t where idBodega = :idBodega "),
        @NamedQuery(name = "SaldoBodega.findByIdProducto", query = "SELECT t FROM SaldoBodega t where idProducto = :idProducto ")
})
public class SaldoBodega {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "saldoBodegaGen")
    @SequenceGenerator(name = "saldoBodegaGen",
            sequenceName = "saldoBodega_seq")
    @Column
    private long id;
    @Column
    private long idBodega;
    @Column
    private long idProducto;
    @Column
    private double cantidad;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdBodega() {
        return idBodega;
    }

    public void setIdBodega(long idBodega) {
        this.idBodega = idBodega;
    }

    public long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(long idProducto) {
        this.idProducto = idProducto;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public String toString(){
      return this.id + ", " + this.idBodega + ", " + this.idProducto + ", " + this.cantidad;
    }
}
