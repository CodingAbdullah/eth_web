require("dotenv").config({ path: ".env"});
const express = require("express");
const signUpRouter = require("../backend/routes/signUpRouter");
const userRouter = require("../backend/routes/userRouter");
const cors = require("cors");
const app = express();

app.listen(process.env.DB_PORT, () => {
    console.log("Listening to PORT " + process.env.DB_PORT);
});

// Enable Cross-Origin-Resource-Sharing. Bypass security firewall
app.use(cors());

// Need these lines to allow for json interpretation (req, res)
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

// Use middleware functions with specified routes
app.use("/signUpForm", signUpRouter);
app.use("/getUsers", userRouter);