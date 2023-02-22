package com.example.cook_book.service.impl;

import com.example.cook_book.entity.Recipe;
import com.example.cook_book.payload.RecipeDto;
import com.example.cook_book.service.RecipeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {
    private ModelMapper mapper;

    public RecipeServiceImpl(ModelMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public RecipeDto addRecipe(RecipeDto recipeDto) {
        return null;
    }

    @Override
    public RecipeDto getRecipeById(long id) {
        return null;
    }

    @Override
    public List<RecipeDto> getAllRecipes() {
        return null;
    }

    @Override
    public String removeRecipe(long id) {
        return null;
    }

    @Override
    public RecipeDto editRecipe(RecipeDto recipeDto, long id) {
        return null;
    }

    private RecipeDto mapToDto(Recipe entity) {
        return mapper.map(entity, RecipeDto.class);
    }
    private Recipe mapToEntity(RecipeDto dto) {
        return mapper.map(dto, Recipe.class);
    }
}
