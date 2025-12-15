let text = "JavaScript is working!"; //это переменная
const pi = 3.14159; //это константа
const isOpen = true; //логическая переменная


text = "The text has been changed."; //изменение значения переменной

console.log(text); // вывод в консоль
console.log(pi);


let person = {
    //это объект
    name: "Artur",
    age: 28,
};

console.log(person.name); // вывод свойства объекта

const titles = [
    //это массив
    "Make your dream come true or decorate your home",
    "create or buy",
    "our store",
];

//console.log(titles[0]); // вывод первого элемента массива

function calc(a, b) {
    //это функция с параметрами a и b
    console.log(a + b);
}

calc(5, 5); // вызов функции с аргументами
calc(10, 12); // вызов функции с другими аргументами

if (isOpen) {
    //условный оператор
    console.log("Condition is true");
} else {
    //альтернативный блок
    console.log("Condition is false");
}

const vase = document.querySelector(".touch__img-decor"); // выбор элемента из DOM

console.log(vase);

vase.addEventListener("click", () => {
    console.log(vase);
}); // добавление обработчика события