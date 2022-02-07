function genRandomCode(){

    var result = Math.floor(1000 + Math.random()*9000);

    result = String(result);
    
    return typeof result;
}

console.log(genRandomCode());