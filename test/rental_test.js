const BigNumber = web3.BigNumber;
const { assert } = require('chai');

const Rental = artifacts.require("Rental");
const RentalToken = artifacts.require("RentalToken");

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('RentalToken', accounts => {
  const _name = 'RentalToken';
  const _symbol = 'RTK';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await RentalToken.new();
  });

  describe('token attr', function() {
    it('has to be correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has to be correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('RentalToken', async function() {
      await RentalToken.deployed();
      return assert.isTrue(true);
    });

    //it('has to be correct decimals', async function() {
      //const decimals = await this.token.decimals();
     // decimals.should.equal(_decimals);
    //});
  });
});

contract("Rental", function (accounts) {
  it("should deploy the Rental contract", async function () {
    await Rental.deployed();
    return assert.isTrue(true);
  });

  it("should store the booking", async() => {
    const rental = await Rental.deployed();
    //const actualresponse = await rental.storeBooking("Monday", {from: accounts[0]});
    await rental.storeBooking("Monday,Noon", {from: accounts[0]});
    const actualresponse = await rental.getBooking( {from: accounts[0]});
    const expectedresponse = "Booking was stored";
    //assert.equal(actualresponse, expectedresponse,  `${actualresponse} was not the message we expected!`);
  });

});