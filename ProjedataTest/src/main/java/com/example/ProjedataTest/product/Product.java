package com.example.ProjedataTest.product;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "product")
@Entity(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) // Normalmente eu usaria um UUID, mas já que isso aqui não vai pra produção não há necessidade.
    private Long id;
    private String name;
    private Double price;

    public Product(ProductRequestDTO data){
        this.id = data.id();
        this.name = data.name();
        this.price = data.price();
    }
}
