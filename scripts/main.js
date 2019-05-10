var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SC22.jpg') {
      myImage.setAttribute ('src','images/SC2P.jpg');
    } else {
      myImage.setAttribute ('src','images/SC22.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi there, ' + myName;
}