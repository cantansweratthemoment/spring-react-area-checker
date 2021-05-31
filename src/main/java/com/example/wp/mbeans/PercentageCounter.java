package com.example.wp.mbeans;

import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import javax.management.NotificationBroadcasterSupport;

@Component
@ManagedResource
public class PercentageCounter extends NotificationBroadcasterSupport implements PercentageCounterMBean {
    private double percentageCounter;

    @Override
    public void updateCounters(long successful, long all) {
        percentageCounter = (double) successful / (double) all * 100;
    }

    @Override
    public double getPercentageCounter() {
        return percentageCounter;
    }
}
