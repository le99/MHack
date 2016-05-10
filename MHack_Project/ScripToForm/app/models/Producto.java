package models;

import javax.persistence.*;

@Entity
@NamedQueries({
        @NamedQuery(name = "Producto.findAll", query = "SELECT t FROM Producto t  "),
        @NamedQuery(name = "Producto.findById", query = "SELECT t FROM Producto t where id = :id ")
        
})
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productoGen")
    @SequenceGenerator(name = "productoGen", sequenceName = "producto_seq")
    @Column
    private Long id;
    @Column
    private String descripcion;
    @Column
    private String nombre;
	
    public Long getId() { return id; }
    public void setId(Long id){this.id= id;}
	
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion){this.descripcion= descripcion;}
	
    public String getNombre() { return nombre; }
    public void setNombre(String nombre){this.nombre= nombre;}
}

