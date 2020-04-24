const REQ = new XMLHttpRequest();
const URL = "https://petstore.swagger.io/v2";
// Set the username property 
document.querySelector('#user').innerHTML = localStorage.getItem("username") + "'s Pet store";
let logout = document.querySelector('#logoutButt');
function logoutUser() {
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log('Successfully Logged out');
            console.log(REQ.response);
            window.location.href = "http://127.0.0.1:5500/Pet_Store_API/Views/index.html";
        }
    }
    REQ.open("GET", URL + "/user/logout")
    REQ.setRequestHeader('Content-Type', 'Application/json');
    REQ.send();
}

logout.addEventListener('click', (evt) => {
    evt.preventDefault();
    logoutUser();
});

// Add pet functionality 
let addButton = document.querySelector('#AddPet');
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


function addPet() {
    getData();
    REQ.onload = () => {
        if (REQ.status === 200) {
            window.alert('Addedd successfully');
            console.log(REQ.response);
            data = "";
        }
    }
    REQ.open('POST', URL + '/pet');
    REQ.setRequestHeader('Content-Type', "Application/JSON");
    REQ.send(data);
}

addButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    addPet();
})

// Delete Pet
let deleteButton = document.querySelector('#DeletePet');
function deletePet() {
    let id = document.querySelector('#id').value;

    REQ.onload = () => {
        if (REQ.status === 200) {
            window.alert('Pet Successfully Deleted');
            console.log(REQ.response);
        }
    }
    REQ.open('DELETE', URL + `/pet/${id}`);
    REQ.setRequestHeader('Content-Type', 'Application/JSON');
    REQ.send();

}
deleteButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    deletePet();
});

//Get info
let infoButton = document.querySelector('#GetPet');
function getInfo() {
    let id = document.querySelector('#id').value;
    REQ.onload = () => {
        if (REQ.status === 200) {
            window.alert('Found your pet... ');
            console.log(`I responded with... `);
            console.dir(REQ.response);
            let responseObject = REQ.response;
            document.querySelector('#getPet').innerHTML = responseObject.name

        }
    }
    REQ.open("GET", URL + `/pet/${id}`);
    REQ.setRequestHeader('Content-Type', 'Application/JSON');
    REQ.responseType = 'json';
    REQ.send();
}

infoButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    getInfo();
})