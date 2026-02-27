package com.example.ProjedataTest.controller;

import com.example.ProjedataTest.rawMaterial.RawMaterial;
import com.example.ProjedataTest.rawMaterial.RawMaterialRepository;
import com.example.ProjedataTest.rawMaterial.RawMaterialRequestDTO;
import com.example.ProjedataTest.rawMaterial.RawMaterialResponseDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("raw_material")
public class RawMaterialController {
    @Autowired
    private RawMaterialRepository repository;

    // POST
    @PostMapping
    public void saveRawMaterial(@RequestBody @Valid RawMaterialRequestDTO data){
        if (data.id() != null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "It's not allowed sent a POST request using an id"
            );
        } else {
            RawMaterial rawMaterialData = new RawMaterial(data);
            repository.save(rawMaterialData);
        }
    }

    // PUT
    @PutMapping
    public void updateRawMaterial(@RequestBody @Valid RawMaterialRequestDTO data){
        RawMaterial rawMaterialData = repository.findById(data.id())
                .orElseThrow(() -> new RuntimeException("Raw material with id " + data.id() + " not found"));

        if(data.name() != null){
            rawMaterialData.setName(data.name());
        }

        if(data.quantity() != null){
            rawMaterialData.setQuantity(data.quantity());
        }
        repository.save(rawMaterialData);
    }


    // DELETE
    @DeleteMapping("/{id}")
    public void deleteRawMaterial(@PathVariable Long id){
        RawMaterial rawMaterial = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Raw material not found"));
        repository.delete(rawMaterial);
    }

    // GET
    @GetMapping
    public List<RawMaterialResponseDTO> getAll(){
        List<RawMaterialResponseDTO> rawMaterialList = repository.findAll().stream().map(RawMaterialResponseDTO::new).toList();
        return rawMaterialList;
    }

    // GET (BY ID)
    @GetMapping("/{id}")
    public RawMaterialResponseDTO getByID(@PathVariable Long id){
        RawMaterial rawMaterial = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Raw material not found"));
        return new RawMaterialResponseDTO(rawMaterial);
    }

}
