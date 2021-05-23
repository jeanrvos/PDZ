const express = require("express");

const app = express();

app.get("/:operacao", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (req.params.operacao === "somar") {
        res.send(String(num1 + num2));
    } else if (req.params.operacao === "subtrair") {
        res.send(String(num1 - num2));
    } else if (req.params.operacao === "multiplicar") {
        res.send(String(num1 * num2));
    } else if (req.params.operacao === "dividir") {
        res.send(String(num1 / num2));
    }
});

app.listen(8000);