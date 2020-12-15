package com.example.wp.controller;

import com.example.wp.domain.Point;
import com.example.wp.form.UserCredentials;
import com.example.wp.form.validator.UserCredentialsRegisterValidator;
import com.example.wp.repository.UserRepository;
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
import java.util.List;
import java.util.Map;
import java.util.StringJoiner;

@Controller
public class RegisterPage {
    private final UserCredentialsRegisterValidator userCredentialsRegisterValidator;
    private final UserService userService;
    private final PointService pointService;
    private final UserRepository userRepository;

    public RegisterPage(UserCredentialsRegisterValidator userCredentialsRegisterValidator, UserService userService, PointService pointService, UserRepository userRepository) {
        this.userCredentialsRegisterValidator = userCredentialsRegisterValidator;
        this.userService = userService;
        this.pointService = pointService;
        this.userRepository = userRepository;
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
    @PostMapping("/all")
    public ResponseEntity getAll( @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("error");
        }
        List<Point> points = pointService.getAllPointsByUser(userRepository.getUserByLogin(credentials.getLogin()));
        StringJoiner joiner = new StringJoiner(",");
        for(Point point1 : points){
            StringBuilder builder = new StringBuilder();
            builder.append("{\"x\":\"");
            builder.append(String.format("%.2f",point1.getX()));
            builder.append("\", \"y\":\"");
            builder.append(String.format("%.2f",point1.getY()));
            builder.append("\", \"r\":\"");
            builder.append(String.format("%.2f",point1.getR()));
            builder.append("\", \"result\":\"");
            builder.append(point1.getResult());
            builder.append("\"}");
            joiner.add(builder.toString());
        }
        return ResponseEntity.ok("[" + joiner.toString() + "]");
    }
    @PostMapping("/register")
    public ResponseEntity post(@Valid @ModelAttribute("registerform")UserCredentials credentials, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            Map<String, Object> resp = new HashMap<>();
            resp.put("error", "Логин уже занят");
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
        if(bindingResult.hasErrors() || !userService.findByLoginAndPassword(credentials.getLogin(), userService.NoHack(credentials.getPassword()))){
            Map<String, Object> resp = new HashMap<>();
            resp.put("error", "Ошибка в авторизации");
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(resp);
        }
        if(userService.findByLoginAndPassword(credentials.getLogin(), userService.NoHack(credentials.getPassword()))) {
            Map<String, Object> resp = new HashMap<>();
            resp.put("login", credentials.getLogin());
            resp.put("password", credentials.getPassword());

            return ResponseEntity.ok(resp);
        }
        return null;
    }
}
