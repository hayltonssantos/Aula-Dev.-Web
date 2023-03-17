// ES6 

//Json
/*
let pessoa = {
    nome: 'Antonio',
    idade: 37,
    sobrenome: 'Silva Santos'
}

console.log(pessoa)

let email = pessoa.nome.substring(0, 1).toLowerCase() + pessoa.sobrenome.split(' ')[1].toLowerCase() + '@gmail.com'

console.log(email)
*/

//Desestruturação //Template Literals
/*
    let pessoa = {
        nome: 'Antonio',
        idade: 37,
        sobrenome: 'Silva Santos'
    }   
    
    let {nome, sobrenome} = pessoa

    let email = pessoa.nome.substring(0, 1).toLowerCase() + pessoa.sobrenome.split(' ')[1].toLowerCase() + '@gmail.com'

    console.log(nome, sobrenome)
*/
//Template Literals
//Arrow Functions
/*
this.name = 'Antonio'
function teste () {
    return 'teste'
}

console.log(this)
*/
/*
this.name = 'Antonio'
function teste () {
    return this
}

console.log(teste.bind(this)())
*/
/*
this.name = 'Antonio'
let teste = () =>{
    return this
}
console.log(teste())
*/

// Metodos de arry (map)

alunos = [{
    nome: 'Antonio',
    idade: 37,
    filhos: true,
},
{
    nome: 'Carla',
    idade: 37,
    filhos: true,
},
]

alunos_reder = alunos.map(aluno => aluno.filhos)
console.log(alunos_reder)

alunos_render = alunos.map(function(aluno){
    if (aluno.filhos){
        return 'tem filhos'
    }else{
        return 'não tem filhos'
    }
})

console.log(alunos_render)

alunos_render2 = alunos.map((aluno) => ({...aluno, filhos: aluno.filhos? 'tem filhos' : 'não tem filhos'}))

console.log(alunos_render2)
//TS
//Generics