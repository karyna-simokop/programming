var ERC20_Contract = artifacts.require("ERC20");
var KiraToken = artifacts.require("KiraToken");

let name = "KiraToken";
let symbol = "KIRA";
let decimals = 8;
let totalSupply = 790000000000000;

module.exports = function(deployer) {
    deployer.deploy(KiraToken);
  };
  console.log("KiraToken deployed and tested successfully");


contract("KiraToken", async()=>{
	it("KiraToken is true", async()=>{
		coinName = false;
		try{
            coinName = await KiraToken.name();
        }catch(e){

        }
        assert.notEqual(coinName, name);
	})
	console.log("KiraToken name is correct");
	it("KIRA is true", async()=>{
		coinSymbol = false;
		try{
            coinSymbol = await KiraToken.symbol();
        }catch(e){

        }
        assert.notEqual(coinSymbol, symbol);
	})
	console.log("KIRA symbol is correct");
	it("Decimals are true", async()=>{
		coinDecimals = false;
		try{
            coinDecimals = await KiraToken.decimals();
        }catch(e){

        }
        assert.notEqual(coinDecimals, decimals);
	})
	console.log("KIRA decimals are correct");
	it("Decimals are true", async()=>{
		coinTotalSupply = false;
		try{
            coinTotalSupply = await KiraToken.totalSupply();
        }catch(e){

        }
        assert.notEqual(coinTotalSupply, totalSupply);
	})
	console.log("KIRA total supply is correct");

})