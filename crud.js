document.querySelector("#salvar").addEventListener("click", cadastrar)

let lista_tarefas =[]

window.addEventListener("load", ()=> {
    lista_tarefas = JSON.parse(localStorage.getItem("lista_tarefas"))
    lista_tarefas.forEach((tarefa) => {
        document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    })
})

function cadastrar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let notas = document.querySelector("#notas").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo: titulo,
        descricao: descricao,
        notas: notas,
        categoria: categoria,
    }

    if (tarefa.titulo.length == 0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
    }

    lista_tarefas.push(tarefa)

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

    localStorage.setItem("lista_tarefas", JSON.stringify (lista_tarefas))

    modal.hide()

}

function deletarCard(botao){
    botao.parentNode.parentNode.parentNode.remove()
}

function gerarCard(tarefa){
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
            <a href="#" class="btn btn-success">
                <i class="bi bi-check-lg"></i>
            </a>
            <a href="#" onClick="deletarCard(this)" class="btn btn-danger">
                <i class="bi bi-trash"></i>
            </a>
        </div>
    </div> <!-- card -->
</div> <!-- col -->`
}