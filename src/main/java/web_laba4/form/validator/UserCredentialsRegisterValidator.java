package com.example.wp.form.validator;

import com.example.wp.form.UserCredentials;
import com.example.wp.service.UserService;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserCredentialsRegisterValidator implements Validator {
    private final UserService userService;
    public UserCredentialsRegisterValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return UserCredentials.class.equals(clazz);
    }

    @Override
    public void validate(Object o, Errors errors) {
        if(!errors.hasErrors()){
            UserCredentials userCredentials = (UserCredentials) o;
            if(!userService.isLoginVacant(userCredentials.getLogin())){
                errors.rejectValue("login", "login.login-in-use", "In use");
            }
        }
    }
}
