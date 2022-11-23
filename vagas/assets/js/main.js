let about;
let contador = 0;
const links = document.querySelector(".links");
const burguer = document.querySelector(".burguer");

burguer.addEventListener("click", () => {
  contador++;
  about = document.querySelector(".about").style.paddingTop = "320px";
  burguer.classList.toggle("active");
  links.classList.toggle("active");

  if (contador % 2 == 0) {
    about = document.querySelector(".about").style.paddingTop = "172px";
  }
});
