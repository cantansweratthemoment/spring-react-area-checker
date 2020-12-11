import {createStore} from "redux";

const initialState = {
    token: localStorage.getItem("token")
};

function reducer(state, action) {
    switch (action.type) {
        case "change":
            localStorage.setItem("token", action.value)
            return {token: action.value};
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);
//todo
export default store;