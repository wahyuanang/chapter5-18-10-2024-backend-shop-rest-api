const express = require("express");
const morgan = require("morgan");

const router = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1/health-check", async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "Application passed healtcheck",
            isSuccess: true
        })
    } catch(error) {
        res.status(500).json({
            status: "Fail",
            message: "Application fail pass healtcheck",
            isSuccess: false
        })
    }
})

app.use(router);

module.exports = app;
