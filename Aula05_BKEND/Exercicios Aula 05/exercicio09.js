
const anoAtual = new Date().getFullYear();


let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};


livro['idadePublicacao'] = anoAtual - livro['anoPublicacao'];


livro['genero'] = 'Aventura';


console.log('Título:', livro['titulo']);
console.log('Autor:', livro['autor']);
console.log('Ano de Publicação:', livro['anoPublicacao']);
console.log('Gênero:', livro['genero']);
console.log('Idade de Publicação:', livro['idadePublicacao'], 'anos');
