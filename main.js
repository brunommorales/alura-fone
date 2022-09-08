
const listaDeTeclas = document.querySelectorAll('input[type=button]');
const numTel = document.querySelector('input[type=tel]');

let contador = 0;

//repeticao
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
  const tecla = listaDeTeclas[contador];
  
    //quando clicar a tecla execute a funcao enviando o valor da tecla como parametro;
    tecla.onclick = function () {
      imprimeTel (tecla.value);    
    }

  //recebe o valor da tecla como parametro e incrementa no valor do input tel;
    function imprimeTel (valorDaTecla) {
      numTel.value += valorDaTecla;
      
    }

    //envia o evento como parametro, se o evento for   igual a enter ou space, execute a funcao; 
    tecla.onkeydown = function (evento) {
      if (evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');   
    }
  }

  //quando soltar a tecla remova a classe
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
    }
    

  //do mouse
  tecla.onmousedown = function(evento){   
    if (evento.code === "Space") {
      tecla.classList.add('ativa');   
      }
  }
  tecla.onmouseup = function(){
    tecla.classList.remove('ativa');
  }


}

  //onmousedown	O evento ocorre quando o usuário pressiona um botão do mouse sobre um elemento



//document.querySelector('input[type=tel]');
//Para selecionar o elemento HTML input do tipo tel podemos utilizar o código document.querySelector(‘input[type=tel]’), porquê com essa linha, o JavaScript vai acessar o documento HTML (representado por document) e procurar pelo elemento input que tenha como atributo [type=tel], os colchetes fazem parte da sintaxe para seleção de atributos de um elemento HTML, funciona tanto para o CSS quanto para o HTML.

//Para selecionarmos todas as teclas do Alura Fone, é necessário usar o script const listaDeTeclas = document.querySelectorAll(‘input[type=button]), porquê o JavaScript vai criar uma referência chamada listaDeTeclas e armazenar dentro dela a NodeList com todas as teclas do Alura Fone, pois o script document.querySelectorAll(‘input[type=button]’) acessa o documento HTML (representado por document) e captura todos os elementos input que tenha como atributo type=button. É necessário passar o type, ou seja, o seletor de atributo, pois os inputs do HTML não tem classes nem IDs, e também temos um input que não é do tipo type, impossibilitando o uso do seletor de nome de tag input.

    
 

/*
O primeiro passo é criar uma referência (const listaDeTeclas) para poder receber a lista com todas as teclas do Alura Fone, ficando const listaDeTeclas = document.querySelectorAll('input[type=button]').

O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

Dentro do for, para facilitar o entendimento, criei uma referência constante const tecla, para que a cada iteração , receba o valor correspondente da tecla listaDeTeclas[indice], ficando const tecla = listaDeTeclas.

Após isto, adicionei no evento de ao apertar uma tecla do teclado onkeydown uma função anônima que recebe como parâmetro um evento. Dentro do escopo da função, vamos criar um if com a condição: se evento.code (o código do evento onkeydown) for igual a "Enter" ou for igual a "Space", adicione a classe ativa no elemento tecla, ficando então assim tecla.classList.add(‘ativa’);

Como foi resolvido a adição da classe ativa a partir do clique da tecla Enter ou Space, é necessário remover essa classe logo após deixamos de pressionar a tecla. Para isso, você precisa adicionar na tecla o evento de onkeyup (quando o usuário solta a tecla) uma função anônima, e dentro do escopo desta função, vamos remover a classe ativa da classe, ficando assim: tecla.classList.remove(‘ativa’);*/