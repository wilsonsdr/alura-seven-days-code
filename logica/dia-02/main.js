const nome = prompt("Qual o seu nome");
const idade = prompt("Qual a sua idade");
const linguagem = prompt("Qual linguagem você está aprendendo");
const mensagem = alert(
  `Olá ${nome}, você tem ${idade} anos e está aprendendo ${linguagem}`
);
const pergunta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`
);

if (pergunta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (pergunta == 2) {
  prompt("Ahh que pena... Já tentou aprender outras linguagens?");
  if (pergunta == 2) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
  }
} else {
  alert("Desculpe eu não entendi.")
}
