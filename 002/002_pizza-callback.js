const storeRoom = {
  ingredients: [
    "гриби",
    "салямі",
    "бекон",
    "курка",
    "кукурудза",
    "томати",
    "ананаси",
    "пармезан",
  ],
  souses: ["білий", "червоний"],
};

let orderFulfillment = (ingredients, sous, production) => {
  setTimeout(() => {
    const missingIngredients = ingredients.filter((ingredient) => {
      return !storeRoom.ingredients.includes(ingredient);
    });

    if (missingIngredients.length) {
      console.log(
        `Вибачте, але наразі у нас відсутні такі інградієнти: ${missingIngredients.join(
          ", "
        )}. Спробуйте використати інший набір продуктів.`
      );
    } else {
      const ingredientsToAdd = storeRoom.ingredients.filter((ingredient) => {
        return ingredients.includes(ingredient);
      });
      console.log(
        `Починаємо виготовлення піцци з таких продуктів: ${ingredientsToAdd.join(
          ", "
        )}. Для основи використовуємо ${sous} соус.`
      );

      production();
    }
  }, 1000);
};

let preparePizza = () => {
  setTimeout(() => {
    console.log("Приготування інградієнтів для піцци завершено.");

    setTimeout(() => {
      console.log("На основу нанесено соус.");

      setTimeout(() => {
        console.log("Випікання завершено.");

        setTimeout(() => {
          console.log("Піццу порізано та видано клієнту. Смачного!");
        }, 1000);
      }, 3000);
    }, 1000);
  }, 2000);
};

orderFulfillment(
  ["курка", "бекон", "томати", "пармезан"],
  "білий",
  preparePizza
);
