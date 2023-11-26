var myContract = artifacts.require("BRLToken");

module.exports = function(deployer){
  deployer.deploy(myContract);
}
