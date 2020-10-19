module.exports.checkIfPrime = (num)=>{
    var notPrime = false;
    for(var i = 2; i < (num/2); i++){
        if((num % i) == 0 && (i != num)){
            notPrime = true;
            break;
        }
    }
    if(notPrime){
        s = num + ' is not prime';
    }else{
        s = num + ' is prime';
    }
    return s;
}