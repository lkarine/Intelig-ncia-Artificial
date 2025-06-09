const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual a importância do 2PAC na cultura de plantações de ervas?",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.", 
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana."
            },

             {
            texto: "Ele foi simbolo de diversidade cultural e musical e foi importante para abrir espaços para trazer igualdade racial.", 
            afirmacao: "A preservação da cultura de resistência de um povo."
            },
        ]

    },
    {enunciado: "Pergunta 2",
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
let historiaFinal = "";

function mostraPergunta(){
    if (atual>= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    textoResultado.textContent="";
    mostraAlternativa();   
}

function mostraAlternativa(){
  for(const alternativa of perguntaAtual.alternativas){
      const botaoAlternativa = document.createElement("button");
     botaoAlternativa.textContent = alternativa.texto;
     botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa))
     caixaAlternativas.appendChild (botaoAlternativa);
  }

}

function respostaSelecionada(opcaoSelecionada){
   const afirmacao = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacao + " ";
   atual++;
   mostraPergunta();


}
function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent= historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();