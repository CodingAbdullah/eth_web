const path = require("path");
const fs = require("fs");
const solc = require("solc");

const filePath = path.resolve(__dirname, 'smart_contracts', 'person.sol'); // Local path to file
const source = fs.readFileSync(filePath, 'UTF-8');

console.log(solc.compile(source, 1));