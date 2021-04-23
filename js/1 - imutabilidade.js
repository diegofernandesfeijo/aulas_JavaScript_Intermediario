//ideia da imutabilidade é criar outros objetos sem alterar o principal, exemplo abaixo

//criamos a variavel user com as propriedades {name, lastName}
const user = {
    name: 'Diego',
    lastName: 'Fernandes'
};

//quero criar outra variavel adicionando o fullName (nome completo), então é possível com metodo de imutabilidade
//usar o caiso abaixo com a explicação
function getUserWithFullName(user) {
    return {
        ...user, // ... = recebe todas as propriedades do USER 
                //nesse caso nao altera a variavel 'user' e suas propriedades
                // e cria uma nova variavel com mais a propriedade adicionada abaixo
        fullName: `${user.name} ${user.lastName}` // = user.name + '' + user.lastName //adicionando a proriedade
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName); //neste caso usei a mesma referencia de memória para criar esta variavel com mais uma propriedade
console.log(user); //propriedade original