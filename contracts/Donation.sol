// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Donation is Ownable {
    event DonationReceived(address donor, uint256 amount);

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than 0");
        emit DonationReceived(msg.sender, msg.value);
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
