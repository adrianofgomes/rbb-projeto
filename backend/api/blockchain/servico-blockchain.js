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

const  projetoSocialAddress = '0x8295f3F8dd7BC0bdbd0a1d1e08574047eE96517d';

class ControladorBlockchain
{
    
    
    static recuperarValorMinimoViavel = async (idProjeto) =>{

        const provider = new ethers.providers.InfuraProvider("sepolia", PROJECT_ID);

        let  signer = new ethers.Wallet.fromMnemonic(MNEMONIC);
        signer = signer.connect(provider);
        const contratoWithSigner = new ethers.Contract(projetoSocialAddress, projetoSocialAbi, signer);

        let tx = await contratoWithSigner.getValorMinimoViavel(idProjeto);
        
        console.log(tx);

        return tx.toNumber();
    }

    static recuperarValorAporte = async (idProjeto) =>{
        //TODO: PLUGAR NA BLOCKCHAIN
        return 500;
    }

    static transferir = async (idUsuario, idProjeto, qntdTokens) =>{
        //TODO: PLUGAR NA BLOCKCHAIN
    }

    static recuperarSaldoUsuario = async (idUsuario) =>
    {
        return 1000;
    }

    static pegaConexao = async() => {

    }
}

module.exports = ControladorBlockchain;