package com.example.ProjedataTest.productMaterials;

public record ProductMaterialsResponseDTO(Long id, Long productID, Long rawMaterialID, Integer quantity) {

    public ProductMaterialsResponseDTO(ProductMaterials productMaterials){
        this(productMaterials.getId(), productMaterials.getProductID(), productMaterials.getRawMaterialID(), productMaterials.getQuantity());
    }
}
