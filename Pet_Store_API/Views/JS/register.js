const REQ = new XMLHttpRequest();

let registerButt = document.querySelector('#registerButt');
let form = document.querySelector('#form');
let data = "{";

function getData() {
    for (let i = 0; i < form.elements.length - 1; i++) {
        data += "\"" + form.elements[i].id + "\": \"" + form.elements[i].value + "\",";
    }
    data = data.substring(0, data.length - 1);
    console.log(data += "}");
    console.log(JSON.parse(data));
}


function registerUser() {
    getData();
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log('Successfully added');
            console.log(REQ.response);
            window.location.href = "http://127.0.0.1:5500/Pet_Store_API/Views/login.html";
        }
    }
    REQ.open('POST', "https://petstore.swagger.io/v2/user");
    REQ.setRequestHeader('Content-type', 'Application/json');
    REQ.send(data);
}

registerButt.addEventListener('click', (event) => {
    event.preventDefault();
    registerUser()
});