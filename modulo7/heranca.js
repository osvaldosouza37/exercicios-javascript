class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    andar(){
        console.log('andando');
    }

    get getNome(){
        return this.nome;
    }
}

class Aluno extends Pessoa{
    
    constructor(nome, sala){
        super(nome);
        this.sala = sala;
    }

    imprime(){
        return `${this.getNome} - ${this.sala}`; 
    }
}

const a1 = new Aluno('Fred','Java');

console.log(a1.imprime());

a1.andar();