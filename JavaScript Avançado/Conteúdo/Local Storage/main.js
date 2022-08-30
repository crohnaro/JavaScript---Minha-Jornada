/* 

LOCAL STORAGE

*/

const tarefas = [
    {tarefa :'estudar node'},
    {tarefa :'estudar js'},
    {tarefa :'estudar react'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefa', 'estudar javascript')

const valor = localStorage.getItem('tarefa')


const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)