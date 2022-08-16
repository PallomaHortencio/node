import chalk from 'chalk';

let aluno = "Palloma";
let idade = 21;

console.log(chalk.bgRed('Trabalhando com NPM'));
if(idade => 18) {
    console.log(`${aluno} está aprovado!`);
} else {
    console.log(`${aluno} está reprovado!`);
}