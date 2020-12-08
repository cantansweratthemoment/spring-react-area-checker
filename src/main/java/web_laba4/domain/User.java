package com.example.wp.domain;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Date;
@Entity
@Table(
        indexes = {@Index(columnList = "creationtime")},
        uniqueConstraints = {@UniqueConstraint(columnNames = "login")}
)
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "[a-z]+", message = "Wrong login")
    private String login;

    @CreationTimestamp
    private Date creationtime;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

}
