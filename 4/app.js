// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.

const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  const data = document.getElementById("list");
  data.remove(data.selectedIndex);
});
