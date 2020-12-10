require("dotenv").config({ path: ".env"});
const express = require("express");
const signUpRouter = require("../backend/routes/signUpRouter");
const cors = require("cors");
const app = express();

app.listen(process.env.DB_PORT, () => {
    console.log("Listening to PORT " + process.env.DB_PORT);
});

app.use(cors()); // Enable Cross-Origin-Resource-Sharing. Bypass security firewall..
//app.use(db);

app.use("/signUpForm", signUpRouter);