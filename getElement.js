let prntDiv = document.getElementById("prnt");

let divs = document.getElementsByClassName("divs");
let div1 = divs[0];
let div2 = divs[1];

let heads = document.getElementsByTagName("h2");
let head3 = heads[2];

headsArray = Array.from(heads);

headsArray.forEach(function(head){
    head.innerText = "Changed by js";
})

