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
                <div class='card-pessoal'>
                    <p class='titulo'>DADOS PESSOAIS</p>
                    <ol class='lista-pessoal'>
                        <p><li class='fa fa-star'></li></p>
                        <p><li class='fa fa-star'></li></p>
                        <p><li class='fa fa-star'></li></p>
                        <p><li class='fa fa-star'></li></p>
                        <p><li class='fa fa-star'></li></p>
                        <p><li class='fa fa-star'></li></p>
                    </ol>
                </div>

                <div class='card-dados'>
                    <img class='avatar' src='img/${babaNova.foto}' alt='${babaNova.nome}'>
                    <p class='nome'>${babaNova.nome}</p>
                    <p class='cidade'>${babaNova.cidade}</p>
                    <button class='btn-contrato'>CONTRATAR</button>
                </div>

                <div class='card-profisional'>
                    <p class='titulo'>DADOS PROFISIONAIS</p>
                    <ol class='lista-pessoal'>
                    <p><li class='fa fa-star'></li></p>
                    <p><li class='fa fa-star'></li></p>
                    <p><li class='fa fa-star'></li></p>
                    <p><li class='fa fa-star'></li></p>
                    <p><li class='fa fa-star'></li></p>
                    <p><li class='fa fa-star'></li></p>
                    </ol>
                </div>
            </div>
           
        `;
    }
}

