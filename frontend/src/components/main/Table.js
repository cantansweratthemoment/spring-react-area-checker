import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

function Resulttable(props) {
    return (
        <DataTable id="resultTable" value={props.checks}>
            <Column header="X" field="x"/>
            <Column header="Y" field="y"/>
            <Column header="R" field="y"/>
            <Column header="Hit or miss?" field="result"/>
        </DataTable>
    )
}

export default Resulttable;