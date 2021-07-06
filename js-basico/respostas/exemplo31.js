// Elabore um algoritmo que receba um número (1-7) 
// e devolva o dia da semana correspondente.

function diaDaSemana(dayNumber) {  

  switch(dayNumber) {
    case 1:
      weekDay = 'Segunda-feira';
      break
    case 2:
      weekDay = 'Terça-feira';
      break
    case 3:
      weekDay = 'Quarta-feira';
      break
    case 4:
      weekDay = 'Quinta-feira';
      break
    case 5:
      weekDay = 'Sexta-feira';
      break
    case 6:
      weekDay = 'Sábado';
      break
    case 7:
      weekDay = 'Domingo';
      break
    default:
      weekDay = 'Digite um número de 1 a 7!';

  } 

  return console.log(weekDay);
}

diaDaSemana(4);