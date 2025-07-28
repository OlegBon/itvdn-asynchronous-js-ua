const propertiesTour = {
  tours: [
    { name: "Україна", price: 1000 },
    { name: "Європа", price: 2000 },
    { name: "Азія", price: 3000 },
    { name: "Африка", price: 4000 },
    { name: "Америка", price: 5000 },
    { name: "Австралія", price: 6000 },
    { name: "Антарктида", price: 7000 },
    { name: "Для однієї людини", price: 3000 },
    { name: "Для двох", price: 5000 },
    { name: "Для компанії", price: 9000 },
    { name: "Для сім'ї", price: 8000 },
    { name: "Активний відпочинок", price: 2000 },
    { name: "Екскурсії", price: 3000 },
    { name: "Круїзи", price: 5000 },
    { name: "Відпочинок на морі", price: 4000 },
  ],
  seasons: ["зима", "весна", "літо", "осінь"],
};

let isAllGood = false; // Перевірка наявності всіх властивостей туру
let missingTours = []; // Відсутні властивості туру
let selectedTours = []; // Вибрані властивості туру
let selectedSeason = ""; // Вибраний сезон

let costTour = 0; // Загальна вартість туру

// Функція для отримання замовлення
// Вона перевіряє, чи всі необхідні тури доступні, і формує список вибраних властивостей туру та сезону
// Повертає проміс, який буде виконано або відхилено в залежності від наявності турів
// Якщо тури відсутні, проміс буде відхилено з повідомленням про помилку
let getOrder = (tours, season) => {
  // missingTours = tours.filter((tour) => !allTours.tours.includes(tour));
  missingTours = tours.filter(
    (tour) => !propertiesTour.tours.map((t) => t.name).includes(tour)
  );
  isAllGood = !missingTours.length;
  // selectedTours = allTours.tours.filter((tour) => tours.includes(tour));
  selectedTours = propertiesTour.tours.filter((tour) =>
    tours.includes(tour.name)
  );
  selectedSeason = season;
};

// Функція для виконання замовлення
// Вона повертає проміс, який буде виконано або відхилено в залежності від наявності властивостей туру
// Якщо якісь властивості туру відсутні, проміс буде відхилено з повідомленням про помилку
let orderFulfillment = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isAllGood) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(
        `Вибачте, але наразі у нас відсутні такі тури / напрямки: ${missingTours.join(
          ", "
        )}. Спробуйте обрати інші напрямки.`
      );
    }
  });
};

// Функції для виконання різних етапів замовлення
// Кожна функція виводить повідомлення про виконання відповідного етапу замовлення
// Вони використовуються як аргументи для промісів, які виконуються послідовно
// Кожна функція виконується після успішного виконання попередньої

// Функція для початку пошуку турів з вибраними параметрами
let selectionTour = () => {
  console.log(
    `Починаємо шукати тури з такими параметрами:\n${selectedTours
      .map((tour) => tour.name)
      .join(", ")}\nДля сезону ${selectedSeason}.`
  );
};

// Функція для перевірки напрямків турів
let checkTours = () => {
  console.log("Перевірка напрямків завершено.");
};

// Функція для вибору сезону туру
let seasonSelection = () => {
  console.log("Сезон обрано.");
};

// Функція для бронювання місця проживання
let booking = () => {
  console.log("Бронювання місця проживання завершено.");
};

// Функція для організації трансферу до місця відпочинку
let transfer = () => {
  console.log("Трансфер до місця відпочинку організовано.");
};

// Функція для придбання білетів
let tickets = () => {
  console.log("Білети придбані.");
};

// Функція для розрахунку загальної вартості туру
let calculateCost = () => {
  costTour = selectedTours.reduce((total, tour) => total + tour.price, 0);
  console.log(
    `Розрахунок загальної вартості туру завершено. Вартість: ${costTour} грн.`
  );
};

// Функція для завершення замовлення туру
let orderCompletion = () => {
  console.log(
    "Тур заброньовано та видано клієнту. Гарної подорожі, настрою та погоди!"
  );
};

// Функція async/await для виконання замовлення
const getTour = async () => {
  getOrder(
    ["Європа", "Для двох", "Активний відпочинок", "Відпочинок на морі"],
    "літо"
  );
  // getOrder(
  //   [
  //     "Європа",
  //     "Для двох",
  //     "Активний відпочинок",
  //     "Відпочинок на морі",
  //     "Пішохідні тури",
  //   ],
  //   "літо"
  // ); // Перевірка catch

  try {
    await orderFulfillment(2000, selectionTour);
    await orderFulfillment(1000, checkTours);
    await orderFulfillment(1000, seasonSelection);
    await orderFulfillment(2000, booking);
    await orderFulfillment(3000, transfer);
    await orderFulfillment(2000, tickets);
    await orderFulfillment(2000, calculateCost);
    await orderFulfillment(2000, orderCompletion);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Раді бачити вас ще!");
  }
};

// Виклик функції для виконання замовлення
await getTour();

// На основі прикладу, що був на уроці, дописати фічу для видачі замовлення на винос
// до свого проєкту з використанням замикання, що розроблявся для минулих завдань.
// Також на основі прикладу дописати фіча з генерацією чеку до свого проєкту, що розроблявся для минулих завдань.

// Розширення турів з використанням колбеків
console.log("\n--- Розширення турів ---");

function createExtendedTourManager(baseCost) {
  let addons = [];
  let total = baseCost;

  function addFeature(name, cost) {
    addons.push({ name, cost });
    total += cost;
    console.log(`Додано розширення: ${name} (+${cost} грн)`);
  }

  function showSummary() {
    console.log("Обрані розширення туру:");
    addons.forEach((addon) => {
      console.log(`${addon.name}: ${addon.cost} грн`);
    });
    console.log(`Загальна сума з урахуванням додаткових послуг: ${total} грн`);
  }

  return {
    addFeature,
    showSummary,
  };
}

// Приклад використання
const tourAddons = createExtendedTourManager(13000); // базова ціна туру 13000 грн

tourAddons.addFeature("Медичне страхування", 500);
tourAddons.addFeature("Трансфер з аеропорту", 1200);
tourAddons.addFeature("Особистий гід", 800);

tourAddons.showSummary();

// Генерація загального чеку з використанням колбеків
console.log("\n--- Генерація чеку ---");

function createTourBill(userName) {
  let items = [];
  let season = "";
  let total = 0;

  function addTour(name, price) {
    items.push({ type: "Тур", name, price });
    total += price;
  }

  function addAddon(name, price) {
    items.push({ type: "Розширення", name, price });
    total += price;
  }

  function setSeason(s) {
    season = s;
  }

  function printBill() {
    console.log("Чек за туристичне замовлення");
    console.log(`Клієнт: ${userName}`);
    console.log(`Сезон: ${season}`);
    console.log("--------------------------");
    items.forEach((item) => {
      console.log(`${item.type}: ${item.name} — ${item.price} грн`);
    });
    console.log("--------------------------");
    console.log(`Загальна сума: ${total} грн`);
  }

  return {
    addTour,
    addAddon,
    setSeason,
    printBill,
  };
}

// Приклад використання
const billOleh = createTourBill("Олег");

billOleh.addTour("Європа", 2000);
billOleh.addTour("Для двох", 5000);
billOleh.addTour("Активний відпочинок", 2000);
billOleh.addTour("Відпочинок на морі", 4000);
billOleh.addAddon("Медичне страхування", 500);
billOleh.addAddon("Трансфер з аеропорту", 1200);
billOleh.addAddon("Особистий гід", 800);
billOleh.setSeason("літо");

billOleh.printBill();
