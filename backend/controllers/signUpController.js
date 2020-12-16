const Person = require("../mongo/model/Person");

exports.signUpForm = ("/", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const transactionMoney = req.body.transactionMoney;
    
    const newPerson = new Person({ firstname, lastname, age, transactionMoney});
    
    newPerson.save().then(() => {
        res.json({
            status: 200,
            message: 'Success'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 400,
            message: 'Bad Request'
        })
    })
});