// Задание 3: Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


function func(a) {
    return function(b) {
      return a + b
    }
  }
  
let x = 157;
let y = 18;
const resultFunc = func(x);
console.log(resultFunc(y));