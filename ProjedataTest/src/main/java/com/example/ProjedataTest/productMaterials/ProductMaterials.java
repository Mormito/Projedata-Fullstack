package com.example.ProjedataTest.productMaterials;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "product_materials")
@Entity(name = "product_materials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class ProductMaterials {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id")
    private Long productID;
    @Column(name = "raw_material_id")
    private Long rawMaterialID;
    private Integer quantity;

    public ProductMaterials (ProductMaterialsRequestDTO data){
        this.id = data.id();
        this.productID = data.productID();
        this.rawMaterialID = data.rawMaterialID();
        this.quantity = data.quantity();
    }
}
