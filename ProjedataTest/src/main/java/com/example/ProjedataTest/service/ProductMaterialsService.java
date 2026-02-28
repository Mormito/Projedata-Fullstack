package com.example.ProjedataTest.service;

import com.example.ProjedataTest.product.Product;
import com.example.ProjedataTest.product.ProductRepository;
import com.example.ProjedataTest.productMaterials.ProductMaterials;
import com.example.ProjedataTest.productMaterials.ProductMaterialsRepository;
import com.example.ProjedataTest.rawMaterial.RawMaterial;
import com.example.ProjedataTest.rawMaterial.RawMaterialRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ProductMaterialsService {

    private final ProductRepository productRepository;
    private final RawMaterialRepository rawMaterialRepository;
    private final ProductMaterialsRepository productMaterialsRepository;

    public ProductMaterialsService(
            ProductRepository productRepository,
            RawMaterialRepository rawMaterialRepository,
            ProductMaterialsRepository productMaterialsRepository
    ) {
        this.productRepository = productRepository;
        this.rawMaterialRepository = rawMaterialRepository;
        this.productMaterialsRepository = productMaterialsRepository;
    }

    public record ProductMaterialsComplete(Long id, Long product_id, String product_name, Long raw_material_id, String raw_material_name, Integer quantity) {}

    public record ProductXQuantity(Long product_id, String product_name, Integer quantity) {}

    public List<ProductMaterialsComplete> detailedGetAll() {

        List<ProductMaterials> relations = productMaterialsRepository.findAll();

        Map<Long, Product> products = productRepository.findAll().stream().collect(Collectors.toMap(Product::getId, Function.identity()));

        Map<Long, RawMaterial> rawMaterials = rawMaterialRepository.findAll().stream().collect(Collectors.toMap(RawMaterial::getId, Function.identity()));

        return relations.stream().map(productMaterial -> {

            Product product = products.get(productMaterial.getProductID());
            RawMaterial rawMaterial = rawMaterials.get(productMaterial.getRawMaterialID());

            if (product == null) {
                throw new RuntimeException("Product not found");
            }

            if (rawMaterial == null) {
                throw new RuntimeException("Raw Material not found");
            }

            return new ProductMaterialsComplete(productMaterial.getId(), product.getId(), product.getName(), rawMaterial.getId(), rawMaterial.getName(), productMaterial.getQuantity());
        }).toList();
    }

    // resumo -> 3 "listas" e cruza os dados, calcula o numero de produtos gerados de acordo com cada matéria prima -> pega o menor valor
    public List<ProductXQuantity> calcGetAll() {

        List<ProductMaterials> relations = productMaterialsRepository.findAll();

        Map<Long, Product> products = productRepository.findAll()
                .stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        Map<Long, RawMaterial> rawMaterials = rawMaterialRepository.findAll()
                .stream()
                .collect(Collectors.toMap(RawMaterial::getId, Function.identity()));

        Map<Long, Integer> productStock = new HashMap<>();

        for (ProductMaterials relation : relations) {

            Long productId = relation.getProductID();
            Long rawMaterialId = relation.getRawMaterialID();

            RawMaterial material = rawMaterials.get(rawMaterialId);

            if (material == null) {
                throw new RuntimeException("Material not found");
            }

            int stock = material.getQuantity();
            int required = relation.getQuantity();

            int possible = stock / required;

            productStock.merge(productId, possible, Math::min);
        }

        List<ProductXQuantity> calcList = new ArrayList<>();

        for (Map.Entry<Long, Integer> entry : productStock.entrySet()) {

            Long productId = entry.getKey();
            Integer quantity = entry.getValue();

            Product product = products.get(productId);

            calcList.add(new ProductXQuantity(productId, product.getName(), quantity));
        }

        return calcList;
    }

}