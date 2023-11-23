const params = new URLSearchParams(window.location.search);
const idBaba = params.get('id')

desenharCardDetalhes('cardDetalhes', cadastroBaba, idBaba);