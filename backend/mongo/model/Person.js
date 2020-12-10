const mongoose = require("../db_conn");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    transactionMoney : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Person', PersonSchema);