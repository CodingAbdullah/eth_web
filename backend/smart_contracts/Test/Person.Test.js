require("dotenv").config({ path : '../../.env'});
const Web3 = require("web3");
const ganache = require("ganache-cli");
const assert = require("assert");
const path = require("path");

let web3; // variable to call the Web3 constructor
web3 = new Web3(ganache.provider());

const filePath = path.resolve(__dirname, 'backend', 'smart_contracts', 'person.sol'); // Local path to file

const string = "curl --user :" + process.env.DB_INFURA_PROJECT_KEY + " \
https://" + process.env.DB_TEST_NETWORK + ".infura.io/v3/" + process.env.DB_INFURA_PROJECT_ID;