package models;

import javax.persistence.*;

/**
 * Created by JoséLuis on 02/04/2016.
 */
@Entity
@NamedQueries({
        @NamedQuery(name = "Producto.findAll", query = "SELECT t FROM Producto t  "),
        @NamedQuery(name = "Producto.findById", query = "SELECT t FROM Producto t where id = :id ")
})
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "productoGen")
    @SequenceGenerator(name = "productoGen",
            sequenceName = "producto_seq")
    @Column
    private long id;
    @Column
    private String nombre;
    @Column
    private String descripcion;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
