function genRandomCode(){
    
    var num1; 
    var num2;

    let result = Math.floor(num1 + Math.random()*num2);

    result = String(result);
    
    //return typeof result;
    return result;
}

console.log(genRandomCode());
