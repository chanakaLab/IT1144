const lib = require("readline");

const reader = lib.createInterface({input : process.stdin, output: process.stdout})

function write(answ){
    console.log(answ);
    reader.close();
}

reader.question("Say something :", write);

