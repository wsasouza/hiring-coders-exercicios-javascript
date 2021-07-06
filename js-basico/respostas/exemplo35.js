// Crie uma função que recebe o ano de nascimento da 
// pessoa informando se ela é 
// maior de idade ou menor.

function maiorIdade(year) {
  const age = 2021 - year;

  if (age >= 18) {
    return console.log("É maior de idade!")
  } else {
    return console.log("É menor de idade!")
  }  
}

maiorIdade(2019);
