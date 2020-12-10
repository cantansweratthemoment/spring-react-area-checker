package com.example.wp.domain;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "users"
)
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @NotEmpty
    @Column
    private String login;


    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Point> points;

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

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

}
