// Створити функцію fetchData для завантаження даних із сервера (можна використати будь-яке безкоштовне API,
// або імітувати запит за допомогою таймаута), що оброблятиме помилки та виводитиме результати виконання до консолі.
// https://api.chucknorris.io/
// https://api.chucknorris.io/jokes/random?category=dev

// Використання промісів для асинхронного запиту даних
// Використання setTimeout для імітації асинхронного запиту
// Використання resolve та reject для обробки успішного та помилкового результат
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Імітуємо успішний запит
      const success = true; // Змініть на false, щоб імітувати помилку

      if (success) {
        resolve("setTimeout - Дані успішно завантажено!");
      } else {
        reject("setTimeout - Помилка при завантаженні даних.");
      }
    }, 2000); // Затримка 2 секунди

    // Використовуємо API
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve("fetch API - " + data.value); // Успішно отримані дані
      })
      .catch((error) => {
        reject("fetch API - Помилка: " + error.message); // Помилка при отриманні даних
      });
  });
}

// Приклад використання функції fetchData
fetchData()
  .then((result) => {
    console.log(result); // Виводимо успішний результат
  })
  .catch((error) => {
    console.error(error); // Виводимо помилку
  });

// Використання async/await для асинхронного запиту даних
async function fetchDataAsync() {
  try {
    const result = await fetchData();
    console.log("async/await - " + result); // Виводимо успішний результат
  } catch (error) {
    console.log("async/await - " + error); // Виводимо помилку
  }
}

// Приклад використання функції fetchDataAsync
fetchDataAsync();
