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

let isAllGood = false;
let missingIngredients = [];
let selectedIngredients = [];
let selectedSous = "";

let getOrder = (ingredients, sous) => {
  missingIngredients = ingredients.filter(
    (ingredient) => !storeRoom.ingredients.includes(ingredient)
  );
  isAllGood = !missingIngredients.length;
  selectedIngredients = storeRoom.ingredients.filter((ingredient) =>
    ingredients.includes(ingredient)
  );
  selectedSous = sous;
};

let preparePizza = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isAllGood) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(`Вибачте, але наразі у нас відсутні такі інградієнти: ${missingIngredients.join(
        ", "
      )}.
       Спробуйте використати інший набір продуктів.`);
    }
  });
};

let prepareOrder = () => {
  console.log(`Починаємо виготовлення піцци з таких продуктів: ${selectedIngredients.join(
    ", "
  )}.
        Для основи використовуємо ${selectedSous} соус.`);
};

let prepareIngredients = () => {
  console.log("Приготування інградієнтів для піцци завершено.");
};

let addSous = () => {
  console.log("На основу нанесено соус.");
};

let bake = () => {
  console.log("Випікання завершено.");
};

let orderCompletion = () => {
  console.log("Піццу порізано та видано клієнту. Смачного!");
};

let orderFulfillment = async () => {
  getOrder(
    ["курка", "бекон", "томати", "пармезан", "цибуля", "груша"],
    "білий"
  );

  try {
    await preparePizza(1000, prepareOrder);
    await preparePizza(2000, prepareIngredients);
    await preparePizza(1000, addSous);
    await preparePizza(3000, bake);
    await preparePizza(1000, orderCompletion);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Гарного дня і приходьте до нас ще!");
  }
};

orderFulfillment();
