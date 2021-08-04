const assert = require("assert");
const Web3 = require("web3");
const ganache = require("ganache-core");
const compiledContract = require('../compile');

let web3 = new Web3(ganache.provider());

// Obtain sample accounts if successfull, proceed with contract initiation, deployment and sending ether.
web3.eth.getAccounts()
.then(accounts => {
    const contract = new web3.eth.Contract(compiledContract, '0xf486F1d06Bfa03B4692A28eec7132F316B47BB0', {
        from: accounts[0],
        gasPrice: '100000000000',
        gas: 1000000,
        data: compiledContract.evm.bytecode
    }); // Obtain an instance of the contract to work with.

    // Deploy SAMPLE contract to the Ethereum network
    contract.deploy({
            data: compiledContract.evm.bytecode,
            arguments: ['Hello World!']
        }
    )
    .send({
        from: '0xf486F1d06Bfa03B4692A28eec7132F316B47BB0b',
        gas: 1000000,
        gasPrice: '100000000000'
    }, (err, transactionHash) => {
        if (err){
            console.log(err); // If error is found, make it visible.
        }
        else {
            console.log("This is the transaction hash " + transactionHash); // Retrieve the transaction hash for this particular operation.
        }
    })

})
.catch(err => {
    console.log(err)
});

/*
beforeEach(() => {
    car = new Car();
    web3.eth.Contract()


});

describe("Testing Car class", () => {
    it("Testing park", () => {
        assert.strictEqual("Is parked", car.park());
    });
    it("Testing drive", () => {
        assert.strictEqual("driving", car.drive());
    });
});*/