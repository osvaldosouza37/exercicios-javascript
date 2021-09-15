/*//Questão 1 
var raio = prompt("digite o valor do raio")

var comprimento = 2*Math.PI*raio
var area = Math.PI*Math.pow(raio,2)

console.log(comprimento)
console.log(area)

var preco = Number(prompt("digite o preco"))
var porcentagem = Number(prompt("digite a porcentagem"))

acrescimo = preco+preco*porcentagem/100
desconto = preco-preco*porcentagem/100

console.log(acrescimo)
console.log(desconto)

var a = Number(prompt("digite A"))
var b = Number(prompt("digite B"))
var c = Number(prompt("digite C"))

ab = ((a+b)+Math.abs(a-b))/2

maior = ((ab+c)+Math.abs(ab-c))/2

console.log(maior)

var idade = prompt("Digite a sua idade")

if(idade>=16 && idade<69){

    var tipoSanguineo = prompt("Digite o seu tipo sanguineo")

    switch(tipoSanguineo){
        case 'a': console.log('doador: a, ab')
                  console.log('receptor: a, o')
                  break;
        case 'b': console.log('doador: b, ab')
                  console.log('receptor: b, o')
                  break;
        case 'ab': console.log('doador: ab')
                  console.log('receptor: a,b,o,ab')
                  break;
        case 'o': console.log('doador: a,b,o,ab')
                  console.log('receptor: o')
                  break;
        default: console.log('Tipo sanguíneo inválido')      
    }

}else{
    console.log("Infelizmente não pode doar sangue!")
}

var numero = prompt("digite um número")
contador = 1;
resultado = 0; 

while(resultado<numero){
    contador++
    resultado = Math.pow(contador,2)
}

if(resultado==numero){
    console.log("é um quadrado perfeito")
    console.log(contador+" "+resultado)
}    
else{
    console.log("não é um quadrado perfeito")
    console.log(contador+" "+resultado)
}
var numero = prompt("digite um número")

fat = 1
contador = numero

while(contador>1){
    fat*=contador
    contador--
}

console.log(fat)

var x = Number(prompt("numero"))

if(x % 1 != 0 && !isNaN(x % 1)) // true se e somente se x é decimal
    console.log("é decimal")
else    
    console.log("não é decimal")    

// somatório: 1 + 1/2 + 1/3 + 1/4 + ... 1/100

var somatorio=0

for (let i = 1; i <= 100; i++) {
    somatorio+=(1/i)
}

console.log(somatorio)

var numero = Number(prompt("digite o numero"))
var div=1,contador=0;

while(div<=numero){

    if(numero%div==0)
        contador++
    div++    
}
if(contador==2)
    console.log('é primo')
   
else
    console.log('não é primo')

var vetor =[1,2,3,4,5,6,7,8,9,10]
menor = vetor[9]
maior = 0
media = 0
somatorio = 0
for(i=0;i<vetor.length;i++){
    if(vetor[i]<menor)
        menor = vetor[i]
    
    if(vetor[i]>maior)
        maior = vetor[i]
    
    somatorio+=vetor[i]        
}

media = somatorio/vetor.length

console.log(menor)
console.log(maior)
console.log(media)

var matrix =[
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ]

for(i=0;i<3;i++){
    var linha =''
    for(j=0;j<3;j++){
        linha+=matrix[i][j]+" "
    }
    console.log(linha)
}

var num1 = Number(prompt("Digite o primeiro número"))
var num2 = Number(prompt("Digite o segundo número"))
var num3 = Number(prompt("Digite o terceiro número")) 

var maior=0, menor=0

num1>num2? maior = num1: maior = num2
maior>num3? maior: maior = num3

num1<num2? menor = num1: menor = num2
menor<num3? menor: menor = num3

console.log("maior: "+maior)
console.log("menor: "+menor)
console.log("média: "+((num1+num2+num3)/3))


var precoProduto = Number(prompt('digite o valor do produto'))

var op = Number(prompt('Escolha a forma de pagamento. 1- à vista 2- cartão'))

switch(op){
    
    case 1: var valorRecebido = Number(prompt('Digite o valor recebido'))

            var troco = valorRecebido - precoProduto;

            console.log('troco: '+troco)    

            break;
    
    case 2: var parcela = prompt('Em quantas parcelas será pago?')
    
            precoProduto+=precoProduto*15/100

            valorParcela = precoProduto/parcela;

            console.log('Valor da parcela: '+valorParcela)

            break
    default: console.log('opção inválida')
}

var numero = Number(prompt('Digite um número'))

var divisor=1,contador=0

while(divisor<=numero){

    if(numero%divisor==0)
        contador++
    divisor++    
}

if(contador==2)
    console.log('é primo')
else
    console.log('não é primo')    

var vetor = [2,4,6,8,10,12]
var inverso = []
var contador = 0;
for (let i = vetor.length; i >= 0 ; i--) {
    inverso[contador] = vetor[i]
    contador++
}


console.log(vetor)
console.log(inverso)


var matriz = [[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]]


    00 01 02 03
    10 11 12 13
    20 21 22 23
    30 31 32 33


var principal=0
var secundaria=0

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
    
        if(i==j) principal +=matriz[i][j]

        if(i+j==3)secundaria +=matriz[i][j]
    }
}

console.log(principal)
console.log(secundaria)


var flag = true
var saldo = 300


while(flag){

    var op = Number(prompt('1-Saldo 2-Saque 3-Depósito 4-Encerrar'))

    switch(op){

        case 1: console.log(saldo); break;
        case 2: var saque = Number(prompt('Digite o valor do saque'))
                if(saque<=saldo){
                    saldo-=saque
                    console.log('saque efetuado com sucesso')
                }else{
                    console.log('saldo insuficiente')
                }
                break;

        case 3: var deposito = Number(prompt('Digite o valor do deposito'))
                saldo+=deposito;
                break;
        case 4: flag = false; console.log('Operação finalizada!'); break;                     
        default: console.log('opção inválida.')
    }
}

var centena=0, dezena=0, unidade=0;
var numero = Number(prompt('digite um número entre 0 e 999'))

if(numero>0 && numero <=999){

    centena = Math.floor(numero / 100);
    
    dezena = Math.floor((numero%100)/10);

    unidade = numero%10;

    console.log(centena)
    console.log(dezena)
    console.log(unidade)

}else{
    console.log('número inválido!')
}


var saque = prompt("digite a quantia a ser sacada.")

if(saque>=10 && saque<=600){

    console.log(saque)

    cem = Math.floor(saque / 100);
    
    cinquenta =  Math.floor((saque-=cem*100)/50); 

    dez = Math.floor((saque-=cinquenta*50)/10);

    cinco = Math.floor((saque-=dez*10)/5);

    um =  saque%5

    console.log(cem)
    console.log(cinquenta)
    console.log(dez)
    console.log(cinco)
    console.log(um)


}else{
    console.log('quantia inválida.');
}
*/


if(true)
    console.log('é verdadeiro')
else 
    console.log('é falso')    



