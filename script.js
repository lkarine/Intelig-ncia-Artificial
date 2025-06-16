const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Cite aspectos da cultura africana",
        alternativas: [
            {
            texto: "Música", 
            afirmacao: "É extremamente diversificada, com uma variedade de instrumentos, ritmos e estilos."
            },

             {
            texto: "Dança", 
            afirmacao: "são frequentemente parte de rituais religiosos e cerimônias, com ritmos específicos para diferentes orixás e entidades espirituais."
            },
        ]

    },
    {enunciado: "Fale mais",
        alternativas: [
            {
            texto: "tradições", 
           afirmacao: "As tradições africanas são transmitidas oralmente, preservando a história, os valores e os costumes das comunidades."
           },

             {
            texto: "Religião", 
            afirmacao: "A África possui uma rica diversidade religiosa,om práticas animistas, politeístas e panteístas."
            },
        ]
    },

    {enunciado: "Cite religiões",
        alternativas: [
            {
            texto:"Candomblé", 
           afirmacao: "Tem raízes africanas mais diretas, focando no culto aos orixás e ancestrais."
           },

             {
            texto: "Umbanda", 
            afirmacao: "Incorpora elementos do espiritismo kardecista,com uma abordagem mais sincrética e voltada para a caridade. ."
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