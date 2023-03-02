package com.example.cook_book.service.impl;

import com.example.cook_book.entity.Ingredient;
import com.example.cook_book.entity.Recipe;
import com.example.cook_book.exception.ResourceNotFoundException;
import com.example.cook_book.payload.IngredientDto;
import com.example.cook_book.payload.RecipeDto;
import com.example.cook_book.repository.RecipeRepository;
import com.example.cook_book.service.RecipeService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RecipeServiceImpl implements RecipeService {
    private ModelMapper mapper;
    private RecipeRepository repository;


    public RecipeServiceImpl(ModelMapper mapper, RecipeRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public RecipeDto addRecipe(RecipeDto recipeDto) {

        repository.save(mapToEntity(recipeDto));
        return recipeDto;
    }

    @Override
    public RecipeDto getRecipeById(long id) {
        return mapToDto(repository.findById(id).orElseThrow(ResourceNotFoundException::new));
    }

    @Override
    public List<RecipeDto> getAllRecipes() {
        return repository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    @Override
    public String removeRecipe(long id) {
        if (!repository.existsById(id)) {
            return "Selected item didn't exist with an id of " + id;
        }
        repository.deleteById(id);
        return "Successfully deleted recipe with an id of " + id;
    }

    @Override
    public RecipeDto editRecipe(RecipeDto recipeDto, long id) {
        Recipe newRecipe = repository.findById(id).orElseThrow(ResourceNotFoundException::new);
        if (recipeDto.getName() != null) {
            newRecipe.setName(recipeDto.getName());
        }
        if (recipeDto.getPrepTime() != null) {
            newRecipe.setPrepTime(recipeDto.getPrepTime());
        }
        if (recipeDto.getDescription() != null) {
            newRecipe.setDescription(recipeDto.getDescription());
        }
        if (recipeDto.getIngredients() != null) {
            newRecipe.setIngredients(recipeDto.getIngredients());
        }
        repository.save(newRecipe);
        return mapToDto(newRecipe);
    }

    @Override
    public RecipeDto addIngredient(long recipeId, IngredientDto ingredient) {
        Recipe recipe = repository.findById(recipeId).orElseThrow(ResourceNotFoundException::new);
        Set<Ingredient> ingredients = recipe.getIngredients();
        ingredients.add(mapper.map(ingredient, Ingredient.class));

        repository.save(recipe);
        return mapToDto(recipe);
    }

    @Override
    public RecipeDto removeIngredient(long recipeId, long ingredientId) {
        Recipe recipe = repository.findById(recipeId).orElseThrow(ResourceNotFoundException::new);
        Set<Ingredient> ingredients = recipe.getIngredients();
        recipe.setIngredients(ingredients.stream().filter(ingredient -> ingredient.getId() != ingredientId).collect(Collectors.toSet()));

        repository.save(recipe);
        return mapToDto(recipe);
    }

    private RecipeDto mapToDto(Recipe entity) {
        return mapper.map(entity, RecipeDto.class);
    }
    private Recipe mapToEntity(RecipeDto dto) {
        return mapper.map(dto, Recipe.class);
    }
}
