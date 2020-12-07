const fs = require('fs');

const personURL = "/Users/fresh/Desktop/Projects/Eth-App/eth_web/backend/smart_contracts/ABI/person_abi.json";
const testURL = "/Users/fresh/Desktop/Projects/Eth-App/eth_web/backend/smart_contracts/ABI/test_abi.json";

fs.readFile(personURL, (err, data) => {
    if (err){
        console.log("There is an error reading the JSON file " + err);
    }
    else {
        const jsonStructure = JSON.parse(data.toString());
        console.log("Printing names...");

        // Start from 1, the very first one is a constructor, NOT a function

        for (var i = 1 ; i < jsonStructure.length; i++){
            console.log(jsonStructure[i].name);
        }
    }
});

