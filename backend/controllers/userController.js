const Person = require("../mongo/model/Person");

exports.getUsers = ("/", (req, res) => {

    Person.find({}, (err, persons) => {
        if (err){
            console.log(err);
        }
        else {
            res.json({
                users: persons
            });
        }
    })
});