const chalk = require("chalk")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual foi a sua nota?  ", (nota) => {
    readline.close();

    if (nota > 7) {
        console.log(chalk.green.bold("Aprovado!"))
    } else if ((nota == 5) || (nota == 6)) {
        console.log(chalk.yellow("Aprovado! Está na média, atenção."))    //bg é background
    } else if (nota < 5) {
            console.log(chalk.red("Reprovado!"))    //bg é background
        }
    })

