package com.example.wp.repository;

import com.example.wp.domain.Point;
import com.example.wp.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends JpaRepository<Point, Long> {

    List<Point> getPointsByUser(User user);
}
