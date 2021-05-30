package com.example.wp.repository;

import com.example.wp.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    int countByLogin(String login);
    int countUserByLoginAndPassword(String login, String password);
    User getUserByLogin(String login);
}
