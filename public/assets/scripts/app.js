const API_URL = "http://localhost:3000/locais";

// --- Página principal (index.html) ---
async function carregarCards() {
  const container = document.getElementById("cards-cidades");
  if (!container) return;

  try {
    const response = await fetch(API_URL);
    const dados = await response.json();

    container.innerHTML = dados.map(local => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <a href="detalhes.html?id=${local.id}" class="text-decoration-none w-100">
          <div class="card h-100 shadow-sm">
            <img src="${local.imagem}" class="card-img-top" alt="${local.titulo}">
            <div class="card-body text-center">
              <p class="card-text fw-bold">${local.titulo}</p>
            </div>
          </div>
        </a>
      </div>
    `).join("");
  } catch (error) {
    console.error("Erro ao carregar locais:", error);
  }
}

// --- Página de detalhes (detalhes.html) ---
async function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  try {
    const response = await fetch(`${API_URL}/${id}`);
    const local = await response.json();

    document.getElementById("cidade").textContent = local.titulo;
    document.getElementById("descricao").textContent = local.conteudo;
    document.getElementById("fotocidade").src = local.imagem;
    document.getElementById("fotocidade").alt = local.titulo;
    document.getElementById("atracoes").innerHTML = local.atracoes.map(a => `<li>${a}</li>`).join("");
    document.getElementById("dicas").innerHTML = local.dicas.map(d => `<li>${d}</li>`).join("");
  } catch (error) {
    console.error("Erro ao carregar detalhes:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cards-cidades")) carregarCards();
  if (document.getElementById("cidade")) carregarDetalhes();
});
