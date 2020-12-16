pragma solidity ^0.4.17;

contract Person {
    bytes32 private firstname;
    bytes32 private lastname;
    int256 private age;
    int256 private transactionMoney;
    
    constructor(bytes32 first, bytes32 last, int256 setAge, int256 money) {
        firstname = first;
        lastname = last;
        age = setAge;
        transactionMoney = money;
    }

    function setFirstName(bytes32 first) public {
        firstname = first;
    }

    function setLastName(bytes32 last) public {
        lastname = last;
    }
    
    function setAge(int256 newAge) public {
        age = newAge;
    }
    
    function setTransactionMoney(int256 money) public {
        transactionMoney = money;
    }

    function getFirstName() public view returns (bytes32) {
        return firstname;
    }

    function getLastName() public view returns (bytes32) {
        return lastname;
    }

    function getAge() public view returns (int256) {
        return age;
    }
    
    function getTransactionMoney() public view returns (int256) {
        return transactionMoney;
    }
}