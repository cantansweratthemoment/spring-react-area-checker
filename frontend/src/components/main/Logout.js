import React from "react";
import store from "../../app/store";

function Logout() {
    const logout = e => {
        localStorage.clear();
        store.dispatch({type: "changetoken", value: null});
        console.log("бабалити");
    }
    return (<div>
            <button id="but" type="button" onClick={logout}>logout</button>
        </div>
    )
}

export default Logout