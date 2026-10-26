const grade = document.getElementById("grade");
const filtros = document.getElementById("filtros");
const modal = document.getElementById("modal");

function render(categoria = "Todos") {
  grade.innerHTML = "";
  PROJETOS.forEach((p, i) => {
    if (categoria !== "Todos" && p.categoria !== categoria) return;
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
      <div class="card-arte"><img src="${p.imagem}" alt="${p.titulo}" loading="lazy"></div>
      <div class="card-info">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div><h3>${p.titulo}</h3><span class="mono">${p.subtitulo || p.categoria}</span></div>
        <div class="squares" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>`;
    card.addEventListener("click", () => abrir(p));
    grade.appendChild(card);
  });
}

function abrir(p) {
  document.getElementById("modal-arte").innerHTML = `<img src="${p.imagem}" alt="${p.titulo}">`;
  document.getElementById("modal-cat").textContent = `${p.categoria} · ${p.ano}`;
  document.getElementById("modal-titulo").textContent = p.titulo;
  document.getElementById("modal-desc").textContent = p.descricao;
  document.getElementById("modal-galeria").innerHTML = (p.galeria || [])
    .map((src) => `<img src="${src}" alt="" loading="lazy">`).join("");
  modal.showModal();
}

document.getElementById("fechar").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// Filtros só aparecem quando há mais de uma categoria
const categorias = [...new Set(PROJETOS.map((p) => p.categoria))];
if (categorias.length > 1) {
  ["Todos", ...categorias].forEach((cat, i) => {
    const b = document.createElement("button");
    b.textContent = cat;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0);
    b.addEventListener("click", () => {
      filtros.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
      render(cat);
    });
    filtros.appendChild(b);
  });
}

// Letreiro (mesmo estilo do letreiro da tela de iniciando)
const frases = ["Identidade visual", "Lettering", "Telas de live", "Motion", "Painéis", "Alertas", "baianofps7"];
const trecho = frases.map((f) => `<span>${f}</span><i></i>`).join("");
document.getElementById("faixa").innerHTML = trecho + trecho;

// Ícones das redes
document.querySelectorAll("[data-i]").forEach((e) => (e.innerHTML = ICONS[e.dataset.i]));

document.getElementById("ano").textContent = new Date().getFullYear();
render();
