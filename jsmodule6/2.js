// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива,
//     которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Для перебора массива numbers использован метод forEach.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
   // for (let i = 0; i < numbers.length; i += 1) {

    //  if (numbers[i] > value) {
     //   filteredNumbers.push(numbers[i]);
     // }
   // }
  
  numbers.forEach(function (number) {
    if (number > value)
   filteredNumbers.push(number);
});//
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([24, 15, 7, 18, 24, 10, 16, 14, 7, 23, 18, 17, 13, 21, 8, 11, 18, 12, 11, 23, 11, 15, 8, 11], 15));