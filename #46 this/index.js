'use strict';

// Урок о контексте вызова


// 1 для функции контекстом является window, в строгом режиме undefined
// 2 функция объявленная в функции, имеет тот же контекст
// используя рекурсия напишем функцию возведения в степерь
// 3 контекст для методов объекта
// обязательно показать этот пример, объяснив, чем хороши стрелочные функции
// 4 контекст функции конструктора 
// ф-ии конструкторы всегда возвращают объект
// 5 call, apply - методы, явно определяющие контекст функции

// 1
function showThis() {
    console.log(this);
}

showThis();

// 2
let sumFnc= function showThisInside(a = 3, b = 43) {
    console.log(a);
    function sum(){
        // контекст отсутствует
        // console.log(this.a, this.b);
        // используя замыкания мы видим эти переменные, берём их из аргументов showThisInside
        return a + b;
    }
    sum();
}
let val = 0;
val = sumFnc(3, 4);
console.log(val);
val = sumFnc();
console.log(val);

// 2
function raiseInBase(base, digit){
    if(base === 1){
        return digit;
    }
    return digit*raiseInBase(base-1,digit); 
    // 2*fnc(2,2) -> 2*fnc(1,2) -> 2
}

let baseNum = raiseInBase;

console.log(baseNum(3, 2));

// 3
let thisObj = {
    a: 3,
    b: 7,
    showThis(){
        console.log(this);
        let arwTest = () => console.log(this.a, this.b);
        arwTest();
    }
}

thisObj.showThis();


// 4

// this в конструкторах и классах - это новый экземпляр объекта
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.method = function newMethod(){
//         console.log(`new method of ${this.name}`);
//     };
// }

// let Vasya = new User('Vasya', '23');
// Vasya.method();
// console.log(Vasya);


// 5
function addAge(age, name){
    this[age] = 23;
    this.name = 'NewName';
    
}

let usr = {

}

addAge.apply(usr, ['age']);
addAge.call(usr, 'vozrast');
console.log(usr);

// bind - испльзуя bind мы жестко привязываем контекст функции

function multiply(num) {
    return this * num; 
}

let triple = multiply.bind(3);

console.log(triple(3));

let btn = document.querySelector('button');

btn.addEventListener