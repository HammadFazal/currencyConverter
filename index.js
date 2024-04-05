#!/usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';
const currency = {
    USD: 1,
    EUR: 0.89,
    GBP: 0.75,
    INR: 74.85,
    PKR: 278.00
};
let userInput = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter amount',
        type: 'number'
    }
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount_dollarAmount = amount / fromAmount;
let result = baseAmount_dollarAmount * toAmount;
console.log(chalk.blue(result));
