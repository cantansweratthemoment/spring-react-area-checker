import React, {useState} from "react";
import Logout from "./Logout";
import CoordinatesForm from "./Form";
import Resulttable from "./Table";
import Graph from "./Graph";

function Mainpage() {
    const validate = () => {
        //TODO
    }
    const [x_form, setX] = useState('0');
    const [y_form, setY] = useState('0');
    const [r_form, setR] = useState('1');
    const [checks, setChecks] = useState(null);
    return (<div>
        <Logout/>
        <CoordinatesForm validate={validate} x_form={x_form} y_form={y_form} r_form={r_form} setX={setX} setY={setY}
                         setR={setR}/>
        <Resulttable checks={checks}/>
        <Graph/>
    </div>)
}

export default Mainpage