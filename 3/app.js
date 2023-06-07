// 7-3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на
//  кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.

const button = document.querySelectorAll("button");

button[0].addEventListener("click", function (event) {
  button[0].style.backgroundColor = "blue";
});
button[1].addEventListener("dblclick", function (event) {
  button[1].style.backgroundColor = "pink";
});
button[2].addEventListener("mousedown", function (event) {
  button[2].style.backgroundColor = "brown";
});
button[2].addEventListener("mouseup", function (event) {
  button[2].style.backgroundColor = "white";
});

const link = document.querySelector("a");

link.addEventListener("mouseover", function (event) {
  link.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function (event) {
  link.style.backgroundColor = "white";
});
