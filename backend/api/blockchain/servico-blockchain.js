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

    "function mint(address to, uint256 valorMinimoViavel)",

    "function getValorMinimoViavel(uint256 tokenId) public view returns (uint256)",

    "function tokenURI(uint256 tokenId) public view returns (string memory)"
];

const  projetoSocialAddress = '0x645c023d7d0795f8bef444b5d3a96c2e6e36355c';

class ControladorBlockchain
{
    
    
    static recuperarValorMinimoViavelProjeto = async (idProjeto) =>{

        let conexao = ControladorBlockchain.pegaConexaoProjetoSocial();
        let tx = await conexao.getValorMinimoViavel(idProjeto);

        return tx.toNumber();
    }

    static recuperarValorAporteProjeto = async (idProjeto) =>{
        //TODO: PLUGAR NA BLOCKCHAIN
        return 500;
    }

    static recuperarDataFimAporteProjeto = async (idProjeto) =>{
        //TODO: PLUGAR NA BLOCKCHAIN
        return "10/10/2023";
    }

    static transferir = async (idUsuario, idProjeto, qntdTokens) =>{
        //TODO: PLUGAR NA BLOCKCHAIN
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