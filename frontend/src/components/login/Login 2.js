import React, {useState} from "react";
import store from "../../app/store";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Messages} from 'primereact/messages';
import "./login.css"
import {Message} from 'primereact/message';

let MessageInstance;

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
                    console.log(json)
                    console.log(json.login)
                    store.dispatch({type: "change", value: json.login});
                } else {
                    let errortext = json.error;
                    MessageInstance.show({severity: 'error', summary: errortext});
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
                MessageInstance.show({severity: 'success', summary: 'Successful Registration'});
                console.log(json)
                console.log(json.login)
                //    store.dispatch({type: "change", value: json.login});
            } else {
                let errortext = json.error;
                MessageInstance.show({severity: 'error', summary: errortext});
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
                <div className="log-field">
                <label>Username </label>
                <InputText type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="log-field">
                    <label>Password </label>
                <InputText type="password" id="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button className="button" type="button" onClick={signUp}>Sign Up</Button>
                <Button className="button" type="button" onClick={signIn}>Log In</Button>
                <Messages icon ref={(el) => MessageInstance = el}/>
            </form>
        </div>
    )
}


export default Login