//Hoisting de função é poder chamar a função antes dela existir como no exemplo abaixo que eu executo 
//a funcao chamada log antes de declarar

/*function fn(){
    log('Hoisting de funcao');

    function log (value) {
        console.log(value);
    }
}
fn();
*/

//por boa pratica, melhor declarar a função e depois executala
function fn(){
    function log(value) {
        console.log(value);
    }
    log ('Hoisting de Funcao');
}

fn();
