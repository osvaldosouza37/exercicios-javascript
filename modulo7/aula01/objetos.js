class Pessoa {
    #_nome;
    #_idade;
    constructor(nome,idade){
      this.#_idade = idade;
      this.#_nome = nome;
    }

    get getNome(){
      return this.#_nome;
    }
    
    set setNome(nome){
      this.#_nome = nome;
    }
    
    get getIdade(){
      return this.#_idade;
    }
    
    set setIdade(idade){
      this.#_idade = idade;
    }

    ficha(){
      return `nome: ${this.#_nome} idade: ${this.#_idade}`;
    }
  }
  
  document.querySelector('#adicionar').onclick = () =>{
    const tudo = document.querySelectorAll('input');  
    
    const nome = document.querySelector('#nome_id').value;
    const idade = document.querySelector('#idade_id').value;
    const telefone = document.querySelector('#telefone_id').value;
    
    const lista = document.querySelector('#lista');

    const p1 = new Pessoa(nome,idade);
    
    //console.log(p1.ficha());
    const item = document.createElement('li');
    item.textContent = p1.ficha();
    lista.appendChild(item);
    //const p1 = new Pessoa(tudo[0].value,tudo[1].value);
    //console.log(tudo[0].value);
    //console.log(tudo[1].value);
    //console.log(tudo[2].value);
  }

  //const p1 = new Pessoa('osvaldo',37)
  
  //console.log(p1.ficha());