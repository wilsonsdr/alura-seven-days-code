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
let verificar;
let alimento;
let categoria;
const add = document
  .querySelector(".adicionar")
  .addEventListener("click", adicionar);
//#endregion

//#region função adicionar
function adicionar() {
  alimento = prompt("Qual alimento você quer adicionar?").toLowerCase();

  if (alimento !== null) {
    categoria = prompt(
      "Qual a categoria do alimento? Digite o número respectivo da sua lista"
    ).toLowerCase();
  }

  let novosItens = prompt("Deseja adicionar novos itens?");

  adicionarItem();

  while (novosItens !== null || novosItens == "sim") {
    adicionar();
    return;
  }
}
//#endregion

//#region função adicionarItem
function adicionarItem() {
  while (categoria == categoria) {
    lista.Frutas.push(alimento);

    verificar = [...new Set(lista.Frutas)];

    while (lista.Frutas.length === verificar.length) {
      const element = document.createElement("p");
      element.appendChild(document.createTextNode(alimento));
      document.querySelectorAll(".lista")[categoria].appendChild(element);
      break;
    }

    while (lista.Frutas.length !== verificar.length) {
      lista.Frutas.pop();
      break;
    }
    break;
  }
}
//#endregion
