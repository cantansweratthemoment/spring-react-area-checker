package com.example.wp.form.validator;
import com.example.wp.form.PointsCredentials;
import com.example.wp.form.UserCredentials;
import com.example.wp.service.PointService;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


@Component
public class PointCredentialsValidator implements Validator {

    private final PointService pointService;
    public PointCredentialsValidator(PointService pointService) {
        this.pointService = pointService;
    }


    @Override
    public boolean supports(Class<?> aClass) {
        return PointService.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        if(!errors.hasErrors()){
            PointsCredentials pointsCredentials = (PointsCredentials) o;
            try {
                Double.parseDouble(pointsCredentials.getX());
                Double.parseDouble(pointsCredentials.getY());
                Double.parseDouble(pointsCredentials.getR());
            }catch (Exception e){
                e.printStackTrace();
                errors.rejectValue("point", "point.error", "invalid values in point");
            }
        }
    }
}
