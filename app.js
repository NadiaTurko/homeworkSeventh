// BROWSER OBJECT MODEL (BOM). EVENTS

// 📀📀📀

// 7-1.
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.
let newWindow = window.open("", "", "width=300,height=300");
const changeWindow = setTimeout(() => {
  newWindow.resizeTo(500, 500);
  const changeMove = setTimeout(() => {
    newWindow.moveTo(200, 200);
    const closeWindow = setTimeout(() => {
      newWindow.close();
    }, 2000);
  }, 2000);
}, 2000);

changeWindow();


const changeWindow = () =>
  setTimeout(() => {
    newWindow.resizeTo(500, 500);
    changeMove();
  }, 2000);
const changeMove = () =>
  setTimeout(() => {
    newWindow.moveTo(200, 200);
    closeWindow();
  }, 2000);
const closeWindow = () =>
  setTimeout(() => {
    newWindow.close();
  }, 2000);

changeWindow();


// 7-2.
// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p>
// <div>
//         <button . . . . . >Change style!</button>
// </div>


// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
//  колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
function changeCSS() {
  const text = document.getElementById("text");
  console.log(text);
  text.style.color = "orange";
  text.style.fontSize = "55px";
  text.style.fontFamily = "Comic Sans MS";
}

// 7-3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

// 7-4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

// 7-5.
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
