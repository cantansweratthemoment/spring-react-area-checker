package com.example.wp.controller;

import com.example.wp.form.UserCredentials;
import com.example.wp.form.validator.UserCredentialsRegisterValidator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class RegisterPage {
    private final UserCredentialsRegisterValidator userCredentialsRegisterValidator;

    public RegisterPage(UserCredentialsRegisterValidator userCredentialsRegisterValidator) {
        this.userCredentialsRegisterValidator = userCredentialsRegisterValidator;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(userCredentialsRegisterValidator);
    }

    @GetMapping("/register")
    public String get(Model model){
        model.addAttribute("registerform", new UserCredentials());
        return "registerpage";
    }

    @PostMapping("/register")
    public String post(@Valid @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return "registerpage";
        }
        return "registerpage";
    }
}
