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

        "function mint(address to, uint256 valorMinimoViavel, uint dataFimAporte)",

        "function getValorMinimoViavel(uint256 tokenId) public view returns (uint256)",

        "function getDataFimAporte(uint256 tokenId) public view returns (uint)",

        "function transferir(uint256 projetoId, address doador, uint256 valorDoado)",

        "function getValorTotalDoado(uint256 projetoId) public view returns (uint256)",
        
        "function depositar(address cliente, uint256 deposito) public onlyOwner returns (uint256)",

        "function getSaldoCliente(address cliente) public view returns (uint256)",

        "function tokenURI(uint256 tokenId) public view returns (string memory)"
    ];

    const projetoSocialAddress = '0x645C023D7D0795f8bEF444B5D3a96c2E6E36355C';
    const donoPrimeiroProjeto = '0x0473C6Fe8d5C79D4a6c7D76FfFb59d439254f7FB';
    const doador = "0xA4c8F5F8088c95bf2786CA44D846497620109655";

    let  signer = new ethers.Wallet.fromMnemonic(MNEMONIC);
    signer = await signer.connect(provider);
    console.log('signer address: ' + await signer.getAddress());

    const contratoWithSigner = new ethers.Contract(projetoSocialAddress, projetoSocialAbi, signer);

    nome = await contratoWithSigner.name();
    console.log('nome do contrato: ' + nome);

    async function getProjeto1(){
        let tx = await contratoWithSigner.getValorMinimoViavel(1);
        console.log(tx.toNumber());
        
        let data = await contratoWithSigner.getDataFimAporte(1);
        console.log(data.toNumber());

        let valorTotalDoado = await contratoWithSigner.getValorTotalDoado(1);
        console.log(valorTotalDoado.toNumber());

        tx = await contratoWithSigner.tokenURI(1);
        console.log(tx);
    }

    async function mint(){

        //cria um projeto social para o empreendedor 1 - 2a carteira do mneumonico utilizado
        var data = new Date();
        data.setMonth(data.getMonth() + 1);
        const dataEmSegundos = Math.floor(data.getTime() / 1000);

        //mint
        let tx = await contratoWithSigner.mint(donoPrimeiroProjeto, 100000, dataEmSegundos);
        console.log("mint", tx);
        
        //informacoes de projeto
        getProjeto1();

        console.log("=======================================================");
        console.log("=======================================================");

        //depositar
        tx = await contratoWithSigner.depositar(doador, 5000);
        console.log("depositar", tx);

        //transferir
        tx = await contratoWithSigner.transferir(1, doador, 50);
        console.log("transferir", tx);

        //saldo
        tx = await contratoWithSigner.getSaldoCliente(doador);
        console.log("saldo", tx.toNumber());

    }
    mint();


};
main();