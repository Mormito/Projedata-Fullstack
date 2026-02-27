package com.example.ProjedataTest.productMaterials;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductMaterialsRepository extends JpaRepository<ProductMaterials, Long> {}
