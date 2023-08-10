function primeNumber(num) {
    if (num === 1) {
        console.log(`${num} is neither prime nor composite number`);
    }else if (num < 1) {
        console.log(`${num} is not a prime number`);
    }else{
        for (let index = 2; index < num; index++) {
            if (num%index == 0) {
                var result = `${num} is not a prime number`;
                break;
            }else{
                var result =`${num} is a prime number`;
                
            }
            
        }
        console.log(result);
    }
}

primeNumber(11);
primeNumber(21);

