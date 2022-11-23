let frontAprender;
let backAprender;
const bemVindo = prompt(
  "Seja muito bem vindo, qual área você quer seguir, back ou front end? "
);

if (bemVindo == "front" || bemVindo == "front end") {
  frontAprender = prompt("Você gostaria de aprender React ou Vue?");
}

if (bemVindo == "back" || bemVindo == "back end") {
  backAprender = prompt("Você gostaria de aprender C# ou Java?");
}

let linguagens = {
  JavaScript: [
    "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
  ],
  Python: [
    "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte",
  ],
  C: [
    "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização, criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix.",
  ],
  Java: [
    "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.",
  ],
  PHP: [
    "É uma linguagem de uso geral e livre distribuição voltada para a criação de sistemas web. Como utiliza o código aberto, os desenvolvedores conseguem mexer nela e aprimorar suas funcionalidades. Possui funções similares à linguagem C, que também pode ser utilizada para extensões na PHP. Além disso, pode ser utilizada para o controle de drones.",
  ],
  SQL: [
    "Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.",
  ],
};

let tecnologias;

let especializar = document
  .querySelector(".especializar")
  .addEventListener("click", function () {
    tecnologias = prompt(
      "Quais tecnologias você gostaria de se especializar? "
    );

    while (tecnologias !== null) {
      tecnologias = prompt(
        "Quais tecnologias você gostaria de se especializar? "
      );
      console.log(tecnologias);

      if (tecnologias === "javascript" || tecnologias === "js") {
        alert(linguagens.JavaScript);
      } else if (tecnologias === "python") {
        alert(linguagens.Python);
      } else if (tecnologias === "c") {
        alert(linguagens.C);
      } else if (tecnologias === "java") {
        alert(linguagens.Java);
      } else if (tecnologias === "php") {
        alert(linguagens.PHP);
      } else if (tecnologias === "sql" || tecnologias === "mysql") {
        alert(linguagens.SQL);
      }
    }
  });

let fullStack = document
  .querySelector(".fullstack")
  .addEventListener("click", function () {
    alert(
      "Ahh que legal... basicamente o desenvolvedor FullStack é um profissional multitarefa, que consegue transitar entre projetos de desenvolvimento Front-End e Back-End, e esse profissional é muito requisitado pelo mercado de trabalho pelo seu vasto conhecimento em diversas áreas. Bela escolha e boa sorte! "
    );
  });
