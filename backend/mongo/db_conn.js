require("dotenv").config({path: ".env"});
const mongoose = require("mongoose");
const Person = require("./model/Person");

const URL = "mongodb+srv://ethereumIsGlobal:" + process.env.DB_PASS + "@greenkartdb-fambj.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(() => {
    Person.create({firstname: 'Abdullah', lastname: 'Muhammad', age: 24, transactionMoney: 2345});
})
.catch((err) => {
    console.log(err);
});