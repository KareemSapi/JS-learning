function genRandomCode(){
    
    var num1; 
    var num2;

    var result = Math.floor(num1 + Math.random()*num2);

    result = String(result);
    
    return typeof result;
}

console.log(genRandomCode());
