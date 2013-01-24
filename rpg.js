// Global Data
var classlist = ["Mage","Cleric","Warrior", "Archer",];
var enemylist = ["Goblin", "Toad", "Turtle", "Squirtle"]


// Local Data 
// Character Data
var charsheet = new Object();
charsheet.cname = prompt("What is your name?" , "Baka");
charsheet.myclass = classlist[Math.floor(Math.random()*classlist.length)];
charsheet.ATK = attack();
charsheet.DEF = defense();
charsheet.Health = health();
charsheet.MP = mp();

//Enemy Data
var enemy = new Object();
enemy.name = enemylist[Math.floor(Math.random()*enemylist.length)];

//Functions -----------------------------------------
//Attack
function attack(){
	if (charsheet.myclass == "Mage"){
		return Math.floor(Math.random() * (20 - 10)) + 10;
	}
	if (charsheet.myclass == "Cleric"){
		return Math.floor(Math.random() * (21 - 13)) + 13;
	}
	if (charsheet.myclass == "Warrior"){
		return Math.floor(Math.random() * (25 - 15)) + 15;
	}
	if (charsheet.myclass == "Archer"){
		return Math.floor(Math.random() * (20 - 10)) + 10;
	}
}
//Defense
function defense(){
	if (charsheet.myclass == "Mage"){
		return Math.floor(Math.random() * (5 - 2)) + 2;
	}
	if (charsheet.myclass == "Cleric"){
		return Math.floor(Math.random() * (8 - 2)) + 2;
	}
	if (charsheet.myclass == "Warrior"){
		return Math.floor(Math.random() * (8 - 3)) + 3;
	}
	if (charsheet.myclass == "Archer"){
		return Math.floor(Math.random() * (3 - 1)) + 1;
	}
}
//Health
function health(){
	if (charsheet.myclass == "Mage"){
		return Math.floor(Math.random() * (90 - 70)) + 70;
	}
	if (charsheet.myclass == "Cleric"){
		return Math.floor(Math.random() * (110 - 80)) + 80;
	}
	if (charsheet.myclass == "Warrior"){
		return Math.floor(Math.random() * (120 - 90)) + 90;
	}
	if (charsheet.myclass == "Archer"){
		return Math.floor(Math.random() * (100 - 60)) + 60;
	}
}
// MP
function mp(){
	if (charsheet.myclass == "Mage"){
		return Math.floor(Math.random() * (120 - 90)) + 90;
	}
	if (charsheet.myclass == "Cleric"){
		return Math.floor(Math.random() * (110 - 80)) + 80;
	}
	if (charsheet.myclass == "Warrior"){
		return Math.floor(Math.random() * (90 - 60)) + 60;
	}
	if (charsheet.myclass == "Archer"){
		return Math.floor(Math.random() * (100 - 70)) + 70;
	}
}
// End Functions --------------------------------------------------

//Output
document.getElementById("name").innerHTML=("Name: " + charsheet.cname);
document.getElementById("class").innerHTML=("Class: " + charsheet.myclass);
document.getElementById("hp").innerHTML=("Health: " + charsheet.Health);
document.getElementById("mp").innerHTML=("MP: " + charsheet.MP);
document.getElementById("atk").innerHTML=("Attack: " + charsheet.ATK);
document.getElementById("def").innerHTML=("Defense: " + charsheet.DEF);
console.log(charsheet);
console.log(enemy);
