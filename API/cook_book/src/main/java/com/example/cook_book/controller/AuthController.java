package com.example.cook_book.controller;

import com.example.cook_book.payload.LoginDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("login")
    private String login(@RequestBody LoginDto login) {
        return "";
    }
    @PostMapping("signup")
    private String signup(@RequestBody LoginDto credentials) {
        return "";
    }
}
