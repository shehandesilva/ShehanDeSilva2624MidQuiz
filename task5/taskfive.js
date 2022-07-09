var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('please enter a number ', function(number){
    if(number % 2 == 0) {
        console.log("Even number");
    }

    else if(isNaN(number)){
        console.log("Please try again");
    }

    else {
        console.log("Odd number");
    }  

    readline.close();
});