package com.example.wp.service;

import com.example.wp.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean isLoginVacant(String login){
        return userRepository.countByLogin(login) == 0;
    }
}
