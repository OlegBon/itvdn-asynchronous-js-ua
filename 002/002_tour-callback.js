const allTours = {
  tours: [
    "Україна",
    "Європа",
    "Азія",
    "Африка",
    "Америка",
    "Австралія",
    "Антарктида",
    "Для однієї людини",
    "Для двох",
    "Для компанії",
    "Для сім'ї",
    "Активний відпочинок",
    "Екскурсії",
    "Круїзи",
    "Відпочинок на морі",
  ],
  seasons: ["зима", "весна", "літо", "осінь"],
};

let orderFulfillment = (tours, seasons, selection) => {
  setTimeout(() => {
    const missingTours = tours.filter((tour) => {
      return !allTours.tours.includes(tour);
    });

    if (missingTours.length) {
      console.log(
        `Вибачте, але наразі у нас відсутні такі тури / напрямки: ${missingTours.join(
          ", "
        )}. Спробуйте обрати інші напрямки.`
      );
    } else {
      const toursToAdd = allTours.tours.filter((tour) => {
        return tours.includes(tour);
      });
      console.log(
        `Починаємо шукати тури з такими параметрами:\n${toursToAdd.join(
          ", "
        )}\nДля сезону ${seasons}.`
      );

      selection();
    }
  }, 1000);
};

// Це може бути прикладом "callback hell" - пекло зворотних викликів,
// але в даному випадку це просто послідовність асинхронних операцій,
// які виконуються одна за одною, і кожна наступна операція починається
// після завершення попередньої.
// Ніби виконання коду йде послідовно, але насправді це асинхронні виклики,
// які не блокують основний потік виконання програми.
let selectionTour = () => {
  setTimeout(() => {
    console.log("Перевірка напрямків завершено.");

    setTimeout(() => {
      console.log("Сезон обрано.");

      setTimeout(() => {
        console.log("Бронювання місця проживання завершено.");

        setTimeout(() => {
          console.log("Трансфер до місця відпочинку організовано.");

          setTimeout(() => {
            console.log("Білети придбані.");

            setTimeout(() => {
              console.log(
                "Тур заброньовано та видано клієнту. Гарної подорожі, настрою та погоди!"
              );
            }, 2000);
          }, 3000);
        }, 2000);
      }, 3000);
    }, 1000);
  }, 2000);
};

orderFulfillment(
  ["Європа", "Для двох", "Активний відпочинок", "Відпочинок на морі"],
  "літо",
  selectionTour
);
