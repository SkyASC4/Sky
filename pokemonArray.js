myPokemonRoster = ["tentacruel","weepinbell","muk","ditto","wurmple"];
var firstToFight = ["tentacruel"];
var secondToFight = ["weepinbell"];
console.log(myPokemonRoster)
myPokemonRoster.pop()
// Popped string: wurmple
myPokemonRoster.push("pikachu");
myPokemonRoster.push("jigglypuff");
// Added: pikachu and jigglypuff
for (var i = 0; i < 6 ; i++) {
    console.log(myPokemonRoster[i]);
}
// It took about 7 tries to get this part right ^
for (var i = 6; i < 7 ; i++) {
    console.log(myPokemonRoster[i]);
}