package com.example.wp.mbeans;

public interface PercentageCounterMBean {
    void updateCounters(long successful, long all);

    double getPercentageCounter();
}
