// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BRLToken is ERC20, Ownable {
    uint256 private _totalSupply;

    constructor() ERC20("BRLToken", "BRLT") Ownable(msg.sender){
        //Owner inicial é quem implantou o contrato
    }

}