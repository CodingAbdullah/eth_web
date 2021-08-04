// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3 ;

contract Message {
	string message;

	constructor(string memory initialMessage){
		message = initialMessage;
	}

	function setMessage(string memory newMessage) public {
		message = newMessage;
	}
}