package models;

import javax.persistence.*;

@Entity
@NamedQueries({
        @NamedQuery(name = "Bodega.findAll", query = "SELECT t FROM Bodega t  "),
        @NamedQuery(name = "Bodega.findById", query = "SELECT t FROM Bodega t where id = :id ")
        
})
public class Bodega {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bodegaGen")
    @SequenceGenerator(name = "bodegaGen", sequenceName = "bodega_seq")
    @Column
    private Long id;
    @Column
    private String nombre;
	
    public Long getId() { return id; }
    public void setId(Long id){this.id= id;}
	
    public String getNombre() { return nombre; }
    public void setNombre(String nombre){this.nombre= nombre;}
}

