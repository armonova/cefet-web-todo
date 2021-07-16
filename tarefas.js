class Categoria {
    static LAZER = 'lazer';
    static COMPRAS = 'compras';
    static ESTUDOS = 'estudos';
    static categoria(categoria) {
        return `categoria-${categoria}`
    }
}
class Tarefa {
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada;
    }
    adicionaNaPagina(containerEl) {
        const li = document.createElement('li');
        
        li.innerHTML = this.nome;
        li.classList.add(
            'item-tarefa',
            this.realizada ? 'marcado' : null,
            Categoria.categoria(this.categoria)
        )

        containerEl.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('marcado');
            this.realizada = !this.realizada;
        });
    }
}

addTaskButton = document.querySelector('#incluir-nova-tarefa');
nameField = document.querySelector('#nova-tarefa-nome');
categoryField = document.querySelector('#nova-tarefa-categoria');
filterField = document.querySelector('#filtro-de-categoria');

let tarefa1 = new Tarefa('Comprar leite', 'compras', false);
let tarefa2 = new Tarefa('Escutar chimbinha', 'lazer', true);


let tarefas = [tarefa1, tarefa2];

listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.innerHTML = '';

tarefas.forEach(tarefa => {
    tarefa.adicionaNaPagina(listaTarefas);
})

addTaskButton.addEventListener('click', () => {
    newTask = new Tarefa(nameField.value, categoryField.value, false);

    tarefas.push(newTask);

    newTask.adicionaNaPagina(listaTarefas);

    nameField.value = null;
    nameField.focus();
});