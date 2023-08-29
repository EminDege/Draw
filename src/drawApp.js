import React, { useState } from 'react'
import "./drawApp.css";

function DrawApp(props) {
    const tur = props.tur;
    const uye = props.uye.split("\n");

    let winner = '';

    if (tur === "klasik") {
        const index = Math.floor(Math.random() * (uye.length))
        winner = uye[index];
    }
    return (
        <div>{winner}</ div>
    )
}
export default DrawApp


