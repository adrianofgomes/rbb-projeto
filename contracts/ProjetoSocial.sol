// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProjetoSocialNFT is ERC721, Ownable {

    uint internal _lastId;

    mapping(uint256 tokenId => uint256) private _valorMinimoViavel;

    constructor() ERC721("ProjetoSocial", "SCLP") Ownable(msg.sender){
        //Owner inicial é quem implantou o contrato
    }

    function mint(address to, uint256 valorMinimoViavel) public onlyOwner {
        _lastId += 1;
        _safeMint(to, _lastId);

        _valorMinimoViavel[_lastId] = valorMinimoViavel;

        emit Transfer(address(0), to, _lastId);

    }

}