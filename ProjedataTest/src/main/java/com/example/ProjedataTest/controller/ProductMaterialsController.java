package com.example.ProjedataTest.controller;

import com.example.ProjedataTest.productMaterials.*;

import com.example.ProjedataTest.service.ProductMaterialsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("product_materials")
public class ProductMaterialsController {
    @Autowired
    private ProductMaterialsRepository repository;

    @Autowired
    private ProductMaterialsService service;

    // POST
    @PostMapping
    public void saveProductMaterial(@RequestBody @Valid ProductMaterialsRequestDTO data){
        if (data.id() != null){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "It's not allowed sent a POST request using an id"
            );
        } else {
            ProductMaterials productMaterialsData = new ProductMaterials(data);
            repository.save(productMaterialsData);
        }
    }

    // PUT (UPDATE)
    @PutMapping
    public void updateProductMaterial(@RequestBody @Valid ProductMaterialsRequestDTO data){
        ProductMaterials productMaterialsData = repository.findById(data.id())
                .orElseThrow(() -> new RuntimeException("Product | Material not found"));

        if (data.productID() != null){
            productMaterialsData.setProductID(data.productID());
        }

        if (data.rawMaterialID() != null){
            productMaterialsData.setRawMaterialID(data.productID());
        }

        if (data.quantity() != null){
            productMaterialsData.setQuantity(data.quantity());
        }
        repository.save(productMaterialsData);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteProductMaterial(@PathVariable Long id){
        ProductMaterials productMaterials = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product | Material not found"));
        repository.delete(productMaterials);
    }

    // GET
    @GetMapping
    public List<ProductMaterialsResponseDTO> getAll(){
        List<ProductMaterialsResponseDTO> productMaterialList = repository.findAll().stream().map(ProductMaterialsResponseDTO::new).toList();
        return productMaterialList;
    } // This will only return ID's (product material id, product id, material id and quantity), after this i need to create a service to get the names
    // sim, eu comento meu código pra não me perder xD

    // GET (BY ID)
    @GetMapping("/{id}")
    public ProductMaterialsResponseDTO getByID(@PathVariable Long id){
        ProductMaterials productMaterial = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product | Material not found"));
        return new ProductMaterialsResponseDTO(productMaterial);
    }

    // GET DETAILED
    @GetMapping("/detailed")
    public List<ProductMaterialsService.ProductMaterialsComplete> detailed(){
        return service.detailedGetAll();
    }

    // GET CALC
    @GetMapping("/calculate")
    public List<ProductMaterialsService.ProductXQuantity> calcGetAll(){
        return service.calcGetAll();
    }

}
