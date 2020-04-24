const REQ = new XMLHttpRequest();
const URL = "https://petstore.swagger.io/v2"
const username = 

REQ.open('GET', URL + `/user/${username}`);
REQ.setRequestHeader('Content-Type', 'Application/json');
REQ.responseType = 'json';
REQ.onload = () => {
    if (REQ.status === 200) {
        document.querySelector('#username').value = REQ.response.username;
    }
}
REQ.send();
