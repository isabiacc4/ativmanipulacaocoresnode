const chalk = require("chalk")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual foi a sua nota?  ", (nota) => {
    readline.close();

    //exemplo do grupo
    // if (nota > 7) {
    //     console.log(chalk.green.bold("Parabéns, está aprovado!"))
    // } else if ((nota == 5) || (nota == 6)) {
    //     console.log(chalk.yellow("Está na média, atenção."))    //bg é background
    // } else if (nota < 5) {
    //         console.log(chalk.red("Reprovado!"))    //bg é background
    //     }

    
    //exemplo do professor
        if (nota >= 7) {
            console.log(chalk.green.bold("Parabéns, está aprovado!"))
        } else if (nota >= 5) {
            console.log(chalk.yellow("Está na média, atenção!"))    
        } else {
                console.log(chalk.red("Reprovado!"))    
            }
    })

