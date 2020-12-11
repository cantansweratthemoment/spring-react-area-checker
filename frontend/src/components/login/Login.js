import React, {useState} from "react";
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from "primereact/button";
import {Messages} from "primereact/messages";

function Login() {

    const signIn = e => {
        let information = {
            "username": username, "password": password
        };
        console.log("log in: " + username + " " + password);
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
        fetch("/login" + body, {
            method: "POST"
        }).then(response => response.text().then(text => {
                if (response.ok) {
                    //TODO
                } else {
                    //TODO
                }
            }
        ))
    }

    const signUp = e => {
        let information = {
            "username": username, "password": password
        };
        console.log("log in: " + username + " " + password);
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
        fetch("/signup" + body, {
            method: "POST"
        }).then(response => response.text().then(text => {
            if (response.ok) {
                //TODO
            } else {
                //TODO
            }
        }))
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login_form">
            <form>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={signUp}>я новенький</button>
                <button type="button" onClick={signIn}>я уже смешарик</button>
            </form>
        </div>
    )
}


export default Login
//TODO убрать лишние логи
//TODO Primereact (я не знаю в чем проблема)