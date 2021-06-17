var user = {
    firstname: "",
    surname: " ",
    nickname: " ",
    phoneNumber: 00000000000,
    PhysicalAddress: " ",
    education: " ",
    Password: "",
    age: "",
    Maritalsstatus: "",
    Race: "",
};

console.table(user);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('what is your age?', age => {


    if (age < 19) {

        console.log('NotAllowed');

    } else if (age >= 20 && age < 100) {

        console.log('allowed');

    } else {

        console.log('Too old');
    }

    readline.close();
});