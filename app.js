const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const app = express();

app.listen(3000);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("index", {prueba: "TARJETAS"});
});

app.get("/tarjeta", (req, res) => {
    fs.readFile("./data/data.json", (err, dt) => {
        if (err) throw err
        let data = JSON.parse(dt);
        const arrData = Object.keys(data).map(key => data[key]);
        console.log(arrData);
        res.render("tarjeta", {arrData});
    });
});
