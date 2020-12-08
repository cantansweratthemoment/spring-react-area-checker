package com.example.wp.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class UserCredentials {
    @NotNull
    @NotEmpty
    @Pattern(regexp = "[a-z]+", message = "Wrong login")
    private String login;
    @NotEmpty
    @NotNull
    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
