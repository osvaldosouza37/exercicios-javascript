//callback

function imprime(valor){
    return 'o valor é: '+valor;
}

function soma(a,b,cb){
    var resultado = a+b;

     console.log(cb(resultado));
}   

soma(10,15,imprime);
/*
let salarioBruto=3000;
let salarioLiquido;

function mensagem(resultado){
    salarioLiquido = resultado;
    console.log(`O salário líquido é: ${salarioLiquido}`);
}

function getSalario(salarioBruto,callback){

    let liquido = 0;

    const inss = salarioBruto*0.11;
    const vr = salarioBruto*0.05;
    const vt = salarioBruto*0.06;
    const fgts = salarioBruto*0.15;

    const descontos = inss + vr + vt + fgts;

    liquido = salarioBruto - descontos;

    return callback(liquido);
}

getSalario(salarioBruto,mensagem);*/