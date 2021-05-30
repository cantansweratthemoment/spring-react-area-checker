package com.example.wp.form;

import javax.validation.constraints.NotEmpty;

public class PointsCredentials {
    @NotEmpty
    private String login;

    @NotEmpty
    private String x;

    @NotEmpty
    private String y;

    @NotEmpty
    private String r;

    private String result;

    public String isResult() {
        return result;
    }

    public void setResult(String x, String y, String r){
        Double xx = Double.parseDouble(x.replace(",", "."));
        Double yy = Double.parseDouble(y.replace(",", "."));
        Double rr = Double.parseDouble(r.replace(",", "."));
        if(xx >= 0 && yy >= 0 && (yy <= rr - 2*xx) && yy <= rr && xx <= rr/2 || xx <= 0 && yy <= 0 && (xx*xx + yy*yy <= (rr/2)*(rr/2)) || xx <= 0 && yy >= 0 && xx >= -rr/2 && yy <= rr){
            this.result = "true";
        }else {
            this.result = "false";
        }
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

}
