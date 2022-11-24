let input
let contador = 3;
let numeroAleatorio;

const chutar = document.querySelector(".chutar").addEventListener("click", function() {
  contador--
  obterNumeroAleatorio()
  input = Number(document.getElementById("input").value);
  
  verificarNumero()
  acabaramTentativas()

})

function verificarNumero() {
  if (numeroAleatorio > input) {
    document.querySelector(".resultado").innerHTML = `O número era ${numeroAleatorio}, você tem mais ${contador} tentativa(s)`
  } else if (numeroAleatorio < input) {
    document.querySelector(".resultado").innerHTML = `O número era ${numeroAleatorio}, você tem mais ${contador} tentativa(s)`
  } else if (numeroAleatorio === input) {
    document.querySelector(".resultado").innerHTML = `Parabéns você acertou!!!`
  }
}

function obterNumeroAleatorio() {
  const random = (Math.random() * (10 - 1) + 1).toFixed(0)
   numeroAleatorio = Number(random);
 }

function acabaramTentativas() {
  if (contador === 0 ) {
    document.querySelector(".chutar").style.pointerEvents = "none";
    document.querySelector(".chutar").style.backgroundColor = "var(--bg-escuro)";
    document.querySelector(".chutar").style.color = "var(--color-escuro)";
    document.querySelector(".resetar").style.backgroundColor = "var(--bg-claro)";
    document.querySelector(".resetar").style.color = "var(--color-claro)";
    document.querySelector(".resetar").style.pointerEvents = "initial";
    document.querySelector(".resultado").innerHTML = `Acabaram suas tentativas`
  }
}

function resetar() {
  contador = 3
  document.querySelector(".resetar").style.pointerEvents = "none";
  document.querySelector(".resetar").style.backgroundColor = "var(--bg-escuro)";
  document.querySelector(".resetar").style.color = "var(--color-escuro)";
  document.querySelector(".chutar").style.backgroundColor = "var(--bg-claro)";
  document.querySelector(".chutar").style.color = "var(--color-claro)";
  document.querySelector(".chutar").style.pointerEvents = "initial";
}
