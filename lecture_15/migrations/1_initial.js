var KiraToken = artifacts.require("KiraToken");

module.exports = async(deployer)=>{
    await deployer.deploy(KiraToken);
    console.log("migration successful")
    }

