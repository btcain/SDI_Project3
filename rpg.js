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
enemy.attack = Math.floor(Math.random()*(15 - 10) + 10);
enemy.defense = Math.floor(Math.random() * (3 - 1)) + 1;
enemy.health = Math.floor(Math.random() * (80 - 50)) + 50;
enemy.mp = Math.floor(Math.random() * (80 - 50)) + 50;


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

// Battle Functions ( Called by Browser )
function battle(){
var battle = 1;
var playerturn = 1;
var monsterturn = 0;
while (battle == 1){
	while (playerturn == 1){	
		enemy.health = enemy.health - (Math.ceil(Math.random(charsheet.attack)*10) - enemy.defense);
		console.log(enemy.name + "'s Health is now " + enemy.health);
		document.getElementById("mhp").innerHTML=("Health: " + enemy.health);
		playerturn = 0;
		monsterturn = 1;
	}
	while (monsterturn == 1){
		charsheet.Health = charsheet.Health - (Math.ceil(Math.random(enemy.attack)*10) - charsheet.DEF);
		console.log(charsheet.cname + "'s Health is now " + charsheet.Health);
		document.getElementById("hp").innerHTML=("Health: " + charsheet.Health);
		playerturn = 1;
		monsterturn = 0;
		
	}

if (enemy.health <= 0){
	battle = 0;
	console.log("You Win!")
	document.getElementById("victory").innerHTML=("You Win!");
}

if (charsheet.Health <= 0){
	battle = 0;
	console.log("You have been defeated.")
	document.getElementById("victory").innerHTML=("You have been defeated.");
}
}
}

// End Functions --------------------------------------------------









//Output
//Character Output
document.getElementById("name").innerHTML=("Name: " + charsheet.cname);
document.getElementById("class").innerHTML=("Class: " + charsheet.myclass);
document.getElementById("hp").innerHTML=("Health: " + charsheet.Health);
document.getElementById("mp").innerHTML=("MP: " + charsheet.MP);
document.getElementById("atk").innerHTML=("Attack: " + charsheet.ATK);
document.getElementById("def").innerHTML=("Defense: " + charsheet.DEF);

//Enemy Output
document.getElementById("mname").innerHTML=("Name: " + enemy.name);
document.getElementById("mhp").innerHTML=("Health: " + enemy.health);
document.getElementById("mmp").innerHTML=("MP: " + enemy.mp);
document.getElementById("matk").innerHTML=("Attack: " + enemy.attack);
document.getElementById("mdef").innerHTML=("Defense: " + enemy.defense);

//For Testing Purposes
console.log(charsheet);
console.log(enemy);
