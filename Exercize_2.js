// Задание 2: Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function checkNumSimple(number) {

    let sumDivider = 0;
    if (x < 0) {
      x = x * (-1);
    }

    if (typeof(x) === 'number' && x <= 1000) {
        for (let i = 0; i <= x; i = i + 1) {
            if (x > 1 && x % i === 0) {
                sumDivider = sumDivider + 1
            }
        }
    } else {
        return result = 'Wrong data';
    }

    if (sumDivider === 2) {
        return result = 'The number is prime';
    } else {
        return result = 'Not prime';
    }

}

let x = 997;
console.log(checkNumSimple(x));