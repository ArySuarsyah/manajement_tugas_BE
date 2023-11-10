require("dotenv").config({
    path: ".env",
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Backend is running",
    });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
