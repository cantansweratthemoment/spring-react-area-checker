import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import 'primereact/resources/themes/md-light-deeppurple/theme.css';

function Resulttable(props) {
    const paginatorLeft = <Button id="button1" type="button" icon="pi pi-cloud">◀️</Button>;
    const paginatorRight = <Button id="button2" type="button" icon="pi pi-cloud">▶️</Button>;

    return (
        <DataTable id="resultTable" value={props.checks} paginator rows={5}
                   paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            < Column header="X" field="x"/>
            <Column header="Y" field="y"/>
            <Column header="R" field="r"/>
            <Column header="Hit or miss?" field="result"/>
        </DataTable>
    )
}

export default Resulttable;