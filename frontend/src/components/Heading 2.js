import React from "react";

export default function Heading() {
    const styles = {
        h2: {
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "250%",
            textDecoration: "underline overline",
            color: "#A35CFF",
            backgroundColor: "#F3FFE1"
        }
    }
    return (
        <h2 style={styles.h2} align="center" id="authors">Mike Lavlinskiy and Olga Ilinskaya production, var. 67125, P3214</h2>
    )
}