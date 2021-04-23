//função com console log mostrando indefinido no primeiro console log e depois recebe uma variavel com texto
function fn(){
    console.log(Text);
    var Text = 'Exemple';
    console.log(Text);
}

fn();

//como ficaria o hosting onde a variavel é informanda antes e não definida (para melhor visualizar)
/*
function fn(){
    var Text;
    console.log(Text);
    var Text = 'Exemple';
    console.log(Text);
}
*/

