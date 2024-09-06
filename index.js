#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 200
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green("Enter from Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "to",
        message: chalk.green("Enter to Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    },
    {
        name: "amount",
        message: chalk.green("Enter your Amount"),
        type: " number",
    }
]);
let fromAmount = currency[user_answer.from]; //exchage rate
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
