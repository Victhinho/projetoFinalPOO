function desenharCards(idBaba, arrayBaba) {
    let containerBaba = document.getElementById(idBaba);

    containerBaba.innerHTML = ' ';

    for (const Baba of arrayBaba){
        containerBaba.innerHTML +=`
            <div class='card'>
            <img class='avatar' src='img/${Baba.foto}'>
                <div class='conteudo'>
                    <a href='detalhes.html?id=${Baba.id}' class='titulo'><h3 class='titulo'> ${Baba.nome}</a></h3>
                    <p class='descricao'> ${Baba.descricao}</p>
                </div>
                <div class='barra-botoes'>
                    <button class='btn'>
                        <i class = 'fa fa-heart'></i>
                    </button>
                    <button class='btn'>
                        <a href='detalhes.html?id=${Baba.id}'><i class = 'fa fa-plus'></a></i>
                    </button>
                </div>
            </div>
        `
    }
}

function desenharCardDetalhes(idDetalhes, arrayBabas, idBaba) {
    const babaNova = arrayBabas.find((baba) => baba.id == idBaba);

    let containerDetalhes = document.getElementById(idDetalhes);

    if (babaNova) {
        containerDetalhes.innerHTML += `
            <div class = card>
            <img class='avatar' src='img/${babaNova.foto}' alt='${babaNova.nome}'>
            </div>
        `;
    }
}

