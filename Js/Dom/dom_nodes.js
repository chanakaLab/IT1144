let prntDiv = document.querySelector("#prnt");

console.log(prntDiv.nodeType);
console.log(prntDiv.nodeName);
console.log(prntDiv.hasChildNodes());

let clone = prntDiv.cloneNode(true);
//giving true clones all the child elements also

