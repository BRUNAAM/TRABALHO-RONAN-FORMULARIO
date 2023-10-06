const form = document.getElementById("webDevForm");
const progress = document.getElementById("progress");
const status = document.getElementById("status");
const numPerguntas = 10;
let perguntasRespondidas = 0;
let card = document.querySelectorAll(".card"); //implementação do professor
let campos = 0;

form.addEventListener("input", () => {
    // Atualiza o progresso quando houver mudanças nos inputs
    atualizarProgresso();
});

// Adiciona um event listener para os elementos de gênero
const generoElements = document.querySelectorAll('input[name="genero"]');
generoElements.forEach((el) => {
    el.addEventListener("click", () => {
        // Atualiza o progresso quando um gênero for selecionado
        atualizarProgresso();
    });
});

function atualizarProgresso() {
    perguntasRespondidas = Array.from(form.elements).filter(el => (el.type === "text" && el.value !== "") || (el.type === "radio" && el.checked && el.name === 'genero')).length;
    const progresso = (perguntasRespondidas / numPerguntas) * 100;
    progress.style.width = `${progresso}%`;

}
//forEach significa para cada, o card é o vetor, e o c,id mostra na tela a posição do vetor que você esta chamando exemplo id !=0//
card.forEach((c, id) => {
    if (id != 0) {
        c.style.display = 'none';
    }
});

function proximo() {
    card[campos].style.display = 'none';
    campos++;
    card[campos].style.display = 'flex';
}
