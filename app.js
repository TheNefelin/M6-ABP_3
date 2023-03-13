const { json } = require("body-parser");
const express = require("express");
const app = express();
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));

const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.listen(3000);

app.get("/", (req, res) => {
    res.render("index");
    // res.send(paises);
    const obj = JSON.parse(data());
    console.log(obj)
});

function data() {
    const dt = `{
        "localidad 1": 
            { "Continente": "África", "País": "Angola", "Capital": "Luanda" }, 
        "localidad 2": 
            { "Continente": "América del Norte", "País": "Estados Unidos", "Capital": "Washington DC" },
        "localidad 3": 
            { "Continente": "América Central", "País": "México", "Capital": "Ciudad de México" }, 
        "localidad 4": 
            { "Continente": "América del Sur", "País": "Brasil", "Capital": "Brasilia" },
        "localidad 5": 
            { "Continente": "Europa", "País": "España", "Capital": "Madrid" }, 
        "localidad 6": 
            { "Continente": "Europa", "País": "Alemania", "Capital": "Berlín" }, 
        "localidad 7": 
            { "Continente": "Oceanía", "País": "Australia", "Capital": "Camberra" }, 
        "localidad 8": 
            { "Continente": "Asia", "País": "Japón", "Capital": "Tokio" } 
    } `

    return dt
}