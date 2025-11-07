const cardsContainer = document.getElementById('cards-cidades');
let html = '';
for (let i = 0; i < dados.length; i++) {
    html += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <a href="detalhes.html?id=${dados[i].id}" class="text-decoration-none w-100">
            <div class="card h-100 shadow-sm">
                <img src="${dados[i].imagem}" class="card-img-top" alt="${dados[i].titulo}">
                <div class="card-body text-center">
                    <p class="card-text fw-bold">${dados[i].titulo}</p>
                </div>
            </div>
        </a>
    </div>
    `
}




if (cardsContainer)
    cardsContainer.innerHTML = html;



const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


const tituloElement = document.getElementById('cidade');
const tituloText = tituloElement.textContent

const descricaoElement = document.getElementById('descricao');
const descricaoText = descricaoElement.textContent

const imagemElement = document.getElementById('fotocidade');
const imagemSrc = imagemElement.getAttribute('src');

const atracoesElement = document.getElementById('atracoes');
const atracoesText = atracoesElement.textContent

const dicasElement = document.getElementById('dicas');
const dicasText = dicasElement.textContent

for (let i = 0; i < dados.length; i++) {
    if (dados[i].id == id) {
        tituloElement.textContent = dados[i].titulo;
        descricaoElement.textContent = dados[i].conteudo;
        imagemElement.setAttribute('src', dados[i].imagem);
        imagemElement.setAttribute('alt', dados[i].titulo);
        atracoesElement.innerHTML = dados[i].atracoes.join('<br>');
        dicasElement.innerHTML = dados[i].dicas.join('<br>');
        break;
    }
}