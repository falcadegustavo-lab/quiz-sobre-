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
        enunciado: "A
