pragma solidity ^0.7.0;

contract Test {
    int256 public number;
    
    constructor(int256 newNumber)  {
        number = newNumber;
    }
    
    function setNumber(int256 someRandomNumberDude) public {
        number = someRandomNumberDude;
    }
    
    function getNumber() public view returns (int256) {
        return number;
    }
 
}