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
    public List<IngredientDto> getIngredients() {
        return ingredientService.getIngredients();
    }
    @GetMapping("{id}")
    public IngredientDto getIngredientById(@PathVariable long id) {
        return ingredientService.getIngredientById(id);
    }
    @PostMapping
    public IngredientDto addIngredient(@RequestBody IngredientDto ingredientDto) {
        return ingredientService.addIngredient(ingredientDto);
    }
    @DeleteMapping("{id}")
    public String removeIngredient(@PathVariable long id) {
        return ingredientService.removeIngredient(id);
    }
}
