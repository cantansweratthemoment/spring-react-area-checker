import React, {useState} from "react";
import store from "../../app/store";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

function Login() {

    const signIn = e => {
        let information = {
            "username": username, "password": password
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        body = "?" + body.join("&");
        fetch("/login" + body, {
            method: "POST"
        }).then(response => response.text().then(text => {
                if (response.ok) {
                    alert("Удачный логин!")
                    store.dispatch({type: "changetoken", value: text});
                } else {
                    alert("Ошибка!")
                }
            }
        ))
    }

    const signUp = e => {
        let information = {
            "username": username, "password": password
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        body = "?" + body.join("&");
        fetch("/signup" + body, {
            method: "POST"
        }).then(response => response.text().then(text => {
            if (response.ok) {
                alert("Удачная регистрация!")
            } else {
                alert("Ошибка!")
            }
        }))
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login_form">
            <form>
                <InputText type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <InputText type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type="button" onClick={signUp}>я новенький</Button>
                <Button type="button" onClick={signIn}>я уже смешарик</Button>
            </form>
        </div>
    )
}


export default Login
//TODO алерты это плохо