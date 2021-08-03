pragma solidity ^0.8.3;

contract message {
	string message;

	constructor(string initialMessage){
		message = initialMessage;
	}

	function setMessage(string newMessage) public {
		message = newMessage;
	}
}
