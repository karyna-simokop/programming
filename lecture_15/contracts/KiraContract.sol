
// SPDX-License-Identifier: MIT 
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Context} from "@openzeppelin/contracts/utils/Context.sol";
import {IERC20Errors} from "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";

contract KiraToken is ERC20{

    uint8 constant DECIMALS=8;

constructor() ERC20("KiraToken", "KIRA"){
    uint256 _supply = 7900000*10**DECIMALS;
    _mint(msg.sender,_supply);
    
}

function decimals()public override view returns (uint8) {
    return DECIMALS;
}

}