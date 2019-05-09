var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SC22.jpg') {
      myImage.setAttribute ('src','images/SC2P.jpg');
    } else {
      myImage.setAttribute ('src','images/SC22.jpg');
    }
}