const inputPalavra = document.getElementById("inputPalavra");
const listaDeNomes = document.getElementById("listaDeNomes");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const botaoOrdenar = document.getElementById("botaoOrdenar");
const inputfiltrar = document.getElementById("inputfiltrar");

const nomes = [];

function formatarPalavra(palavra) {
  const primeiraLetra = palavra[0].toUpperCase();
  const restoDaPalavra = palavra.slice(1);
  return primeiraLetra + restoDaPalavra;
}

function renderizarLista(listaParaExibir) {
  listaDeNomes.innerHTML = "";

  listaParaExibir.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.style.backgroundColor = "#1abc9c";
    botaoRemover.style.color = "white";
    botaoRemover.style.border = "none";
    botaoRemover.style.cursor = "pointer";

    botaoRemover.addEventListener("click", () => {
      const indexOriginal = nomes.indexOf(nome);
      if (indexOriginal > -1) {
        nomes.splice(indexOriginal, 1);
      }
      renderizarLista(nomes);
    });

    li.appendChild(botaoRemover);
    listaDeNomes.appendChild(li);
  });
}

inputfiltrar.addEventListener("input", () => {
  const textoDigitado = inputfiltrar.value.trim().toLowerCase();

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().startsWith(textoDigitado)
  );

  renderizarLista(nomesFiltrados);
});

botaoAdicionar.addEventListener("click", () => {
  const nome = inputPalavra.value.trim();
  if (nome !== "") {
    const nomeFormatado = formatarPalavra(nome);

    nomes.push(nomeFormatado);

    inputPalavra.value = "";
    renderizarLista(nomes);
  }
});

botaoOrdenar.addEventListener("click", () => {
  nomes.sort();
  renderizarLista(nomes);
});
