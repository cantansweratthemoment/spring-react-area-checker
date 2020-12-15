package com.example.wp.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "points")
public class Point {

    @Id
    @GeneratedValue
    private Long id;
    @Column
    private Double x;
    @Column
    private Double y;
    @Column
    private Double r;

    @Column
    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
    @NotNull
    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
