const REQ = new XMLHttpRequest();
const URL = "https://petstore.swagger.io/v2"
const username = localStorage.getItem('username');

console.log(username);
// To load when the page loads 
REQ.open('GET', URL + `/user/${username}`);
REQ.setRequestHeader('Content-Type', 'Application/json');
REQ.responseType = 'json';
REQ.onload = () => {
    if (REQ.status === 200) {
        let responseobj = REQ.response;
        document.querySelector('#username').value = responseobj.username;
        document.querySelector('#firstName').value = responseobj.firstName;
        document.querySelector('#lastName').value = responseobj.lastName;
        document.querySelector('#email').value = responseobj.email;
        document.querySelector('#password').value = responseobj.password;
        document.querySelector('#phone').value = responseobj.phone;
    }
}
REQ.send();

let updateButton = document.querySelector('#updateButt');
let jsonString;
function getData() {
    let username = document.querySelector('#username').value;
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let phone = document.querySelector('#phone').value;

    jsonString = JSON.stringify({
        "username": username,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
        "phone": phone
    });
}
function updateUser() {
    getData();
    REQ.open('PUT', URL + `/user/${username}`);
    REQ.setRequestHeader('Content-type', 'application/json');
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log(REQ.response);
            localStorage.setItem('username', document.querySelector('#username').value);
            window.location.href = "http://127.0.0.1:5500/Pet_Store_API/Views/Dashboard.html";
        }
    }
    REQ.send(jsonString);
}

updateButton.addEventListener('click', () => {
    event.preventDefault();
    updateUser();
})

