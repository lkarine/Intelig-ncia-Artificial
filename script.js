const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
            texto: "Alternativa 1", 
            afirmacao: "afirmacao1"
            },

             {
            texto: "Alternativa 2", 
            afirmacao: "afirmacao2"
            },
        ]

    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
            texto: "Alternativa 1", 
            afirmacao: "afirmacao1"
            },

             {
            texto: "Alternativa 2", 
            afirmacao: "afirmacao2"
            },
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
            texto: "Alternativa 1", 
            afirmacao: "afirmacao1"
            },

             {
            texto: "Alternativa 2", 
            afirmacao: "afirmacao2"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;    
}
mostraPergunta();