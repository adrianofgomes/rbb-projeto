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

    function _baseURI() internal pure override returns (string memory) {
        return "https://raw.githubusercontent.com/adrianofgomes/rbb-projeto/main/backend/stub/projetos/";
    }

    function mint(address to, uint256 valorMinimoViavel) public onlyOwner {
        _lastId += 1;
        _safeMint(to, _lastId);

        _valorMinimoViavel[_lastId] = valorMinimoViavel;
    }

    function getValorMinimoViavel(uint256 tokenId) public view returns (uint256) {
        _requireOwned(tokenId);

        return _valorMinimoViavel[_lastId];
    }

}