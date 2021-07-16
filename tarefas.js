
// Exercício 0
class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
}

let tarefa1 = new Tarefa('Comprar leite', 'compras', false);
let tarefa2 = new Tarefa('Escutar chimbinha', 'lazer', true);


let tarefas = [tarefa1, tarefa2];