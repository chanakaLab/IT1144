const lib = require("readline");

const reader = lib.createInterface({
    input: process.stdin,
    output: process.stdout
});

function revNum(strNum){
    reader.close();
    
    let intNum = Number(strNum);
    
    let cnt, rem, rev = 0;
    
    
    for(cnt=intNum; cnt>0; cnt = Math.trunc(cnt/10)){
        rem = cnt % 10;
        rev = rev * 10 + rem;
    }
    
    console.log(rev);
    
}


reader.question("Enter the number to reverse: ", revNum);











