var BRLToken = artifacts.require("BRLToken");
var ProjetoSocialNFT = artifacts.require("ProjetoSocialNFT");

module.exports = function(deployer){
  deployer.deploy(BRLToken);
  deployer.deploy(ProjetoSocialNFT);
}
