package com.example.cook_book.service.impl;

import com.example.cook_book.entity.User;
import com.example.cook_book.payload.LoginDto;
import com.example.cook_book.repository.UserRepository;
import com.example.cook_book.service.AuthService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    UserRepository userRepository;
    ModelMapper mapper;
    AuthenticationManager authenticationManager;

    public AuthServiceImpl(UserRepository userRepository, ModelMapper mapper, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public String login(LoginDto login) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.getUsername(), login.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(auth);
        return "logged in successfully";
    }

    @Override
    public String signup(LoginDto credentials) {
        return null;
    }

    private User mapToEntity(LoginDto dto) {
        return mapper.map(dto, User.class);
    }
}
