package com.example.wp.service;

import com.example.wp.domain.User;
import com.example.wp.form.UserCredentials;
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

    public User register(UserCredentials userCredentials){
        User user = new User();
        user.setLogin(userCredentials.getLogin());
        user.setPassword(userCredentials.getPassword());
        userRepository.save(user);
        return user;
    }

    public User findById(long id){
        return userRepository.findById(id).orElse(null);
    }

    public boolean findByLogin(String login){
        return userRepository.countByLogin(login) == 1;
    }

    public boolean findByLoginAndPassword(String login, String password){
        int i = userRepository.countUserByLoginAndPassword(login,password);
        return i == 1;
    }
}