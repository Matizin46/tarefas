let tarefas = new Array()

function fnSalvarTarefas(){
    //pegar tarefa e colocar no array de tarefas

    let novaTarefa = document.getElementById("tarefa").value
    tarefas.push(novaTarefa)
}


function fnExibirTarefas(){
    //exibir as tarefas na #lista-tarefas
    let listaDeTarefas = ""
    for(let i=0; i < tarefas.length ; i++){
        listaDeTarefas += "<li>" + tarefas[i] + "</li>"
    }
    document.getElementById("lista-tarefas").innerHTML = listaDeTarefas
}

let frutas = ['🍓', '🍊', '🍎', '🍉', '🥑']

for(let i=0 ; i < frutas.length ; i++){
    console.log(frutas[i])
}

