const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acha que Sekiro é um jogo bom?",
        alternativas: [
            {
                texto: "Sim, com certerza",
                afirmacao: "Por conta da historia, do mapa, do grafico.",
            },

            {

                texto: "Não acho bom",
                afirmação: "Os boss são muito dificil",

            }
        ]
    },

    {
        enunciado: "Você achou o Genichiro dificil?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Não da pra acompanhar os ataques dele."
            },

            {
                texto: "Não",
                afirmacao: "Depois que voce pega o MoveSet dele, e usando o contra atack Mikiri fica muito facil."
            }
        ]
    },

    {
        enunciado: "E a luta contra o Isshin, achou facil?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Pegando o MoveSet fica facil."
            },

            {
                texto: "Não, nem lascando",
                afirmacao: "Eu quase desisti quando cheguei nele."
            }
        ]
    }
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = pergunta_atual.enunciado;
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "No Jogo Gof of War eu...";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
