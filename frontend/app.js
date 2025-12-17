const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.redirect("/availability");
});

app.get("/availability", (req, res) => {
    res.render("availability");
});

app.get("/slots", async (req, res) => {
    try {
        console.log("Availability ID from query:", req.query.availabilityId);

        const availabilityId = req.query.availabilityId;

        const url = availabilityId
            ? `http://localhost:8080/api/slots/by-availability/${availabilityId}`
            : `http://localhost:8080/api/slots`;

        console.log("Calling backend URL:", url);

        const response = await axios.get(url);
        res.render("slots", { slots: response.data });

    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading slots");
    }
});



app.listen(3000, () => {
    console.log("Frontend running at http://localhost:3000");
});
