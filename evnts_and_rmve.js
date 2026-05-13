let chld1 = document.querySelector("#chld");

chld1.addEventListener('click', function(evnt){
    chld1.textContent += " clicked";
    console.log(evnt.target);
    console.log(evnt.changeTouches);
});

let input = document.querySelector("#inp");

function add(evnt){
    chld.textContent += " Pasted !";
    console.log(evnt.shiftKey);
}

input.addEventListener("paste", add)




let heads = document.querySelectorAll(".hds");
let headsAry = Array.from(heads);

let i;

for(i = 0; i<3; i++){
    headsAry[i].addEventListener("click", function(evnt){
        alert("You clicked a header");
        clckdHdr = evnt.target;// target is the element that triggered event
        clckdHdr.parentElement.removeChild(clckdHdr);
    });
}

let link = document.querySelector("a");
link.addEventListener("click", function(evnt){
    evnt.preventDefault();
    alert("Default event is prevented");
})




