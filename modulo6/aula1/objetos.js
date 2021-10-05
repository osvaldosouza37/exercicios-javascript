var Pessoa = function(nome){
    this.nome = nome;
    this.podeFalar = true;
}

Pessoa.prototype.saudacao = function(){
    if(this.podeFalar)
        console.log('Oi, meu nome é '+this.name);
}

var Funcionario = function(nome, funcao){
    Pessoa.call(this,nome);
    this.funcao = funcao;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.saudacao = function(){
    if(this.podeFalar){
        console.log('Oi meu nome é '+this.nome+' sou '+this.funcao);
    }
}

var f1 = new  Funcionario('osvaldo','professor');

f1.saudacao();