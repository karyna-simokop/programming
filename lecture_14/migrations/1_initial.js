var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");
var Horse = artifacts.require("Horse");


let farmer = null;
let wolf = null;
let horse = null;

async function addAnimal(address){
    let result = await farmer.addAnimal(address);
    
  }

  async function feedAnimal(address,food){
	let result = await farmer.feedByAddress(address, food);
	console.log("feedAnimal result",result);
}

async function callAnimal(address){
	let result = await farmer.callByAddress(address);
	console.log("callAnimal result",result);
}



module.exports = async (deployer)=>{
     
    try{
        try{
			farmer = await Farmer.deployed();
		}catch(e){
			await deployer.deploy(Farmer);
		}

		if(!farmer){
			farmer = await Farmer.deployed();
		}



        try{
			wolf = await Wolf.deployed();
		}catch(e){
			await deployer.deploy(Wolf,"Akella");
		}

		if(!wolf){
			wolf = await Wolf.deployed();
		}

	
		try{
			horse = await Horse.deployed();
		}catch(e){
			await deployer.deploy(Horse,"Spirit");
		}

		if(!horse){
			horse = await Horse.deployed();
		}

		let animals = await farmer.getAnimals();
		if(animals.length === 0){
			await addAnimal(wolf.address);
			await addAnimal(horse.address);
		} 
		
       

        // await feedAnimal(horse.address,"plant");

        // await callAnimal(horse.address);

		//await feedAnimal(horse.address,"meat");


       // await addAnimal(cow.address);

        // await feedAnimal(cow.address,"plant");

        // await callAnimal(cow.address);

		//await feedAnimal(cow.address,"meat");


    }catch(e){
         console.error(e);
    } 

}


