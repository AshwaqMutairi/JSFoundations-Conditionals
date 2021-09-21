const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);

let num1 = prompt("Please enter the first number: ");
//num1 = ("num1");
let num2 = prompt("Please enter the second number: ");
//num2 = ("num2");
let op = prompt("Please choose the operation: (+, -, /, *): ");
let num3 = 0; 
//num3 = ("num3");

if (!isNaN(num1) && !isNaN(num2))
{
    if (op === "+")
    {
        num3 = parseInt(num1) + parseInt(num2);
        //    num3 = +num1 + +num2;
    }
    else if (op == "-")
    {
        num3 = num1 - num2;
    }
    else if (op == "/")
    {
        num3 = num1 / num2;
    }
    else if (op == "*")
    {
        num3 = num1 * num2;
    }
    else
    {
        console.log("please enter valid operation");
    }

    console.log(`${num1} ${op} ${num2} = ${num3}`);

}
else
{
    console.log("Invalid numbers");
}



//node cala.js