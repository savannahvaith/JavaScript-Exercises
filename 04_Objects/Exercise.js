let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
};
console.log(darthVader);

// Instruction 2 - Access object properties
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.Jedi}`);

// Instruction 3 - Add to the map
darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];
console.log(darthVader);
console.log(`Darth Vader's first child is called ${darthVader.childNames[0]}`);

// Instruction 4 - Iterate over the object
for (let key in darthVader) {
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`);
}

// Instruction 5 - Manipulate the object
darthVader.allegiance = "The light side"
console.log(darthVader);
darthVader.sith = false;
delete darthVader.children;
console.log(darthVader);
let { allegiance, weapon, sith, childNames } = darthVader;
console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);
darthVader = {}
console.log(darthVader);