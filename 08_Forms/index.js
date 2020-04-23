let uname = document.querySelector("#username");
let email = document.querySelector("#email");
let cardType = document.querySelectorAll("input[name='cardtype']");

let butt1 = document.querySelector("#butt1");

function getValue(field) {
    console.log(field.value);
    console.log(field.value.length);
    console.log(field.name);
    console.log(field.type);
}

butt1.addEventListener('click', function (evt) {
    evt.preventDefault();
    getValue(uname);
})


// Selecting groups 
// change event: occurs when the value of an element is changed 
// only works on form fields!!!

console.log(cardType);
function isChecked() {
    for (let i = 0; i < cardType.length; i++) {
        if (cardType[i].checked) {
            console.log(cardType[i].value);
        }
    }
}

for (let i = 0; i < cardType.length; i++) {
    cardType[i].addEventListener('change', isChecked);
}

// Access Select Options
// // Options held as an array 
// Zero index collection 
// Special property "selectIndex"  -refers to the users choice

function selectFunction() {
    let selected = document.querySelector("#title").selectedIndex;
    let option = document.querySelectorAll('option');
    console.log(option[selected].value);
}

butt1.addEventListener('click', selectFunction);