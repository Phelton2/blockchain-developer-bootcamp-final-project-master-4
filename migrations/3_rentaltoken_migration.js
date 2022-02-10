const RentalToken = artifacts.require("RentalToken");

module.exports = function (deployer) {
  deployer.deploy(RentalToken);
};