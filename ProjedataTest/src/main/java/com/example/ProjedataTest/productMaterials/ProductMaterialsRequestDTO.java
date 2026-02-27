package com.example.ProjedataTest.productMaterials;

import jakarta.validation.constraints.NotNull;

public record ProductMaterialsRequestDTO(Long id,
                                         @NotNull Long productID,
                                         @NotNull Long rawMaterialID,
                                         @NotNull Integer quantity) {
}
