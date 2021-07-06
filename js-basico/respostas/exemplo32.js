// Elabore um algoritmo que receba dois números e 
// determine qual é o maior entre eles, se os 
// números forem iguais, mostre uma mensagem no 
// console "Os números são iguais".

function comparaNumero(number1, number2) {
  if (number1 === number2) {
    return console.log("Os números são iguais");
  }
  else if (number1 > number2) {
    return number1
  }
  else if (number1 < number2) {
    return number2
  }    
}

console.log(comparaNumero(24,12));