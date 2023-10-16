var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");
var Horse = artifacts.require("Horse")

let farmer = null;
let wolf = null;
let horse = null;

const WOLF_NAME = "Akella";
const WOLF_SPEAK = "Awoo";
const ANIMAL_SLEEP = "Z-z-z...";
const ANIMAL_EATS_MEAT = "Animal eats meat";
const PLANT = "plant";
const MEAT = "meat";
const CHOCOLATE = "chocolate";
const HORSE_NAME = "Spirit"
const ANIMAL_EATS_PLANT = "Animal eats plant";
const PLASTIC = "plastic";
const NOT_FOOD = 'not-food';
const ANYTHING_ELSE = "anything else"
const HORSE_SPEAK = "Igogo";


contract("Farmer", async(accounts)=>{
	let farmer=false;;
	it("Farmer is deployed to blockchain",async()=>{
		let farmerIsDeployed = false;
		try{
			farmer = await Farmer.deployed();
			if(farmer.address){
				farmerIsDeployed=true
			}
		}catch(e){
			
		}
		assert.equal(farmerIsDeployed,true,"Farmer is not deployed");
	});

	
});

contract("Wolf", async(accounts)=>{

	let wolf=false;;
	it("Wolf is deployed to blockchain",async()=>{
		let wolfIsDeployed = false;
		try{
			wolf = await Wolf.deployed();
			if(wolf.address){
				wolfIsDeployed=true
			}
		}catch(e){
			
		}
		assert.equal(wolfIsDeployed,true,"Wolf is not deployed");
	});

	it(`Wolf is named ${WOLF_NAME}`,async()=>{
		let name = await wolf.getName();
		assert.equal(name, WOLF_NAME,`Wolf is not named ${WOLF_NAME}`);
	});

	it("Wolf can sleep",async()=>{
		let result = await wolf.sleep();
		assert.equal(result, ANIMAL_SLEEP,"Wolf doesn't sleep as expected");
	});

	it("Wolf can speak",async()=>{
		let result = await wolf.speak();
		assert.equal(result, WOLF_SPEAK,"Wolf doesn't speak as expected");
	});

	it("Wolf can eat only meat",async()=>{
	
		let canEatPlant = false;
		let canEatMeat = false;
		let canEatChocolate = false;

		try{
			canEatPlant = await wolf.eat(PLANT);

		}catch(e){

		
		}
		assert.equal(canEatPlant, false,"Wolf can eat plant");
		
		try{
			canEatMeat = await wolf.eat(MEAT);
		}catch(e){

		}
		
		assert.equal(canEatMeat, ANIMAL_EATS_MEAT,"Wolf cannot eat meat");

		try{
			canEatChocolate = await wolf.eat(CHOCOLATE);
		}catch(e){

		}
		
		assert.equal(canEatChocolate, false,"Wolf can eat chocolate");
	});

});

	contract("Horse", async(accounts)=>{
		let horse=false;;
		it("Horse is deployed to blockchain",async()=>{
			let horseIsDeployed = false;
			try{
				horse = await Horse.deployed();
				if(horse.address){
					horseIsDeployed=true
				}
			}catch(e){
				
			}
			assert.equal(horseIsDeployed,true,"Horse is not deployed");
		});

		it(`Horse is named ${HORSE_NAME}`,async()=>{
			let name = await horse.getName();
			assert.equal(name, HORSE_NAME,`Horse is not named ${HORSE_NAME}`);
		});
	
		it("Horse can sleep",async()=>{
			let result = await horse.sleep();
			assert.equal(result, ANIMAL_SLEEP,"Horse doesn't sleep as expected");
		});
	

		it("Horse can eat only plant",async()=>{
	
			let canEatPlant = false;
			let canEatMeat = false;
			let canEatPlastic = false;
	
			try{
				canEatPlant = await horse.eat(PLANT);
			}catch(e){
	
			}
			
		assert.notEqual(canEatPlant, true,"Horse cannot eat plant");
	
			try{
				canEatMeat = await horse.eat(MEAT);
	
			}catch(e){
			}
			assert.equal(canEatMeat, false,"Horse can eat meat");
			
			
			try{
				canEatPlastic = await horse.eat(PLASTIC);
			}catch(e){
	
			}
			
			assert.equal(canEatPlastic, false,"Horse can eat plastic");
		});


		it("Farmer can call Horse, Horse responds correctly",async()=>{
			let result = await horse.speak();
			assert.equal(result, HORSE_SPEAK,"Horse doesn't speak as expected");
		});

		it("Farmer can feed Horse with plant",async()=>{
			farmer = await Farmer.deployed();
			let result = await farmer.feedByAddress(horse.address, PLANT);
			assert.equal(result, ANIMAL_EATS_PLANT,"Horse can't eat plant");
		
		});


		it("Farmer can't feed Horse with not-food, plastic and anything else ",async()=>{
			
			let canEatPlastic = false;
			let canEatNotFood = false;
			let canEatAnythingElse = false;
			
			farmer = await Farmer.deployed();

			try{
				canEatPlastic = await farmer.feedByAddress(horse.address, PLASTIC);
	
			}catch(e){
			}
			assert.equal(canEatPlastic, false,"Horse can eat plastic, not-food and anything else");

			try{
				canEatNotFood = await farmer.feedByAddress(horse.address, NOT_FOOD);
	
			}catch(e){
			}
			
			assert.equal(canEatNotFood, false,"Horse can eat plastic, not-food and anything else");

			try{
				canEatAnythingElse = await farmer.feedByAddress(horse.address, ANYTHING_ELSE);
	
			}catch(e){
			}
			
			assert.equal(canEatAnythingElse, false,"Horse can eat plastic, not-food and anything else");
		
		});


		



	});
