require("dotenv").config({ path: '.env'}); // Hiding credentials within an environment configuarion file (.env) you can create your own should you want to clone this repo everyone will have their set of API KETS
const HDWalletProvider = require("truffle-hdwallet-provider");
const compiledContract = require("../frontend/compile");
const Web3 = require("web3");

// Adding an HDWAlletProvier for testing deployment.

let provider = new HDWalletProvider(process.env.API_KEY, "https://rinkeby.infura.io/v3/" + process.env.RINKBY_API_KEY);
const web3 = new Web3(provider);

const contract = new web3.eth.contract({
    from: process.env.ACCOUNT_KEY,
    gasPrice: '10000000000000', // sample numbers
    gas: '1000000', // sample numbers
    data: compiledContract.evm.bytecode
});

// Deploying the contract to the rinkeby test network. CODE WILL GO HERE.

