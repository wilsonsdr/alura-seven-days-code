let contador = 0;
let main;
const links = document.querySelector(".links");
const burguer = document.querySelector(".burguer");

burguer.addEventListener("click", () => {
  contador++;
  main = document.querySelector(".main").style.paddingTop = "280px";
  burguer.classList.toggle("active");
  links.classList.toggle("active");

  if (contador % 2 == 0) {
    main = document.querySelector(".main").style.paddingTop = "110px";
  }
});
