function displaySomething(something) {
  console.log(something);
}

function sum(num1, num2, callback) {
  const result = num1 + num2;
  callback(result);
}

sum(10, 25, displaySomething);

function preparePizzaFor(name) {
  return function () {
    console.log(
      `Піцца для клієнта ${name} готова. Заберіть, будь ласка, своє замовлення!`
    );
  };
}

function callForOrder(client, time) {
  setTimeout(client, time);
}

const pizzaForJohn = preparePizzaFor("Джон");
const pizzaForSarah = preparePizzaFor("Сара");

callForOrder(pizzaForJohn, 2000);
callForOrder(pizzaForSarah, 3000);

function createPizza(pizzaType, price) {
  let totalCost = price;
  let additionalIngredients = [];

  function addItem(item, itemPrice) {
    console.log(`Додано ${item} до піцци ${pizzaType}`);
    totalCost += itemPrice;
    additionalIngredients.push(item);
  }

  function informAboutPrice() {
    console.log(`Замовлення сформовано, ціна за піццу: ${totalCost} грн.`);
    console.log(
      `До піцци ${pizzaType} додано такі додаткові інградієнти: ${additionalIngredients.join(
        ", "
      )}`
    );
  }

  function generateBill() {
    console.log("----------------------------");
    console.log("Чек за замовлення піцци");
    console.log(`Ваше замовлення (${pizzaType}):`);
    console.log("----------------------------");
    console.log(`Загальна вартість: ${totalCost}`);
  }

  return {
    addItem: addItem,
    informAboutPrice: informAboutPrice,
    generateBill: generateBill,
  };
}

function orderCompletion(generateBill, time) {
  setTimeout(generateBill, time);
}

const orderMargherita = createPizza("Маргарита", 100);
orderMargherita.addItem("пепероні", 10);
orderMargherita.addItem("анчоуси", 18);
orderMargherita.addItem("гриби", 7);
orderMargherita.informAboutPrice();

orderCompletion(orderMargherita.generateBill, 3000);

const reviews = [
  { id: 1, user: "John", rating: 4, comment: "Дуже задоволений" },
  { id: 1, user: "Sarah", rating: 5, comment: "Піцца була дуже смачною!" },
  {
    id: 1,
    user: "Dilan",
    rating: 3,
    comment: "Добре, але їв і смачнішу піццу",
  },
];

function processReviews(reviews, callback) {
  reviews.forEach((review) => {
    callback(review);
  });
}

function displayReviewStats(review) {
  console.log(
    `Користувач ${review.user} залишив відгук з рейтингом ${review.rating}`
  );
}

processReviews(reviews, displayReviewStats);

const button = document.getElementById("myButton");

button.addEventListener("click", hadleClick);

function hadleClick() {
  console.log("Кнопку натиснуто!");
}
