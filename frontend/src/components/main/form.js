import React from "react";
import Input from 'react-toolbox/lib/input';
import {Button} from "react-toolbox";

function CoordinatesForm(props) {
    return (
        <div>
            <form>
                <Input type="text"  maxLength={1}/>
                <Input type="text"  maxLength={1}/>
                <Input type="text"  maxLength={1}/>
                <Button icon='bookmark' label='Bookmark' accent />
            </form>
        </div>
    )
}
export default CoordinatesForm