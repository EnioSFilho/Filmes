const filmes = require('./database')

// console.log(filmes)

// pegar o imput

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja consultar um filme ? (S/N)')


// se for sim a gente mostra as categorias disponiveis e pergunta qual categoria ela escolhe


// se optar por nao a agente mostra todos os livros em ordem crescente

if(entradaInicial.toLocaleUpperCase() === 'S'){

        console.log('Esses sao os filmes disponíveis:');
        console.log('Ficçao' , ' Aventura','Terror', 'Suspense')

        const entradaCategoria = readline.question('Qual Categoria voce escolhe:')

        const retorno = filmes.filter(filmes =>filmes.genero === entradaCategoria)

        console.table(retorno)
}else  {

    const filmesOrdenados = filmes.sort((a,b) => a.titulo - b.titulo)
    console.log('Essas sao todos os filmes disponiveis')
    console.table(filmesOrdenados)
}