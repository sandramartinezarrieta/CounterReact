//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Counter from "./component/counter.jsx";

//import your own components
let segundos = 0;
let minutos = 0;
let cienminutos = 0;
let horas = 0;
let horas3 = 0;
let horas4 = 0;
setInterval(() => {
    segundos++;
    console.log("Hola");
    if (segundos == 9) {
        segundos = 0;
        minutos++;
        cienminutos += 0, 1
    }
    if (minutos == 9) {
        minutos = 0;
    }
    if (cienminutos == 9) {
        cienminutos = 0;
        horas++;
    }
    if (horas == 9) {
        horas = 0;
        horas3++;
    }
    if (horas3 == 9) {
        horas3 = 0;
        horas4++;
    }
    ReactDOM.render( <
        Counter segundos = {
            segundos
        }
        minutos = {
            minutos
        }
        cienminutos = {
            cienminutos
        }
        horas = {
            horas
        }
        horas3 = {
            horas3
        }
        horas4 = {
            horas4
        }
        />,
        document.querySelector("#app")
    );
}, 1000);