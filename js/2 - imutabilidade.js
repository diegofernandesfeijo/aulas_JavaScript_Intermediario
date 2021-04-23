//ideia da imutabilidade é criar outros objetos sem alterar o principal com arrays, exemplo abaixo

//criamos um array com todos os alunos e suas notas
const students = [
    {
        name: 'Diego',
        grade: 7
    },
    {
        name: 'Ana',
        grade: 4
    },
    {
        name: 'Paula',
        grade: 14
    },
];

function getApprovedStudents(studentsList){ //criamos a funcao para buscar somente os alunos aprovados
    return studentsList.filter(students => students.grade >= 7); //filtra e adiciona na variavel studentsList
                                                                 //recebendo todos students onde a nota >= 7 
}

console.log('Alunos aprovados: '); 
console.log(getApprovedStudents(students));  //array trazendo somente os alunos aprovados

console.log('\nLista de alunos') 
console.log(students);  //mesma array sem alterações