'use strict'

for (let i = 1; i <= 100; i++) {

    //multipli di 3 che di 5 stampi 'FizzBuzz'
    if (i % 15 == 0)
        console.log("FizzBuzz");
    // se multipli di 3 stampo 'Fizz'
    else if (i % 3 == 0)
        console.log("Fizz");
    // se multipli di 3 stampo 'Buzz'
    else if (i % 5 == 0)
        console.log("Buzz");
    //altrimenti stampo il valore di 'i'
    else console.log(i);

}