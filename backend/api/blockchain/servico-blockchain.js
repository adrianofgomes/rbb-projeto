const { ethers } = require("ethers");
const PROJECT_ID = process.env.PROJECT_ID;
const MNEMONIC = process.env.MNEMONIC;

const projetoSocialAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)",

    "function mint(address to, uint256 valorMinimoViavel, uint dataFimAporte)",

    "function getValorMinimoViavel(uint256 tokenId) public view returns (uint256)",

    "function getDataFimAporte(uint256 tokenId) public view returns (uint)",

    "function transferir(uint256 projetoId, address doador, uint256 valorDoado)",

    "function getValorTotalDoado(uint256 projetoId) public view returns (uint256)",

    "function tokenURI(uint256 tokenId) public view returns (string memory)"
];

const  projetoSocialAddress = '0xFd5729C83A0D31BDCcDE05011eB3eE8141C1aff7';

class ControladorBlockchain
{
    
    
    static recuperarValorMinimoViavelProjeto = async (idProjeto) =>{

        let conexao = ControladorBlockchain.pegaConexaoProjetoSocial();
        let tx = await conexao.getValorMinimoViavel(idProjeto);

        return tx.toNumber();
    }

    
    static recuperarDataFimAporteProjeto = async (idProjeto) =>{
        let conexao = ControladorBlockchain.pegaConexaoProjetoSocial();
        let tx = await conexao.getDataFimAporte(idProjeto);

        return tx.toNumber();
    }

    static recuperarValorAporteProjeto = async (idProjeto) =>{
        let conexao = ControladorBlockchain.pegaConexaoProjetoSocial();
        let tx = await conexao.getValorTotalDoado(idProjeto);

        return tx.toNumber();
    }


    static transferir = async (idProjeto, enderecoDoador, qntdTokens) =>{
        let conexao = ControladorBlockchain.pegaConexaoProjetoSocial();
        await conexao.transferir(idProjeto, enderecoDoador, qntdTokens);
    }

    static recuperarSaldoUsuario = async (idUsuario) =>
    {
        return 1000;
    }

    static pegaConexaoProjetoSocial = () => {
        
        //const provider = new ethers.providers.InfuraProvider("sepolia", PROJECT_ID);
        const provider = new ethers.providers.JsonRpcProvider();

        let  signer = new ethers.Wallet.fromMnemonic(MNEMONIC);

        signer = signer.connect(provider);

        const contratoWithSigner = new ethers.Contract(projetoSocialAddress, projetoSocialAbi, signer);

        return contratoWithSigner

    }
}

module.exports = ControladorBlockchain;