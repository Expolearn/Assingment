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



        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('what is your age?', age => {


            if (age < 19) {

                console.log('NotAllowed');

            } else if (age >= 20 && age < 100) {

                console.log('allowed');
                console.log('your a female');

            } else {

                console.log('Too old');
            }

            readline.close();
        });

    } else {

        console.log('Too old');
    }

    readline.close();
});