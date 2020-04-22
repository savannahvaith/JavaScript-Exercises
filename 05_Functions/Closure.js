// Closure has access to outer functions variables even after the outer function has returned

function celebrityName(firstName) {
    let nameIntro = "Celeb is: "

    // inner function has access to the outer function variables, INCLUDING PARAMETERS
    function lastName(theLastName) {
        return `${nameIntro} ${firstName} ${theLastName}`;
    }

    return lastName;
}

let mjName = celebrityName("Michael") // CelebrityName outerfunction has returned
console.log(mjName);

let fullName = mjName("Jackson");
console.log(fullName);


function celebId() {
    let celebId = 999;
    return {
        getId: function () {
            return celebId;
        },
        setId: function (theNewId) {
            celebId = theNewId;
        }
    }
}

let mjId = celebId();
console.log(mjId);
console.log(mjId.getId()); // 999 
console.log(` Setting the value of ID to 567... `);
mjId.setId(567);
console.log(mjId.getId()); // 567


// Closure Example 3

function cbIDCreatorBuggy(theCelebrities) {
    let uniqueId = 100;

    for (let i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]['id'] = function () {
            return uniqueId + i;
        }
    }
    return theCelebrities;
}


let celeb = [
    { "name": "Stallone", "id": 0 },
    { "name": "Cruise", "id": 0 },
    { "name": "Wills", "id": 0 }
]

let createIdForCelebs = cbIDCreatorBuggy(celeb);
let s = createIdForCelebs[0];
let c = createIdForCelebs[1];
let w = createIdForCelebs[2];
console.log(s.id());
console.log(c.id());
console.log(w.id());

// IFFE - Immediately Invoked Function Expression 

