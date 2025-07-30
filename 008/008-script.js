// Написати асинхронний генератор, що створить послідовність цифр від одного до n.
// Кожна нова цифра має генеруватися асинхронно та із затримкою в 1 секунду (з використанням new Promise).
// Для перевірки потрібно вивести цифри від 1 до n до консолі.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator

async function* asyncNumberGenerator(n) {
  for (let i = 1; i <= n; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Затримка в 1 секунду
    yield i; // Генеруємо наступне число
  }
}

// async function printNumbers(n) {
//   const generator = asyncNumberGenerator(n);
//   for await (const number of generator) {
//     console.log(number); // Виводимо число до консолі
//   }
// }

// // Виклик функції для перевірки
// printNumbers(5); // Змінити 5 на будь-яке інше число для тестування

// IIFE (Immediately Invoked Function Expression)
// Використовуємо IIFE для автоматичного виклику генератора
(async () => {
  const generator = asyncNumberGenerator(5);
  for await (const number of generator) {
    console.log(number); // Виводимо число до консолі
  }
})();
