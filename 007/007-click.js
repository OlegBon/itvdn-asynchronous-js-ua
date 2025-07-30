// Створити кнопку та прив’язати до неї EventListener, в обробнику подій виводити до консолі
// повідомлення про натиснення та загальну кількість натиснень (реалізувати лічильник натиснень).

const btn = document.querySelector(".container #btn");
const outP = document.querySelector(".container #output span");
let count = 0;

const handlerClick = () => {
  count++;
  console.log(`Button clicked! Total clicks: ${count}`);
  outP.textContent = count;
};

btn.addEventListener("click", handlerClick);
