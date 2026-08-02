/* ======================================
   COMPUTAÇÃO DESCOMPLICADA
   QUIZ.JS
====================================== */


const perguntas = [

    {
        pergunta:
        "Qual é o principal objetivo da Ciência da Computação?",

        alternativas:[
            "Apenas consertar computadores",
            "Criar e estudar soluções computacionais",
            "Criar somente jogos",
            "Montar computadores"
        ],

        correta:1
    },


    {
        pergunta:
        "Qual dessas linguagens é muito utilizada em Inteligência Artificial e Dados?",

        alternativas:[
            "HTML",
            "CSS",
            "Python",
            "SQL"
        ],

        correta:2
    },


    {
        pergunta:
        "O que é um algoritmo?",

        alternativas:[
            "Um conjunto de passos para resolver um problema",
            "Um tipo de computador",
            "Um programa antivírus",
            "Uma peça de hardware"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual tecnologia é utilizada para armazenar e organizar informações?",

        alternativas:[
            "Banco de Dados",
            "Monitor",
            "Teclado",
            "Navegador"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual ferramenta é utilizada para controle de versões de código?",

        alternativas:[
            "Excel",
            "Git",
            "Photoshop",
            "Word"
        ],

        correta:1
    },


    {
        pergunta:
        "O que significa a sigla SQL?",

        alternativas:[
            "Simple Question Language",
            "Structured Query Language",
            "System Quality Logic",
            "Software Question List"
        ],

        correta:1
    },


    {
        pergunta:
        "Qual área trabalha com proteção de sistemas e informações?",

        alternativas:[
            "Segurança da Informação",
            "Design Gráfico",
            "Marketing",
            "Arquitetura"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual dessas tecnologias é usada para criar páginas web?",

        alternativas:[
            "HTML",
            "Python",
            "C",
            "Java"
        ],

        correta:0
    },


    {
        pergunta:
        "O que é Inteligência Artificial?",

        alternativas:[
            "Um tipo de computador físico",
            "Área que cria sistemas capazes de aprender e tomar decisões",
            "Um sistema operacional",
            "Um cabo de rede"
        ],

        correta:1
    },


    {
        pergunta:
        "Qual atitude ajuda um estudante de tecnologia a evoluir?",

        alternativas:[
            "Evitar criar projetos",
            "Aprender apenas uma vez",
            "Praticar e desenvolver projetos",
            "Não estudar documentação"
        ],

        correta:2
    }

];





let perguntaAtual = 0;

let pontos = 0;





const perguntaTitulo =
document.getElementById("pergunta");


const alternativas =
document.getElementById("alternativas");


const botaoProximo =
document.getElementById("proximo");


const resultado =
document.getElementById("resultado");


const pontuacao =
document.getElementById("pontuacao");






function carregarPergunta(){


    const pergunta =
    perguntas[perguntaAtual];


    perguntaTitulo.textContent =
    pergunta.pergunta;


    alternativas.innerHTML="";



    pergunta.alternativas.forEach(
        (alternativa,index)=>{


            const botao =
            document.createElement("button");


            botao.textContent =
            alternativa;


            botao.classList.add(
                "alternativa"
            );



            botao.addEventListener(
                "click",
                ()=>{

                    verificarResposta(
                        index,
                        botao
                    );

                }
            );



            alternativas.appendChild(botao);


        }
    );



}








function verificarResposta(index,botao){


    const correta =
    perguntas[perguntaAtual].correta;



    const botoes =
    document.querySelectorAll(
        ".alternativa"
    );



    botoes.forEach(
        botao=>{

            botao.disabled=true;

        }
    );



    if(index === correta){


        pontos++;


        botao.classList.add(
            "correta"
        );


    }

    else{


        botao.classList.add(
            "errada"
        );


        botoes[correta]
        .classList.add(
            "correta"
        );


    }



}








botaoProximo.addEventListener(
"click",
()=>{


    perguntaAtual++;



    if(perguntaAtual < perguntas.length){


        carregarPergunta();


    }

    else{


        mostrarResultado();


    }


});









function mostrarResultado(){


    document.getElementById("quiz")
    .style.display="none";


    resultado.style.display="block";



    pontuacao.textContent =

    `Você acertou ${pontos} de ${perguntas.length} perguntas!
    
    
    `;



}







carregarPergunta();