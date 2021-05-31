package com.example.wp.mbeans;

import com.example.wp.domain.Point;

import java.util.List;

public interface PointsCounterMBean {

    void updateCounters(Point point);

    long getAllPointsCounter();

    long getHitPointsCounter();
}