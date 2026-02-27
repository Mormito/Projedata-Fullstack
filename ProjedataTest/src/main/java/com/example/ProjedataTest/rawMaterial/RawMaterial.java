package com.example.ProjedataTest.rawMaterial;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "raw_material")
@Entity(name = "raw_material")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class RawMaterial {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer quantity;

    public RawMaterial(RawMaterialRequestDTO data){
        this.id = data.id();
        this.name = data.name();
        this.quantity = data.quantity();
    }
}
