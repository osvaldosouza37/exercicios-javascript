document.querySelector('#inserir').onclick = () =>{
    if(document.querySelector('#tarefa').value.length == 0){
        alert("Por favor entre com uma tarefa.")
    }
    else{
        document.querySelector('#quadro').innerHTML += `
            <div class="item">
                <span id="itemNome">
                    ${document.querySelector('#tarefa').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var listaTarefas = document.querySelectorAll(".delete");
        
        for(var i=0; i<listaTarefas.length; i++){
            listaTarefas[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".item");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completo');
            }
        }

        document.querySelector("#tarefa").value = "";
    }
}