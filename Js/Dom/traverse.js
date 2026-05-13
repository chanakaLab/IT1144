let heading = document.querySelector("h3");

console.log(heading.parentNode);
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);

let prntDiv = document.querySelector("#prnt");
console.log(prntDiv.childNodes) // returns line breaks
console.log(prntDiv.children); // not return line break

let input = document.querySelector("#inp");

console.log(input.nextSibling)
console.log(input.nextElementSibling)

console.log(input.previousSibling)
console.log(input.previousElementSibling)

parag = document.querySelector("#para");


chld2 = parag.nextElementSibling.querySelector("#chld2");

chld2.textContent += " Well";






