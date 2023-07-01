const input = document.querySelector('input')
const button = document.querySelector('button')
const listas = document.querySelector('ul')


let myList = []

function addTarefas() {

    myList.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''

    mostrarTarefas()
};


function mostrarTarefas() {
    let novaLista = ''

    myList.forEach((item, index) => {
        novaLista = novaLista + `
        <li class="bg-gray-100 shadow-md flex h-12 items-center justify-between px-3.5 rounded-xl mb-5 hover:opacity-100" onclick="concluirTarefa(${index})" id="${item.concluida ? 'done' : ''}" " >
        <img src="./assets/checked.png" alt="check-tarefa" class="h-6 opacity-0 hover:opacity-100 ease-in duration-300 ">
        <p>${item.tarefa}</p>
        <img src="./assets/trash.png" alt="lixeira" class="h-6 opacity-0 hover:opacity-100 ease-in duration-300 " onclick="deletarIten(${index})">
      </li>

        `
    });

    listas.innerHTML = novaLista

};

function concluirTarefa(index){

    myList[index].concluida = !myList[index].concluida

    mostrarTarefas()
};

function deletarIten(index){

    myList.splice(index, 1)

    mostrarTarefas()


};

button.addEventListener('click', addTarefas)