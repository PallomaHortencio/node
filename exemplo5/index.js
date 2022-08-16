import chalk from 'chalk';

// para instalar o chalk utilizamos o comando npm instaal chalk
// chalk é um dos muitos pacotes disponíveis no repositório npmjs.com

let aluno = "Palloma";
let idade = 21;

console.log(chalk.red('Trabalhando com NPM'));
if(idade > 18) {
    console.log(`${aluno} ${chalk.magenta ('está aprovada')}`);
} else {
    console.log(`${aluno} ${chalk.yellow ('está reprovada')}`);
}