package com.example.ProjedataTest.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import org.antlr.v4.runtime.misc.NotNull;

public record ProductRequestDTO(Long id,
                                @NotBlank(message = "Name cannot be empty") @NotNull String name,
                                @Positive(message = "Price must be positive") @NotNull Double price
) { }
