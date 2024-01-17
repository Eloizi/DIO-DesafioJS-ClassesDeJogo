const readline = require('readline'); // importa o módulo readline, módulo utilizado para criar uma interface de leitura de dados a partir do terminal.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        //this.tipo = ["guerreiro", "mago", "monge", "ninja"];
    }

    atack() {
        let atacar = ["espada", "magia", "artes marciais", "shuriken"];

        if (this.tipo === "guerreiro") {
            console.log(`\nO ${this.tipo} ${this.nome}, atacou usando ${atacar[0]}`);
        } else if (this.tipo === "mago") {
            console.log(`\nO ${this.tipo} ${this.nome}, atacou usando ${atacar[1]}`);
        } else if (this.tipo === "monge") {
            console.log(`\nO ${this.tipo} ${this.nome}, atacou usando ${atacar[2]}`);
        } else if (this.tipo === "ninja") {
            console.log(`\nO ${this.tipo} ${this.nome}, atacou usando ${atacar[3]}`);
        } else {
            console.log('\nSeu jogador, só pode ser do tipo:  ["guerreiro", "mago", "monge", "ninja"]. \n Tente novamente! ');
        }
    }
}



rl.question('Digite o nome do seu jogador: ', (nome) => {
    rl.question('Digite a idade do seu jogador: ', (idade) => {
        rl.question('Seu jogador, só pode ser do tipo:  ["guerreiro", "mago", "monge", "ninja"]. \nDigite o tipo do seu jogador: ', (tipo) => {

            let novoHero = new Hero(nome, idade, tipo)
            novoHero.atack();
            rl.close();
        });
    });
});

