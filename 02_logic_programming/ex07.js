const fizzBuss = (n) => {
    if(n % 3 === 0 && n % 5 === 0){
        return "fizzBuzz"
    } else if(n % 5 === 0) {
        return "buzz"
    } else if(n % 3 === 0){
        return "fizz"
    }
    return n
}

for(let i = 0; i <= 50; i++){
    console.log(`${i}: ` + fizzBuss(i))
}