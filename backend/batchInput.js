async function main(){
    const { ethers } = require("ethers");

    const PROJECT_ID = process.env.PROJECT_ID;
    const MNEMONIC = process.env.MNEMONIC;
    const provider = new ethers.providers.JsonRpcProvider();
    //const provider = new ethers.providers.InfuraProvider("sepolia", PROJECT_ID);

    
    //apenas para testar a conexão com a blockchain
    let blockNumber = await provider.getBlockNumber();
    console.log('Bloco atual: ' + blockNumber);

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

    const projetoSocialAddress = '0x645c023d7d0795f8bef444b5d3a96c2e6e36355c';

    let  signer = new ethers.Wallet.fromMnemonic(MNEMONIC);
    signer = await signer.connect(provider);
    console.log('signer address: ' + await signer.getAddress());

    const contratoWithSigner = new ethers.Contract(projetoSocialAddress, projetoSocialAbi, signer);

    nome = await contratoWithSigner.name();
    console.log('nome do contrato: ' + nome);

    async function mint(){
        //cria um projeto social para o empreendedor 1 - 2a carteira do mneumonico utilizado
        let tx = await contratoWithSigner.mint('0x0473C6Fe8d5C79D4a6c7D76FfFb59d439254f7FB', 100000);
        console.log(tx);
    }
    //mint();

    async function getProjeto1(){
        let tx = await contratoWithSigner.getValorMinimoViavel(1);
        console.log(tx.toNumber());
        tx = await contratoWithSigner.tokenURI(1);
        console.log(tx);
    }
    getProjeto1();

};
main();