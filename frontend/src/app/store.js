import {createStore} from "redux";

const initialState = {
    token: localStorage.getItem("token")
};

function reducer(state, action) {
    switch (action.type) {
        case "changetoken":
            localStorage.setItem("token", action.value)
            return {token: action.value};
        default:
            return state;
    }
}

function checkAuth() {
    if (store.getState().token !== null) {
        fetch("/checktoken" + "?token=" + store.getState().token)
            .then(response => response.text()
                .then((text => {
                            if (text !== 'true') {
                                store.dispatch({type: "change", value: null})
                                localStorage.clear()
                            }
                        }
                    )
                )
            )
    }
}

const store = createStore(reducer, initialState);
store.subscribe(checkAuth);
export default store;