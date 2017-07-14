function superhero(realName, ability, gender, archEnemy) {
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archEnemy = archEnemy
    
    function newAbility(ability2) {
    this.newAbility = ability2;
}
}


function superhero(realName) {
    this.realName = realName;
}

var superman={
    "realName" : "Clark Kent"
};

var batman = {
    "realName" : "Bruce Wayne"
}

console.log(superman.realName)
console.log(superman['realName']);

var staticShock = new superhero("virgil");