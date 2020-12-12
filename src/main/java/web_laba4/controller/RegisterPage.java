package com.example.wp.controller;

import com.example.wp.form.UserCredentials;
import com.example.wp.form.validator.UserCredentialsRegisterValidator;
import com.example.wp.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class RegisterPage {
    private final UserCredentialsRegisterValidator userCredentialsRegisterValidator;
    private final UserService userService;

    public RegisterPage(UserCredentialsRegisterValidator userCredentialsRegisterValidator, UserService userService) {
        this.userCredentialsRegisterValidator = userCredentialsRegisterValidator;
        this.userService = userService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(userCredentialsRegisterValidator);
    }

    @GetMapping("/register")
    public String get(Model model){
        model.addAttribute("registerform", new UserCredentials());
        return "registerPage";
    }

    @PostMapping("/register") //все переписать на такое?
    public ResponseEntity post(@Valid @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("bad response");
        }
        userService.register(credentials);

        return ResponseEntity.ok().body(credentials.getLogin());
    }
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return "registerPage";
        }
        if(userService.findByLogin(credentials.getLogin())){
            return "forward:/index.html";
        }
        return "registerPage";
    }
}
