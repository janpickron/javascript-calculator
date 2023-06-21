//  EXAMINE THE DOCUMENT OBJECT

//console.log("Hey Janice");
console.dir(document);
//console.log(document.domain);
//console.log(document.getElementById('header-title'));
//console.log("Hello Janice");

function enterMsg(){
    var showMessage = "<h3>I got your Enter button clicked</h3>";
    var block = document.getElementById("message");
    
    block.innerHTML = showMessage;
    console.log(block.innerHTML);
}