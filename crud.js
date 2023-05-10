document.querySelector("#salvar").addEventListener("click", cadastrar)

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

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

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