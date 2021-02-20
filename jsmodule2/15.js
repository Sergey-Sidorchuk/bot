// Метод concat()
// Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const firstArray = ['Меркурий', 'Венера', 'Земля'];
// const secondArray = ['Марс', 'Юпитер'];
// const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Меркурий', 'Венера', 'Земля'];
// console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// Тесты
// Объявлена переменная oldClients.
// Значение переменной oldClients это массив ['Манго', 'Аякс', 'Поли', 'Киви'].
// Объявлена переменная newClients.
// Значение переменной newClients это массив ['Персик', 'Хьюстон'].
// Объявлена переменная allClients.
// Значение переменной allClients это массив ['Манго', 'Аякс', 'Поли', 'Киви', 'Персик', 'Хьюстон'].
// Переменной allClients присвоен массив после применения метода concat с правильными аргументами.

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients =oldClients.concat(newClients);

// Дополни эту строку
console.log(oldClients);
console.log(newClients);
console.log(allClients);