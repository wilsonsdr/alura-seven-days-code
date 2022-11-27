//#region lista
const lista = {
  Frutas: [],
  Laticinios: [],
  Congelados: [],
  Doces: [],
  Higiene: [],
  Verduras: [],
};
//#endregion

//#region variaveis
let contador = -1;
let verificar;
let alimento;
let categoria;
const add = document
  .querySelector(".adicionar")
  .addEventListener("click", adicionar);
const remove = document
  .querySelector(".remover")
  .addEventListener("click", remover);
//#endregion

//#region função adicionar
function adicionar() {
  alimento = prompt("Qual alimento você quer adicionar?").toLowerCase();

  if (alimento !== null) {
    categoria = prompt(
      "Qual a categoria do alimento? Informe o número respectivo da sua lista"
    ).toLowerCase();
    contador++;
  }

  let novosItens = prompt("Deseja adicionar novos itens?");

  adicionarItemAoArray();

  if (novosItens === null || novosItens == "nao") {
    return;
  }

  while (novosItens !== null || novosItens == "sim") {
    adicionar();
    return;
  }
}
//#endregion

//#region função adicionarItemAoArray
function adicionarItemAoArray() {
  while (categoria == categoria) {
    lista.Frutas.push(alimento);

    verificar = [...new Set(lista.Frutas)];

    while (lista.Frutas.length === verificar.length) {
      const element = document.createElement("p");
      element.appendChild(
        document.createTextNode(`Item${contador} ${alimento}`)
      );
      document.querySelectorAll(".lista")[categoria].appendChild(element);
      break;
    }

    while (lista.Frutas.length !== verificar.length) {
      contador--;
      lista.Frutas.pop();
      break;
    }
    break;
  }
}
//#endregion

//#region função remover
function remover() {
  categoria = prompt("Qual o número da categoria?").toLowerCase();

  if (categoria !== null) {
    alimento = prompt("Qual o nome do alimento a ser removido?");
    console.log(categoria);
  }

  verificar = lista[Object.keys(lista)[categoria]];

  for (fruta in verificar) {
    if (verificar[fruta] == alimento) {
      verificar.splice(fruta, 1);
    }
  }
}
//#endregion
