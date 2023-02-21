package com.example.cook_book.controller;

import com.example.cook_book.payload.IngredientDto;
import com.example.cook_book.service.IngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ingredients")
public class IngredientController {
    IngredientService ingredientService;

    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping
    private List<IngredientDto> getIngredients() {
        return ingredientService.getIngredients();
    }
    @GetMapping("{id}")
    private IngredientDto getIngredientById(@RequestParam long id) {
        return ingredientService.getIngredientById(id);
    }
    @PostMapping
    private IngredientDto addIngredient(@RequestBody IngredientDto ingredientDto) {
        return ingredientService.addIngredient(ingredientDto);
    }
    @DeleteMapping("{id}")
    private String removeIngredient(@RequestParam long id) {
        return ingredientService.removeIngredient(id);
    }
}
