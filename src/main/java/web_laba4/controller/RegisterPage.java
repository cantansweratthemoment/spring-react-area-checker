package com.example.wp.controller;

import com.example.wp.form.UserCredentials;
import com.example.wp.form.validator.UserCredentialsRegisterValidator;
import com.example.wp.service.PointService;
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
import java.util.HashMap;
import java.util.Map;

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
    @PostMapping("/register")
    public ResponseEntity post(@Valid @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            Map<String, Object> resp = new HashMap<>();
            resp.put("error", bindingResult.getAllErrors());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
        }
        Map<String, Object> resp = new HashMap<>();
        resp.put("login", credentials.getLogin());
        resp.put("password", credentials.getPassword());
        userService.register(credentials);
        return ResponseEntity.ok(resp);
    }
    @PostMapping("/login")
    public ResponseEntity login(@ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            Map<String, Object> resp = new HashMap<>();
            resp.put("error", bindingResult.getAllErrors());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
        }
        if(userService.findByLoginAndPassword(credentials.getLogin(), credentials.getPassword())) {
            Map<String, Object> resp = new HashMap<>();
            resp.put("login", credentials.getLogin());
            resp.put("password", credentials.getPassword());

            return ResponseEntity.ok(resp);
        }
        return null;
    }

    @PostMapping("/getPoints")
    public ResponseEntity getPoints(){
        return  null;
    }
}
