var pokemonArray = [staryu, raichu, jigglypuff, poliwhirl, muk, exeggcute]

//var prompt = require('prompt-sync')();

var staryu = {
'attack' : 'flamethrower',
'HP' : 45,
'name' : "staryu",
'type' : "water",
'def' : 55,
'legend' : true,
}

var raichu = {
'attack' : 'thundershock',
'HP' : 60,
'name' : "raichu",
'type' : "electric",
'def' : 55,
'legend' : true,
}

var jigglypuff = {
'attack' : 'rest',
'HP' : 115,
'name' : "jigglypuff",
'type' : "fairy and normal",
'def' : 20,
'legend' : true,
}

var poliwhirl = {
'attack' : 'hypnosis',
'HP' : 65,
'name' : "poliwhirl",
'type' : "water",
'def' : 65,
'legend' : true,
}

var muk = {
'attack' : 'sludge wave',
'HP' : 105,
'name' : "muk",
'type' : "poison",
'def' : 75,
'legend' : false,
}

var exeggcute = {
'attack' : 'extrasensory',
'HP' : 60,
'name' : "exeggcute",
'type' : "psychic and grass",
'def' : 80,
'legend' : true,
}

function printRoster() {
    var pokeLength = pokemonArray.length;
    for (var i=0; i<6; i++) {
    console.log(pokemonArray);
}
}

function pokemonAttack() {
    for (var i=0; i<6; i++){
    pokemonArray[i].HP -= 10;
    }
}

console.log(" Your pokemon has been attacked, -10 HP ")
pokemonAttack();
printRoster();

