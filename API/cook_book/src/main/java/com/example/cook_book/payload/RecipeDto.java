package com.example.cook_book.payload;

import com.example.cook_book.entity.Ingredient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDto {


    private Long id;

    private String name;
    private String prepTime;
    private String description;

    private Set<Ingredient> ingredients;
}
