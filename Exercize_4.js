// Задание 4: Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

start = +prompt('Please, enter the start value');
end = +prompt('Please, enter the end value');

if (start > end) {
  console.log('Warning! The start value was set to be less than the end value. Values will be swapped automatically')
}

function counter(count, endCount) {
  
  if (count === endCount) {
    return console.log('The first number is equal to the second. Please, enter other number');
  } else if (isNaN(count) || isNaN(endCount)) {
    return console.log('Error. Entered non-numeric data type');
  }
    else if (count > endCount) {
    let pass = count
    count = endCount
    endCount = pass
  }
  
  const intervalId = setInterval(function() {
    console.log(count++);
    if (count > endCount) clearInterval(intervalId);
  }, 1000)
}


counter(start, end);