package com.example.cook_book.repository;

import com.example.cook_book.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
