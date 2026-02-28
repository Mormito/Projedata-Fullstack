package com.example.ProjedataTest.productMaterials;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public record ProductMaterialsRequestDTO(Long id,
                                         @PositiveOrZero @NotNull Long productID,
                                         @PositiveOrZero @NotNull Long rawMaterialID,
                                         @PositiveOrZero @NotNull Integer quantity) {
}
