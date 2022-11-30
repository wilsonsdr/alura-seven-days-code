//#region função para inserir o número pressionado
function inserir(numero) {
  document.querySelector(".digitacao").innerHTML += numero;
}
//#endregion
//#region função para limpar o campo
function limparCampo() {
  document.querySelector(".digitacao").innerHTML = "";
  document.querySelector(".resultado").innerHTML = "";
}
//#endregion
//#region função para realizar os calcúlos
function calcular() {
  const resultado = document.querySelector(".digitacao").innerHTML;

  if (resultado) {
    document.querySelector(".resultado").innerHTML = eval(resultado);
  } else {
    document.querySelector(".resultado").innerHTML = "Calculo inválído";
  }
}
//#endregion
//#region função mudar de cor
function temaClaro() {
  document.querySelector(".calculadora-container").classList.toggle("claro");
  document.querySelector(".cabecalho").classList.toggle("claro");
  document.querySelector(".resultado-container").classList.toggle("claro");
  document.querySelector(".digitacao-container").classList.toggle("claro");
  document.querySelector(".botoes").classList.toggle("claro");
  document.querySelector(".fa-solid").classList.toggle("claro");

  const botao = document.querySelectorAll(".botao");

  for (botoes in botao) {
    botao[botoes].classList.toggle("claro");
  }
}
//#endregion
