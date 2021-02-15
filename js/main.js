// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


//Максимум и минимум включаются
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if(min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    console.log('Введите правильный диапазон (Только положительные числа, min не больше max и не равные между собой)');
  }

}

console.log(getRandomIntInclusive(1, 100));


// Функция для проверки максимальной длины строки

let getLenghtStr = function (str, maxlength) {
  if(str.length <= maxlength) {
   return true
   } else {
    return false
     }
 }

 console.log(getLenghtStr('Внутри функций проблем быть не должно', 37));
