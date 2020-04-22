// Add code here for part 5-7
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);

const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for (let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them

//tnrParagraph.addEventListener('mouseover', mouseOver);

const mouseOver = event => {
    event.target.style.backgroundColor = 'limegreen';
    if (event.target.textContent.indexOf('background') === -1) {
        event.target.textContent += ', I have had my background changed on mouse over';
    }
    else {
        event.target.textContent = event.target.textContent.replace("out", "over");
    }
};

tnrParagraph.addEventListener('mouseover', mouseOver);

const mouseOut = event => {
    event.target.style.backgroundColor = 'yellow';
    if (event.target.textContent.indexOf('background') === -1) {
        event.target.textContent += ', I have had my background changed on mouse out';
    }
    else {
        event.target.textContent = event.target.textContent.replace("over", "out");
    }
}

tnrParagraph.addEventListener('mouseout', mouseOut);

const elementClick = (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.textContent = "I have no event listeners attatched to me now";
    document.querySelector('button#fonts').removeEventListener('click', tnrToArial);
    event.target.removeEventListener('click', elementClick);
    event.target.removeEventListener('mouseover', mouseOver);
    event.target.removeEventListener('mouseout', mouseOut);
    console.log(event.target.id);
    if (event.target.id === 'tnrParagraph') {
        blueParagraph.textContent = "Event listeners enabled";
        blueParagraph.addEventListener('mouseover', mouseOver);
        blueParagraph.addEventListener('mouseout', mouseOut);
        blueParagraph.addEventListener('click', elementClick);
    }
    else {
        tnrParagraph.textContent = "Event listeners enabled";
        tnrParagraph.addEventListener('mouseover', mouseOver);
        tnrParagraph.addEventListener('mouseout', mouseOut);
        tnrParagraph.addEventListener('click', elementClick);
    }
}

tnrParagraph.addEventListener('click', elementClick);

