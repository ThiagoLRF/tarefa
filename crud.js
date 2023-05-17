document.querySelector("#salvar").addEventListener("click", cadastrar)

let lista_tarefas =[]

window.addEventListener("load", ()=> {
    lista_tarefas = JSON.parse(localStorage.getItem("lista_tarefas")) || []
   atualizar()

    })

    document.querySelector("#pendentes").addEventListener("click", () => {
        lista_tarefas = lista_tarefas.filter(tarefa => !tarefa.concluida)
        atualizar()
    })

    document.querySelector(#"busca").addEventListener("keyup",() => {
        const titulo = document.querySelector(#"busca").value
        lista_tarefas =
            lista_tarefas.filter(tarefa => tarefa.titulo.includes(titulo))
            atualizar()
    })

    document.querySelector("#concluidas").addEventListener("click", () => {
        lista_tarefas = lista_tarefas.filter(tarefa => tarefa.concluida)
        atualizar()
    })


function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let notas = document.querySelector("#notas").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        id: Date.now(),
        titulo,
        descricao,
        notas,
        categoria,
        concluida: false
    }

    if (tarefa.titulo.length == 0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
    }

    lista_tarefas.push(tarefa)

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    
    salvar()
    modal.hide()

} 

function atualizar(){
    document.querySelector("#tarefas").innerHTML = ""
    lista_tarefas.forEach((tarefa) => {
        document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
})}

function salvar(){
    localStorage.setItem("lista_tarefas", JSON.stringify (lista_tarefas))
}

function deletarCard(id){
  lista_tarefas = lista_tarefas.filter((tarefa) => tarefa.id != id) //arrow function
  salvar()
  atualizar()
}

function concluir(id){
    let tarefa_encotrada = lista_tarefas.find((tarefa) => tarefa.id == ids)
    tarefa_encotrada.concluida = true
    salvar()
    atualizar()
}

function gerarCard(tarefa){
    const disabled = (tarefa.concluida) ? "disabled" : ""
    return `<div class="col-12 col-md-6 col-lg-3">
    <div class="card">
        <div class="card-header">
           ${tarefa.titulo}
        </div>
        <div class="card-body">
            <p class="card-text">${tarefa.descricao}</p>
            <p>
                <span class="badge text-bg-warning">${tarefa.categoria}</span>
            </p>
            <p class="card-text">${tarefa.notas}</p>
            <a href="#" onClick="concluir(${tarefa.id})" class="btn btn-success ${disabled}">
                <i class="bi bi-check-lg"></i>
            </a>
            <a href="#" onClick="deletarCard(${tarefa.id})" class="btn btn-danger">
                <i class="bi bi-trash"></i>
            </a>
        </div>
    </div> <!-- card -->
</div> <!-- col -->`
}