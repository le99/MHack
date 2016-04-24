package models;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by JoséLuis on 19/03/2016.
 */
@Entity
@NamedQueries({
        @NamedQuery(name = "Carrito.findAll", query = "SELECT r FROM Carrito r  ")
})public class Carrito {
    @Id
    @Column(nullable=false)
    private Long idCarrito;
    @Column(nullable=false)
    private Long idUsuario;
    @Column(nullable=false)
    private Date fechaCreacion;
    @Column(nullable=true)
    private Date fechaActualizacion;
    /**
     * Estados soportados X:Cancelado, C:Cerrado, O:Abierto;
     */
    @Column(nullable=false)
    private String estado;
    @Column(nullable=false)
    private String medioPago;

    public Long getIdCarrito() {
        return idCarrito;
    }

    public void setIdCarrito(Long idCarrito) {
        this.idCarrito = idCarrito;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getMedioPago() {
        return medioPago;
    }

    public void setMedioPago(String medioPago) {
        this.medioPago = medioPago;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }
}
