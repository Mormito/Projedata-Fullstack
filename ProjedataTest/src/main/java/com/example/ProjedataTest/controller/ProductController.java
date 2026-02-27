package com.example.ProjedataTest.controller;

import com.example.ProjedataTest.product.Product;
import com.example.ProjedataTest.product.ProductRepository;
import com.example.ProjedataTest.product.ProductRequestDTO;
import com.example.ProjedataTest.product.ProductResponseDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ProductRepository repository;

    // POST
    @PostMapping
    public void saveProduct(@RequestBody @Valid ProductRequestDTO data){
        if (data.id() != null){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "It's not allowed sent a POST request using an id"
            );
        } else {
            Product productData = new Product(data);
            repository.save(productData);
        }
    }

    // PUT (UPDATE)
    @PutMapping
    public void updateProduct(@RequestBody @Valid ProductRequestDTO data){
        Product existingProduct = repository.findById(data.id())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "Product with id " + data.id() + " not found"
                ));

        if (data.name() != null){
            existingProduct.setName(data.name());
        }

        if (data.price() != null){
            existingProduct.setPrice(data.price());
        }

        repository.save(existingProduct);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        Product product = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        repository.delete(product);
    }

    // GET
    @GetMapping
    public List<ProductResponseDTO> getAll(){
        List<ProductResponseDTO> productList = repository.findAll().stream().map(ProductResponseDTO::new).toList();
        return productList;
    }

    // GET (BY ID)
    @GetMapping("/{id}")
    public ProductResponseDTO getProductByID(@PathVariable Long id){
        Product product = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return new ProductResponseDTO(product);
    }

}
