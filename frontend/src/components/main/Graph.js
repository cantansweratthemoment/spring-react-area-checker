import React, {useEffect, useRef} from "react";
import {drawCanvas, clicked} from "./scripts/canvas";

function Graph(props) {
    const canvas = useRef();
    useEffect(() => {
        drawCanvas(canvas.current.getContext("2d"), props.r)
    }, [drawCanvas, props])
    return (
        <div>
            <canvas id="canvas" ref={canvas} onClick={(e) => {
                clicked(e, props.r, props.setChecks)
            }} style={{
                width: "500px", height: "500px", textAlign: "center",
                margin: "0 auto"
            }}/>
        </div>
    )
}

export default Graph;