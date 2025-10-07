let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 == 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log(message)) //on success
    .catch((error) => console.error(error)); //on failure
    

