import React, {useState} from "react";
import Logout from "./Logout";
import CoordinatesForm from "./Form";
import Resulttable from "./Table";
import Graph from "./Graph";
import "./main.css"

function Mainpage() {
    const checkNumbers = (q, a, b) => {
        return ((q > a) && (q < b));
    }
    const validate = () => {
        return (checkNumbers(x_form, -3, 3) && checkNumbers(y_form, -3, 3) && checkNumbers(r_form, 0, 3));
    }
    const [x_form, setX] = useState('0');
    const [y_form, setY] = useState('0');
    const [r_form, setR] = useState('1');
    const [checks, setChecks] = useState(null);
    return (<div>
        <Graph r={r_form} setChecks={setChecks}/>
        <CoordinatesForm validate={validate} x_form={x_form} y_form={y_form} r_form={r_form} setX={setX} setY={setY}
                         setR={setR} setChecks={setChecks}/>
        <Resulttable checks={checks}/>
        <Logout/>
    </div>)
}

export default Mainpage