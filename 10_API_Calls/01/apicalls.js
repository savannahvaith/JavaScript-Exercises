const REQ = new XMLHttpRequest();

let demo = document.querySelector('#demo');
let butt1 = document.querySelector('#butt1');

function apiCall() {

    REQ.onload = () => {
        if (REQ.status === 200) { // Status code 200: 
            console.log(`I responded with... `);
            console.dir(REQ);
            let responseObject = REQ.response;
            console.log(responseObject.username);
            demo.innerHTML = responseObject.username;
        }
        else {
            console.log(`Ooops, something went wrong`)
        }
    }

    REQ.open('GET', './data.json');
    REQ.setRequestHeader('Content-type', "Application/json");
    REQ.responseType = 'json';
    REQ.send();
}

butt1.addEventListener('click', apiCall);