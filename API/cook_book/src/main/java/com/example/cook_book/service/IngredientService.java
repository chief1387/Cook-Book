package com.example.cook_book.service;

import com.example.cook_book.payload.IngredientDto;

import java.util.List;

public interface IngredientService {
    IngredientDto addIngredient(IngredientDto ingredientDto) throws Exception;
    IngredientDto getIngredientById(long id);
    List<IngredientDto> getIngredients();
    String removeIngredient(long id);
}
