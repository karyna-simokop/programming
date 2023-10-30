// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {Context} from "@openzeppelin/contracts/utils/Context.sol";
import {IERC20Errors} from "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20Capped} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract KiraToken is Ownable, ERC20Capped, ERC20Burnable{

    uint8 constant DECIMALS=8;

    constructor() ERC20("KiraToken", "KIRA") Ownable(msg.sender) ERC20Capped(7900000*10**DECIMALS){
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function decimals() public override view returns (uint8) {
        return DECIMALS;
    }

    function _update(address _account, address _to, uint256 value) internal override(ERC20,ERC20Capped){
        super._update(_account,_to,value);
    }
}

contract ICO{
    uint256 rate = 10; // 1 ETH = 10 KIRA

    address token;

    constructor(address _token){
        token = _token;
    }

    function swap() payable public{
        uint256 amount = msg.value * rate;       
        ERC20(token).transfer(msg.sender,amount);
    }
}