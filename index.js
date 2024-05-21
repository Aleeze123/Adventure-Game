#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.yellow.underline.italic("\n\t\t WELCOME TO ALEEZE ADVENTURE GAME"));
//Class Player & Opponent
class player {
    name;
    fuel = 100;
    constructor(name) {
        (this.name = name), this.fuel;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        (this.name = name), this.fuel;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
//Player Name & Opponent Select
let player1 = await inquirer.prompt({
    name: "name",
    type: "input",
    message: (chalk.underline.white("Enter your name")),
});
console.log(chalk.cyan(player1.name));
let opponent1 = await inquirer.prompt({
    name: "list",
    message: "Select the opponent",
    type: "list",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
console.log(chalk.cyan(opponent1.list));
//Gather Data
let p1 = new player(player1.name);
let o1 = new opponent(opponent1.list);
//Conditions Apply
do {
    //Skeleton
    if (opponent1.list === "Skeleton") {
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: (chalk.underline.white("Select the operation")),
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.underline.red("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.green("Congratulations! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.magenta(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.underline.red("You Loose, Better luck next time"));
            process.exit();
        }
    }
    //Assassin
    if (opponent1.list === "Assassin") {
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: "Select the operation",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.underline.red("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.underline.green("Congratulations! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.magenta(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.underline.red("You Loose, Better luck next time"));
            process.exit();
        }
    }
    //zombie
    if (opponent1.list === "Zombie") {
        let opponent2 = await inquirer.prompt({
            name: "fight",
            message: "Select the operation",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run of the alive"],
        });
        if (opponent2.fight === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.underline.red("You Loose, Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.green("Congratulations! You Win the Game"));
                    process.exit();
                }
            }
        }
        if (opponent2.fight === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.magenta(`your fuel portion is ${p1.fuel}`));
        }
        if (opponent2.fight === "Run of the alive") {
            console.log(chalk.bold.red.underline("You Loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
