let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let myTitle = document.querySelector('h1');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/teatro.png');
      myTitle.innerText = 'Teatro';
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
      myTitle.innerText = 'Mozilla';
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}