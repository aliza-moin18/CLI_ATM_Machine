#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1105;
let pin_Answer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin"
    },
]);
if (pin_Answer.Pin === 1105) {
    console.log("Correct pin code!!");
    let transactionType = await inquirer.prompt([
        {
            name: "Transaction",
            type: "list",
            message: "Please select Transaction",
            choices: ["with drawl", "check balance", "fast cash"]
        },
    ]);
    if (transactionType.Transaction === "with drawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Enter your with drawl amount here."
            },
        ]);
        if (myBalance <= amountAns.Amount) {
            console.log(`"Sorry insufficient balance!!..Your current balance is ${myBalance}"`);
        }
        else if (myBalance -= amountAns.Amount) {
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (transactionType.Transaction === "check balance") {
        console.log(`"Your total balance is ${myBalance}`);
    }
    else if (transactionType.Transaction === "fast cash") {
        let accountType = await inquirer.prompt([
            {
                name: "fast",
                type: "list",
                message: "Enter your amount",
                choices: [6000, 1000, 20000, 40000]
            }
        ]);
        if (myBalance <= accountType.fast) {
            console.log(`"Your balance is insufficient!!...Your current balance is ${myBalance}"`);
        }
        else {
            myBalance -= accountType.fast;
            console.log(`"your remaining balance is: ${myBalance}"`);
        }
    }
    else {
        console.log("Incorrect pin code!!");
    }
}
