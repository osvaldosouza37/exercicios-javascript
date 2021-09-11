//var teste = document.getElementById("paragrafo")

//Operadores

// + - * / % módulo, ou resto da divisão (12 % 5 = 2)
// = 
//Operadores lógicos
// && || !
//Para passar na faculdade tem que ter nota > 7 E presença > 75%
//Pode ser guanará OU uva
//! negação 
//Operadores relacionais 
//> >= < <= == ===
// ++ -- +=10
/*
var numero1 = 100, numero2=70

if((numero2==numero1))
    console.log("Existe uma igualdade")
else if(numero2<numero1)
    console.log("Numero 2 é menor do que o número 1")
else
    console.log("Existe uma desigualdade")


opcao = 'i'

switch(opcao){

    case 'a': console.log("quadro de horários")
            break
    case 'e': console.log("boletim")
            break
    case 'i': console.log("documentos")
            break
    default: console.log("opção inválida")
}    

contador =0
flag = true

var texto = document.querySelector("#paragrafo")

while(flag){
    console.log(contador)

    if(contador==100)
        flag=false
    contador++
}


problema = false

do{
    console.log("verificação de disco")

}while(problema)




function soma(a,b){
    return a+b;
}

function imprime(){
    return 210;
}

function semRetorno(){
    console.log("Sem retorno")
}

a = 10

function parametro(a){
    console.log("numero: "+a)
}
console.log(soma(25,15))

console.log(imprime())

semRetorno()

parametro(500)

var corpo = document.querySelector("#container");

for (let i = 0; i < 10; i++){

    var paragrafo = document.createElement('p');

    paragrafo.textContent = "quanto mais a pia pinga mais o pinto pia"

    corpo.appendChild(paragrafo);
}


//Questão 1
var vetorPrincipal = [1,2,3,4,5,6,7,8,9,10];
var pares=[],impares=[]
var contadorPares=0,contadorImpares=0;

for(var i=0; i<=vetorPrincipal.length;i++){
    if(vetorPrincipal[i]%2==0){
        pares[contadorPares] = vetorPrincipal[i]
        contadorPares++
    }else{
        impares[contadorImpares] = vetorPrincipal[i]
        contadorImpares++
    }
}

console.log("pares: "+pares);
console.log("impares: "+impares);


//Questão 2
//Pegar um número de 3 ou menos dígitos.

var numero,centena,dezena,unidade;

numero = prompt("Digite um número.")

centena = Math.trunc(numero/100);
dezena = Math.trunc((numero-centena*100)/10);
unidade = numero%10;

console.log(numero)
console.log(centena)
console.log(dezena)
console.log(unidade)

for (let i = 2; i < 10; i+=2) {
    console.log("pares: "+i)
}

for (let i = 1; i < 10; i+=2) {
    console.log("impares: "+i)
}

var altura = prompt('digite sua altura')
var peso = prompt('digite o seu peso')
var imc = peso / (altura*altura)

console.log(imc)

if(imc<18.5){
    console.log('abaixo do peso')
}else if(imc>=18.5 && imc <=25){
    console.log('peso normal')
}else if(imc>25 && imc <=30){
    console.log('sobrepeso')
}else if(imc>30 && imc <=35){
    console.log('obesidade grau I')
}else if(imc>35 && imc <=40){
    console.log('obesidade grau II')
}else if(imc > 40){
    console.log('obesidade mórbida')
}else{
    console.log('dados inválidos')
}
//1 1 2 3 5 8 13 21

function fib(numero){
   contador = 0,a = 1, b = 0,c = 0
    while(contador<numero){
        c = a + b
        a = b
        b = c
        console.log(c)
        contador++
    }
}
fib(100)

var n1 = Number(prompt('Digite o primeiro numero'))
var n2 = Number(prompt('Digite o segundo numero'))

//DESAFIO retorna o maior entre três números.
var maior2 = ((n1+n2)+Math.abs(n1-n2))/2

function maior(n1,n2){
    return n1>n2?n1:n2
}

console.log(maior(n1,n2))
console.log(maior2)


var numero = prompt("Digite um número")

function multiplicacao(numero){
    contador=1
    while(contador<=10){
        console.log(numero+" x "+contador+" = "+(numero*contador));
        contador++;
    }
}

function divisao(numero){
    contador=1
    while(contador<=10){
        console.log((numero*contador)+" / "+numero+" = "+contador);
        contador++;
    }
}

multiplicacao(numero)
divisao(numero)
*/


var matriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

for(i=0; i< 4; i++) {
    for(j = 0; j<4; j++) {
        console.log(matriz[i][j])
    }
}

console.log(i)
console.log(j)


