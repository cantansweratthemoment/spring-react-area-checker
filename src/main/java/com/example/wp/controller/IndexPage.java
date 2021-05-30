package com.example.wp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexPage {

    @GetMapping({"/", ""})
    public String main(){
        return "forward:/index.html";
    }

}
