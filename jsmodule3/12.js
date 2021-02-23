// Задача. Подсчёт свойств
// Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// Тесты
// Объявлена функция countProps(object).
// Вызов countProps({}) возвращает 0.
// Вызов countProps({ name: 'Mango', age: 2 }) возвращает 2.
// Вызов countProps{ mail: 'poly@mail.com', isOnline: true, score: 500 }) возвращает 3.
// Функция подсчитывает только собственные свойства объекта.

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
for (const key of Object.keys(object)) {
  if (object.hasOwnProperty(key)) {
    propCount = Object.keys(object).length;
  }
  }
  
  // Пиши код выше этой строки
  return propCount;
}
// console.log(propCount);
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));



