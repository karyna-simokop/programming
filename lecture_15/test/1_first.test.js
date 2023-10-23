var KiraToken = artifacts.require("KiraToken");

let kira = null;

contract("KiraToken", async(accounts)=>{
	let kira=false;;
	it("KiraToken is deployed to blockchain",async()=>{
		let kiraIsDeployed = false;
		try{
			kira = await KiraToken.deployed();
			if(kira.address){
				kiraIsDeployed=true
			}
		}catch(e){
			
		}
		assert.equal(kiraIsDeployed,true,"KiraToken is not deployed");
	});

	
});
