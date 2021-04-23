//Currying é um modo de resumir as funções que ao invés de repetir varias vezes o mesmo código
//conseguimos reduzir o código, exemplo a baixo de um código "grande" sem necessidade

//criei uma função soma que tem parametro A e B, retorna a soma de A e B
function soma(a, b){
    return a + b;
}

//para usar ela tenho em uam soma que sempre envolve o numero 2 no primeiro parametro e o sistema tem que
//ficar memorizando e executando este calculo
console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));

//No exemplo abaixo utilizando o mesmo código porém com método Currying o código sera memoriazado e só executado
function soma(a) {
    return function(b) {
        return a + b;
    }   
}

//neste caso gravo uma constante como soma2 = funcao + parametro (a) - executado na primeira linha
const soma2 = soma(2);

//posteriormente eu chamo novamente a minha constante que esta com a função soma e executo ela com o parametro (b)
console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
//ele ira reaproveitar o código e executar com menor custo de memória e maior velocidade "Metodo Currying"