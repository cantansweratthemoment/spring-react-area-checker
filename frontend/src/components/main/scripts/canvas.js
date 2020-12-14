import store from "../../../app/store";

function clicked(e, r, setChecks) {
    let r_val = parseFloat(r)
    if (isNaN(r_val)) {
        r_val = 1
    }
    let maslo = document.getElementById('canvas');
    let event_x = e.pageX - maslo.offsetLeft;
    let event_y = e.pageY - maslo.offsetTop;
    let x = (event_x - 250) * r / 200;
    let y = (250 - event_y) * r / 200;
    //drawPoints();
    const checkNumbers = (q, a, b) => {
        return ((q > a) && (q < b));
    }
    if (checkNumbers(r_val, 0, 3) && checkNumbers(x, -3, 3) && checkNumbers(y, -3, 3)) {
        let information = {
            "login": store.getState().login,
            "x": x,
            "y": y,
            "r": r_val
        };
        let body = [];
        for (const inf in information) {
            body.push(inf + "=" + information[inf]);
        }
        console.log(body);
        body = "?" + body.join("&");
            fetch("/point" + body, {
                method: "POST"
            }).then(response => response.json().then(json => {
                //todo
            }))
    }
}

function drawCanvas(context, r) {
    context.canvas.width = context.canvas.offsetWidth;
    context.canvas.height = context.canvas.offsetHeight;
    let width = context.canvas.width;
    let height = context.canvas.height;
    let r_text = r + "";
    let rhalf_text = r / 2 + "";
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#E8D7FF";
    context.fillRect(150, 50, 100, 200);
    context.beginPath();
    context.moveTo(250, 250);
    context.lineTo(350, 250);
    context.lineTo(250, 50);
    context.fill();
    context.moveTo(250, 250);
    context.arc(250, 250, 100, Math.PI/2, Math.PI);
    context.fill();
    context.beginPath();
    context.strokeStyle = "#FF47A0";
    context.lineWidth = 2;
    context.moveTo(0, 250);
    context.lineTo(500, 250);
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#FF47A0";
    context.lineWidth = 2;
    context.moveTo(250, 500);
    context.lineTo(250, 0);
    context.stroke();
    context.strokeText(rhalf_text, 350, 250);
    context.strokeText(r_text, 450, 250);
    context.strokeText(rhalf_text, 250, 350);
    context.strokeText(r_text, 250, 450);
    context.strokeText(rhalf_text, 150, 250);
    context.strokeText(rhalf_text, 250, 150);
    context.strokeText(r_text, 250, 50);
    context.strokeText(rhalf_text, 350, 250);
    context.strokeText(r_text, 50, 250);
    context.strokeText("Y", 250, 10);
    context.strokeText("X", 490, 250);
    //drawPoints();
}

/*function drawPoint(x, y, r, result) {
    let rr = document.getElementById("form:r_chooser");
    let rValue = rr.value;
    let finalX = 250 + x * 200 / rValue;
    let finalY = 250 - y * 200 / rValue;
    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    if (result === "false") {
        context.fillStyle = "#FF2A1F";
    } else {
        context.fillStyle = "#5FFF33";
    }
    context.beginPath();
    context.arc(finalX, finalY, 5, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();
}*/

/*function drawPoints() {
    let coordinates = Array.prototype.slice.call(document.getElementById("resultTable").getElementsByTagName("td"));
    for (let i = 0; i < coordinates.length; i = i + 4) {
        drawPoint(Number(coordinates[i].innerHTML),
            Number(coordinates[i + 1].innerHTML),
            Number(coordinates[i + 2].innerHTML), coordinates[i + 3].innerHTML);
    }
}*/
//TODO особые условия для проверок с другим радиусом
export {drawCanvas, clicked};