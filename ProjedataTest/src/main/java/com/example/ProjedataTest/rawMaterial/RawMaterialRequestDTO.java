package com.example.ProjedataTest.rawMaterial;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public record RawMaterialRequestDTO(Long id,
                                    @NotBlank(message = "Name cannot be empty") @NotNull String name,
                                    @PositiveOrZero Integer quantity
) { }
