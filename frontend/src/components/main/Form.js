import React from "react";
import {InputNumber} from 'primereact/inputnumber';
import {Button} from "primereact/button";
import store from "../../app/store";

function CoordinatesForm(props) {
    const submit = () => {
        if (props.validate()) {
            fetch("/point/token=" + store.getState().token + "&x=" + props.x_form + "&y=" + props.y_form + "&r=" + props.r_form, {
                method: 'POST'
            }).then(response => response.text()
                .then(text => props.setChecks(JSON.parse(text).reverse())))
        }
    }

    return (
        <div>
            <form id="form">
                <InputNumber value={props.x_form} onValueChange={(e) => props.setX(e.value)} mode="decimal"
                             min={-3} max={3}
                             minFractionDigits={1} maxFractionDigits={5} placeholder="Введите X(-3 .. 3)"/>
                <InputNumber value={props.y_form} onValueChange={(e) => props.setY(e.value)} mode="decimal"
                             min={-3} max={3}
                             minFractionDigits={1} maxFractionDigits={5} placeholder="Введите Y(-3 .. 3)"/>
                <InputNumber value={props.r_form} onValueChange={(e) => props.setY(e.value)} mode="decimal"
                             min={0} max={3}
                             minFractionDigits={1} maxFractionDigits={5} placeholder="Введите R(0 .. 3)"/>
                <Button type="button" onClick={submit} icon="pi"/>
            </form>
        </div>
    )
}

export default CoordinatesForm