package com.example.wp.form.validator;

import com.example.wp.form.UserCredentials;
import com.example.wp.service.UserService;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Component
public class UserCredentialsRegisterValidator implements Validator {
    private final UserService userService;
    public UserCredentialsRegisterValidator(UserService userService) {
        this.userService = userService;
    }

    @Override
    @NotNull
    @NotEmpty
    public boolean supports(Class<?> clazz) {
        return UserCredentials.class.equals(clazz);
    }

    @Override
    @NotNull
    @NotEmpty
    public void validate(Object o, Errors errors) {
        if(!errors.hasErrors()){
            UserCredentials userCredentials = (UserCredentials) o;
            if(!userService.isLoginVacant(userCredentials.getLogin())){
                errors.rejectValue("login", "login.login-in-use", "In use");
            }
        }
    }
}
