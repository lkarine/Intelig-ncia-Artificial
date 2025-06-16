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
            texto: "A África é um continente de vasta diversidade cultural 
            abrigando milhares de grupos étnicos, cada um com suas próprias línguas, costumes,
             tradições artísticas e sistemas de crença.", 
            afirmacao: "Essa riqueza se manifesta em múltiplas formas: na música, 
            que vai desde os ritmos complexos do djembê até as melodias suaves da kora"
            },

             {
            texto: "Ele foi simbolo de diversidade cultural e musical e foi importante para abrir espaços para trazer igualdade racial.", 
            afirmacao: "A preservação da cultura de resistência de um povo."
            },
        ]

    },
    {enunciado: "Como o 2PAC se relaciona com as ervas medicinais indigenas?",
        alternativas: [
            {
            texto: "Ambos tem como objetivo ser um mártire cultural e um elemento histórico como simbolo de um povo.", 
           afirmacao: "Importância de trazer diginidade cultural ao mundo moderno."
           },

             {
            texto: "Graças aos indígenas existem os remédios que 2PAC utiliza", 
            afirmacao: "Vemos que os remédios dos índigenas são importantes para o 2PAC."
            },
        ]
    },

    {enunciado: "Como o 2PAC relaciona com plantações e ervas indigenas?",
        alternativas: [
            {
            texto: "As plantações foram ressignificadas tanto na cultural afro-americana e indigena. Movimento plantation nos EUA foi cenário da brutalidade escravista.", 
           afirmacao: "o 2PAC ressignificou na sua música como consciencia social, resistencia politica e ancestralidade."
           },

             {
            texto: "O povo indígena vê plantação como ritual, pois cada semente pra eles tem espírito. Plantar significa vida e cultura", 
            afirmacao: "O 2PAC usou na música o cultivo como metáfora na vida do gueto, onde o solo hóstil, racismo, pobreza e violência podem fazer flores nascer."
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