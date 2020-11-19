var myHeading = document.querySelector('h1');

var a = 6
if(a === 6){
    myHeading.textContent = 'Hello 6 world!';
}

myHeading.onclick = function(){
    var myName = prompt('Please enter your name: ');
    myHeading.textContent = 'Hello, ' + myName;

}