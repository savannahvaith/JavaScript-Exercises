const REQ = new XMLHttpRequest();

let login = document.querySelector('#loginButt');

function loginUser() {
    let username = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;
    REQ.onload = () => {
        if (REQ.status === 200) {
            console.log('Successfully Logged in');
            console.log(REQ.response);
            window.location.href = "http://127.0.0.1:5500/Pet_Store_API/Views/dashboard.html";

        }
    }
    REQ.open('GET', `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`);
    REQ.setRequestHeader('Content-type', 'Application/json');
    REQ.send();
}

login.addEventListener('click', (evt) => {
    evt.preventDefault();
    loginUser();
});

