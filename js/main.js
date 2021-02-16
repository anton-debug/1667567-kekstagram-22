// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Максимум и минимум включаются
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    alert('Введите правильный диапазон (Только положительные числа, min не больше max и не равные между собой)');
  }
};

getRandomIntInclusive(50, 1000);

// Функция для проверки максимальной длины строки

const getLengthStr = function(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false
};

getLengthStr('Внутри функций проблем быть не должно', 37);
