package com.example.cook_book.service;

import com.example.cook_book.payload.LoginDto;

public interface AuthService {
    String login(LoginDto login);
    String signup(LoginDto credentials);
}
