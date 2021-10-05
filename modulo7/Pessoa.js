const aluno = {
    nome: 'Pedro',
    idade: 22,
    curso:'javascript',
    declaracao(){
        return `nome: ${this.nome} - ${this.curso}`;
    }
}

console.log(aluno.nome);

//desestruturação.
let {nome,idade,curso} = aluno;

console.log(nome);
console.log(idade);
console.log(curso);

let cursos = ['php','python','java','javascript']

let [curso1,curso2,...curso3] = cursos;

console.log(curso1);
console.log(curso2);
console.log(curso3);
