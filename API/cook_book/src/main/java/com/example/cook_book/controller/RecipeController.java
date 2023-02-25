package com.example.cook_book.controller;

import com.example.cook_book.payload.RecipeDto;
import com.example.cook_book.service.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//  TODO create RecipeController
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    private ResponseEntity<List<RecipeDto>> getAllRecipes() {
        return ResponseEntity.ok(recipeService.getAllRecipes());
    }

    @GetMapping("/{id}")
    private ResponseEntity<RecipeDto> getRecipeById(@PathVariable long id) {
        return ResponseEntity.ok(recipeService.getRecipeById(id));
    }

    @PostMapping
    private ResponseEntity<RecipeDto> addRecipe(@RequestBody RecipeDto recipe) {
        return new ResponseEntity<>(recipeService.addRecipe(recipe), HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    private ResponseEntity<String> removeRecipe(@PathVariable long id) {
        return ResponseEntity.ok(recipeService.removeRecipe(id));
    }

    @PutMapping("{id}")
    private ResponseEntity<RecipeDto> editRecipe(@PathVariable long id, @RequestBody RecipeDto recipe) {
        return ResponseEntity.ok(recipeService.editRecipe(recipe, id));
    }
}
