const colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];

// Steps 5-11
function buildP(placeholder, num) {

    let p = document.createElement('p');
    let text = document.createTextNode(`Have you tried turning it off and back on again?`);

    p.appendChild(text);
    placeholder.appendChild(p);
}

buildP(document.querySelector('#placeholder'));

// Steps 12-18
function buildP(placeholder, num) {
    let i = 0;

    do {
        let p = document.createElement('p');
        let text = document.createTextNode(`Have you tried turning it off and back on again?`);

        p.appendChild(text);
        p.style.color = colours[parseInt(Math.random() * colours.length)];
        placeholder.appendChild(p);
        i++;
    } while (i < num);
}

buildP(document.querySelector('#placeholder'), 6);