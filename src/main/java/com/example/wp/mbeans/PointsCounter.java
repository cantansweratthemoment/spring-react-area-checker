package com.example.wp.mbeans;

import com.example.wp.domain.Point;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import javax.management.Notification;
import javax.management.NotificationBroadcasterSupport;
import java.util.List;

@ManagedResource
@Component
public class PointsCounter extends NotificationBroadcasterSupport implements PointsCounterMBean {
    private long allShotsCounter = 0;
    private long successfulShotsCounter = 0;

    @Override
    public void updateCounters(Point point) {
        allShotsCounter++;
        if (point.getResult().equals("true")) {
            successfulShotsCounter++;
        }

        Double xx = point.getX();
        Double yy = point.getY();
        Double rr = point.getR();
        if (Math.abs(xx) >= 2.3 * rr && Math.abs(yy) >= 2.3 * rr) {
            Notification notification = new Notification(
                    "PointOutOfBounds", this, System.currentTimeMillis(),
                    "The point is out of bounds."
            );
            this.sendNotification(notification);
        }
    }

    @Override
    public long getAllPointsCounter() {
        return allShotsCounter;
    }

    @Override
    public long getHitPointsCounter() {
        return successfulShotsCounter;
    }
}