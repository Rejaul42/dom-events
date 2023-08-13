// System number two

function makeRed(){
    document.body.style.backgroundColor= 'red';
}

// system number three

const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;  

function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// system number four

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', makeGreen)

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

// system number five [this will be use]

document.getElementById('make-purple').addEventListener('click', function(){
    document.body.style.backgroundColor= 'purple';
})