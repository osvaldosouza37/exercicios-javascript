/*class Pessoa{

}

const Pessoa = class{

}

const Pessoa = class Pessoa{

}
*/
class Pessoa{
    constructor(nome){
        this.nome = nome;
        this.podeFalar = true;
    }

    saudacao(){
        if(this.podeFalar){
            console.log('Oi, meu nome é '+this.nome);
        }
    }
}

const p1 = new Pessoa('Osvaldo');

//p1.saudacao();


class Funcionario extends Pessoa{
    constructor(nome,funcao){
        super(nome);
        this.funcao = funcao;
    }

    saudacao(){
        if(this.podeFalar){
            console.log('Oi, meu nome é '+this.nome+' eu sou um '+this.funcao);
        }
    }
}

const f1 = new Funcionario('Osvaldo','professor');

//console.log(f1.nome);
//f1.saudacao();

class Aluno{

    constructor(nome,idade,serie){
        this._nome = nome;
        this._idade = idade;
        this._turma = serie;
    }
}

const aluno = new Aluno('Maria',26,'JavaScript');
const aluno2 = new Aluno(idade=30,serie='Java',nome='Pedro');
console.log(aluno._nome);
console.log(aluno.turma);

console.log(aluno2.nome);
