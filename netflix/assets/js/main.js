// function responsive menu

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

// function arrow

let track;
let arrowLeft;
let arrowRight;

// track1

arrowLeft = document
  .getElementById("arrow1")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 5) {
      track = document.querySelector(
        ".track1"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px)`;
      break;
    }

    if (contador >= 4) {
      contador = 0;
      track = document.querySelector(".track1").children[0].style.marginLeft =
        "initial";
    }
  });

arrowRight = document
  .getElementById("arrow2")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 5) {
      track = document.querySelector(
        ".track1"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px`;
      break;
    }

    if (contador == 2) {
      track = document.querySelector(
        ".track1"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 125px`;
    } else if (contador == 3) {
      track = document.querySelector(
        ".track1"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 187px`;
    } else if (contador >= 4) {
      contador = 0;
      track = document.querySelector(".track1").children[0].style.marginLeft =
        "initial";
    }
  });

// track2

arrowLeft = document
  .getElementById("arrow3")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 4) {
      track = document.querySelector(
        ".track2"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px)`;
      break;
    }

    if (contador >= 3) {
      contador = 0;
      track = document.querySelector(".track1").children[0].style.marginLeft =
        "initial";
    }
  });

arrowRight = document
  .getElementById("arrow4")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 5) {
      track = document.querySelector(
        ".track2"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px`;
      break;
    }

    if (contador == 2) {
      track = document.querySelector(
        ".track2"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 125px`;
    } else if (contador == 3) {
      track = document.querySelector(
        ".track2"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 187px`;
    } else if (contador >= 4) {
      contador = 0;
      track = document.querySelector(".track2").children[0].style.marginLeft =
        "initial";
    }
  });

  // track3

  arrowLeft = document
  .getElementById("arrow5")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 4) {
      track = document.querySelector(
        ".track3"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px)`;
      break;
    }

    if (contador >= 3) {
      contador = 0;
      track = document.querySelector(".track1").children[0].style.marginLeft =
        "initial";
    }
  });

arrowRight = document
  .getElementById("arrow6")
  .addEventListener("click", function () {
    contador++;
    console.log(contador);

    while (contador <= 5) {
      track = document.querySelector(
        ".track3"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px`;
      break;
    }

    if (contador == 2) {
      track = document.querySelector(
        ".track3"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 125px`;
    } else if (contador == 3) {
      track = document.querySelector(
        ".track3"
      ).children[0].style.marginLeft = `calc(-289px * ${contador} - 187px`;
    } else if (contador >= 4) {
      contador = 0;
      track = document.querySelector(".track3").children[0].style.marginLeft =
        "initial";
    }
  });

 // track4

 arrowLeft = document
 .getElementById("arrow7")
 .addEventListener("click", function () {
   contador++;
   console.log(contador);

   while (contador <= 4) {
     track = document.querySelector(
       ".track4"
     ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px)`;
     break;
   }

   if (contador >= 3) {
     contador = 0;
     track = document.querySelector(".track1").children[0].style.marginLeft =
       "initial";
   }
 });

arrowRight = document
 .getElementById("arrow8")
 .addEventListener("click", function () {
   contador++;
   console.log(contador);

   while (contador <= 5) {
     track = document.querySelector(
       ".track4"
     ).children[0].style.marginLeft = `calc(-289px * ${contador} - 54px`;
     break;
   }

   if (contador == 2) {
     track = document.querySelector(
       ".track4"
     ).children[0].style.marginLeft = `calc(-289px * ${contador} - 125px`;
   } else if (contador == 3) {
     track = document.querySelector(
       ".track4"
     ).children[0].style.marginLeft = `calc(-289px * ${contador} - 187px`;
   } else if (contador >= 4) {
     contador = 0;
     track = document.querySelector(".track4").children[0].style.marginLeft =
       "initial";
   }
 });
