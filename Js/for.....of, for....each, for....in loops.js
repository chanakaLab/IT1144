let fruits = ["apple", "banana", "orange"];

function print(fruit){
    console.log("foreach", fruit);
}

fruits.forEach(print);

let item = "";

for(item of fruits){
    console.log("for of", item);
}

const personObj = {
    "name":"alex",
    "age":25,
    "result":["A", "C", "S"]
}

for(key in personObj){
    console.log(key, personObj[key])
}

