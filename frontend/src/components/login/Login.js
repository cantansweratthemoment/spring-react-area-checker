
import React, {useState} from "react";
import store from "../../app/store";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

function Login() {

    const signIn = e => {
        let information = {
            "login": username, "password": password
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
        fetch("/login" + body, {
            method: "POST"
        }).then(response => response.json().then(json => {
                if (response.ok) {
                  //  alert("Удачный логин!")
                    console.log(json)
                    console.log(json.login)

                    store.dispatch({type: "change", value: json.login});
                } else {
                    alert("Ошибка!")
                }
            }
        ))
    }

    const signUp = e => {
        let information = {
            "login": username, "password": password
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
        fetch("/register" + body, {
            method: "POST"
        }).then(response => response.json().then(json => {
            if (response.ok) {
             //   alert("Удачная регистрация!")
                console.log(json)
                console.log(json.login)
            //    store.dispatch({type: "change", value: json.login});
            } else {
                alert("Ошибка!")
            }
        }))
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login_form">
            <form style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                fontSize: "170%",
                color: "#1e154a",
            }}>
                Username=
                <InputText type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
               Password=
                <InputText type="password" id="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                <Button type="button" onClick={signUp}>Sign Up</Button>
                <Button type="button" onClick={signIn}>Log In</Button>
            </form>
        </div>
    )
}


export default Login
//TODO Нормально обработать ответы от сервера(везде)