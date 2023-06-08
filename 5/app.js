// 7-5.
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
const btn = document.querySelector("button");
const text = document.querySelector("span");
btn.addEventListener("click", function (event) {
  text.innerHTML = "I was pressed!";
});

btn.addEventListener("mouseover", function (event) {
  text.innerHTML = "Mouse on me!";
});

btn.addEventListener("mouseout", function (event) {
  text.innerHTML = "Mouse is not on me!";
});
