const form = document.getElementById("webDevForm");
const progress = document.getElementById("progress");
const status = document.getElementById("status");
const numPerguntas = 10;
let perguntasRespondidas = 0;

form.addEventListener("input", () => {
    perguntasRespondidas = Array.from(form.elements).filter(el => el.type === "text" && el.value !== "").length;
    const progresso = (perguntasRespondidas / numPerguntas) * 100;
    progress.style.width = `${progresso}%`;

    if (perguntasRespondidas === numPerguntas) {
        status.textContent = "Parabéns! Você respondeu a todas as perguntas.";
    } else {
        status.textContent = `Perguntas respondidas: ${perguntasRespondidas}/${numPerguntas}`;
    }
});