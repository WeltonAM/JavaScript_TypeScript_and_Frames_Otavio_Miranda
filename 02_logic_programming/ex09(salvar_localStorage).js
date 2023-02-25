const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

const criaLi = () => {
    const li = document.createElement('li')
    li.classList.add('flexible')
    return li
}

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return alert("Adicione uma tarefa");   
        criaTarefa(inputTarefa.value)
    }
})

const criaBotaoApagar = (li) => {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class', 'apagar')
    li.appendChild(btnApagar)
}

const limpaInput = () => {
    inputTarefa.value = ""
    inputTarefa.focus()
}

const criaTarefa = (textoInput) => {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
} 

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return alert("Adicione uma tarefa"); 
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li')
    const arrayTarefas = []

    for(let tarefa of liTarefas) {
        let tarefaText = tarefa.innerText
        tarefaText = tarefaText.replace('Apagar', '').trim()
        arrayTarefas.push(tarefaText)
    }

    const tarefasJSON = JSON.stringify(arrayTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

const recuperaTarefasSalvas = () => {
    let tarefas = localStorage.getItem('tarefas')
    tarefas = JSON.parse(tarefas)

    for(let tarefa of tarefas){
        criaTarefa(tarefa)
        console.log(tarefa)
    }
}
recuperaTarefasSalvas()