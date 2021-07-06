// Crie uma função que retorna a palavra (impar/par) 
// de acordo com seu parâmetro.

function imparOuPar(number) {
  if(number % 2 === 0) {
    return console.log("O número passado é par!")
  } else {
    return console.log("O número passado é ímpar!")
  }
}

imparOuPar(457);