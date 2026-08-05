document.addEventListener("DOMContentLoaded", () => {
    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");

    const perguntas = [
        {
            enunciado: "O Alarme soa nas Muralhas! Um Titã de proporções colossais acaba de abrir um buraco no distrito de Shiganshina. Qual é a sua reação imediata?",
            alternativas: [
                {
                    texto: "Correr para ajudar na evacuação dos civis indefesos.",
                    afirmacao: "Sua prioridade sempre foi proteger a vida humana acima de qualquer glória."
                },
                {
                    texto: "Correr em direção à fenda para tentar combater a ameaça de frente.",
                    afirmacao: "Você demonstrou uma coragem impulsiva e sede de vingança contra os Titãs."
                }
            ]
        },
        {
            enunciado: "Anos depois, você se forma no 104º Esquadrão de Recrutas. Chegou o momento de escolher a sua divisão militar. Para onde você vai?",
            alternativas: [
                {
                    texto: "Unir-se à Divisão de Reconhecimento para explorar o mundo fora das muralhas.",
                    afirmacao: "Decidiu arriscar a própria vida em busca da liberdade e do conhecimento verdadeiro."
                },
                {
                    texto: "Unir-se à Polícia Militar para viver em segurança no interior da Muralha Sina.",
                    afirmacao: "Optou por garantir a estabilidade e proteção da elite humana dentro do conforto das muralhas."
                }
            ]
        },
        {
            enunciado: "Durante uma expedição fora das muralhas, surge a suspeita de um traidor infiltrado com o poder de se transformar em Titã. O que você faz?",
            alternativas: [
                {
                    texto: "Mantém a desconfiança em segredo e observa os passos de seus companheiros.",
                    afirmacao: "Atuou de forma analítica e estratégica para descobrir segredos sem causar pânico."
                },
                {
                    texto: "Confia cegamente nos seus companheiros até que haja provas irrefutáveis.",
                    afirmacao: "Valorizou os laços de companheirismo e lealdade acima de suspeitas não comprovadas."
                }
            ]
        },
        {
            enunciado: "A verdade sobre o mundo fora das muralhas é revelada. O inimigo não são apenas os Titãs, mas o mundo inteiro. Qual o seu posicionamento?",
            alternativas: [
                {
                    texto: "Defender o diálogo e buscar soluções pacíficas com outras nações.",
                    afirmacao: "Lutou até o fim por uma solução pacífica e pela coexistência das nações."
                },
                {
                    texto: "Apoiar medidas extremas para garantir a sobrevivência absoluta da ilha.",
                    afirmacao: "Aceitou medidas drásticas para proteger a sua terra natal contra um mundo hostil."
                }
            ]
        },
        {
            enunciado: "No confronto final que decidirá o destino da humanidade, qual ordem você concede ao seu esquadrão?",
            alternativas: [
                {
                    texto: "Entreguem seus corações! Lutem pela liberdade até o último suspiro!",
                    afirmacao: "Tornou-se um símbolo de esperança e liderança lendária para as futuras gerações."
                },
                {
                    texto: "Recuar e focar em salvar o máximo de sobreviventes possível.",
                    afirmacao: "Preservou a essência da humanidade garantindo a reconstrução e o futuro dos inocentes."
                }
            ]
        }
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.textContent = "O seu destino no universo de Attack on Titan:";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();
});
