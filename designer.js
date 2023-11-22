function desenharCards(idBaba, arrayBaba) {
    let containerBaba = document.getElementById(idBaba);

    containerBaba.innerHTML = '';

    for (const Baba of arrayBaba){
        containerBaba.innerHTML +=`
            <div class='card'>
                <img class='avatar' src='img/${Baba.foto}'>
                <div class='conteudo'>
                    <h3 class='titulo'><a href='detalhes.html?id=${Baba.id}'> ${Baba.nome}</a></h3>
                    <p class='descricao'> ${Baba.descricao}></p>
                <div>
                <div class='barra-botoes'>
                    <button class='btn'>
                        <i class = 'fa fa-heart'></i>
                    </button>
                    <button class='btn'>
                        <i class = 'fa fa-star'></i>
                    </button>
                </div>
            <div>
        `
    }
}

function desenharCardDetalhes(idBaba, arrayBaba, idBaba) {
    const Baba = arrayBaba.find((Baba) => Baba.id == idBaba);
    let cardDetalhes = document.getElementById(idBaba);
    cardDetalhes.innerHTML = `
        <img class='avatar' src='img/${Baba.foto}'>
        <div class='conteudo'>
            <h3 class='titulo'><a href='detalhes.html?id=${Baba.id}'> ${Baba.nome}</a></h3>
            <p class='descricao'> ${Baba.descricao}></p>
        <div>
        <div class='botoes'>
            <button class='btn'>
                <i class = 'fa fa-heart'></i>
            </button>
            <button class='btn'>
                <i class = 'fa fa-star'></i>
            </button>
        </div>
    `
}
