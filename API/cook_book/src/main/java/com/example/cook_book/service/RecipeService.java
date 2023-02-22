package com.example.cook_book.service;

import com.example.cook_book.payload.RecipeDto;

import java.util.List;

public interface RecipeService {
    RecipeDto addRecipe(RecipeDto recipeDto);
    RecipeDto getRecipeById(long id);
    List<RecipeDto> getAllRecipes();
    String removeRecipe(long id);
    RecipeDto editRecipe(RecipeDto recipeDto, long id);
}
