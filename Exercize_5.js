// Задание 5: Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.


num = +prompt('Please, enter the number');
deg = +prompt('Please, specify degree');

const pow = (x, n) => {
  
  let result = 1;
  
  for (let i = 1; i <= n; i = i + 1) {
    result = result * x
  }
  return result
}

console.log(pow(num, deg));