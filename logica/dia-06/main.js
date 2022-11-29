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
let numero;
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
  alert(
    "Para remover é necessário, (1) informar o número da categoria, (2) qual o número do alimento e (3) o nome do alimento a ser removido"
  );

  categoria = prompt("Qual o número da categoria?");

  if (categoria !== null) {
    numero = prompt("Qual o número do alimento?");
    console.log(numero);
  }

  if (numero !== null) {
    alimento = prompt("Qual o nome do alimento a ser removido?").toLowerCase();
    console.log(alimento);
  }

  verificar = lista[Object.keys(lista)[categoria]];

  if (verificar.length >= 1) {
    for (fruta in verificar) {
      if (verificar[fruta] == alimento) {
        verificar.splice(fruta, 1);
        document
          .querySelectorAll(".lista")
          [categoria].querySelectorAll("p")
          [numero].remove();
        alert(`${alimento} removido da lista`);
      } else if (verificar[fruta] !== alimento) {
        alert("Não foi possível encontrar o alimento dentro da lista!");
      }
    }
  } else if (verificar.length == 0) {
    alert("Não há nenhum alimento dentro da lista");
  }
}
//#endregion
