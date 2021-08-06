const solc = require("solc");
const path = require("path");
const fs = require("fs");

const messageContractPath = path.resolve(__dirname, 'contracts', 'message.sol');
const sourceCode = fs.readFileSync(messageContractPath, 'utf8');

// Obtain the json representation of the contract to work with
module.exports = JSON.parse(solc.compile(JSON.stringify({
    language: 'Solidity',
    sources: {
      'message.sol': {
        content: sourceCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['evm', 'bytecode'],
        },
      },
    },
  }))).contracts['message.sol'].Message;