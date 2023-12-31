// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProjetoSocialNFT is ERC721, Ownable {

    uint internal _lastId;

    mapping(uint256 projetoId => uint256 valorMinimoViavel) private _valorMinimoViavel;
    mapping(uint256 projetoId => uint dataFimAporte) private _dataFimAporte;
    mapping(uint256 projetoId => uint dataFimAporte) private _totalDoado;
    mapping(uint256 projetoId => mapping(address doadorAddress => uint256 valorDoado)) private _valoresDoados;

    mapping (address cliente => uint256) private _contasCorrentes;

    constructor() ERC721("ProjetoSocial", "SCLP") Ownable(msg.sender){
        //Owner inicial é quem implantou o contrato
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://raw.githubusercontent.com/adrianofgomes/rbb-projeto/main/backend/stub/projetos/";
    }

    function mint(address to, uint256 valorMinimoViavel, uint dataFimAporte) public onlyOwner {
        _lastId += 1;
        _safeMint(to, _lastId);
        _valorMinimoViavel[_lastId] = valorMinimoViavel;
        _dataFimAporte[_lastId] = dataFimAporte;
    }

    function getValorMinimoViavel(uint256 projetoId) public view returns (uint256) {
        _requireOwned(projetoId);
        return _valorMinimoViavel[projetoId];
    }
    function getDataFimAporte(uint256 projetoId) public view returns (uint) {
        _requireOwned(projetoId);
        return _dataFimAporte[projetoId];
    }

    function transferir(uint256 projetoId, address doador, uint256 valorDoado) public onlyOwner{
        _requireOwned(projetoId);
        if (valorDoado <= _contasCorrentes[doador]) {
            _totalDoado[projetoId] = _totalDoado[projetoId] + valorDoado;
            _valoresDoados[projetoId][doador] += valorDoado;
            _contasCorrentes[doador] -= valorDoado;   
        }
    }

    function getValorTotalDoado(uint256 projetoId) public view returns (uint256) {
        _requireOwned(projetoId);
        return _totalDoado[projetoId];
    }

    function depositar(address cliente, uint256 deposito) public onlyOwner returns (uint256) {

        require(deposito > 0,"O valor a ser deposito precisa ser maior que zero.");
        _contasCorrentes[cliente] += deposito;
        return _contasCorrentes[cliente];
    }

    function getSaldoCliente(address cliente) public view returns (uint256) {
        return _contasCorrentes[cliente];
    }
}