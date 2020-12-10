require("dotenv").config({path: "../env"});
const mongoose = require("mongoose");

const URL = "mongodb+srv://ethereumIsGlobal:" + process.env.DB_PASS + "@greenkartdb-fambj.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(() => {
    console.log("Connection to DB established");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;