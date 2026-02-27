package com.example.ProjedataTest.rawMaterial;

public record RawMaterialResponseDTO(Long id, String name, Integer quantity) {

    public RawMaterialResponseDTO(RawMaterial rawMaterial){
        this(rawMaterial.getId(), rawMaterial.getName(), rawMaterial.getQuantity());
    }
}
